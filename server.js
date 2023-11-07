const express = require("express");
const debug = require("debug")("server");
const app = express();
const cors = require("cors");
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var session = require("express-session");

const prisma = new PrismaClient();
const SECRET_KEY = crypto.randomBytes(32).toString("hex");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(passport.authenticate("session"));
passport.use(
  new LocalStrategy(async function verify(email, password, cb) {
    try {
      // Find the user based on the provided email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return cb(null, false, { message: "Incorrect email or password." });
      }

      // Hash the provided password and compare it to the stored hash
      const hashedPassword = await crypto.pbkdf2Sync(
        password,
        user.salt,
        310000,
        32,
        "sha256"
      );

      if (user.password !== hashedPassword.toString("hex")) {
        return cb(null, false, { message: "Incorrect email or password." });
      }

      // Authentication successful, return the user
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  })
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, {
      id: user.id,
      email: user.email,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST, GET, PUT, DELETE, PATCH",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// const generateToken = (user) => {
//   return jwt.sign(user, SECRET_KEY, { expiresIn: "7 days" });
// };

// Add a new asset
app.post("/api/asset", passport.authenticate("session"), async (req, res) => {
  const { name, value, profit, loss, year, imageUrl } = req.body;
  const dateCreated = new Date();
  const dateUpdated = new Date();

  try {
    const asset = await prisma.asset.create({
      data: {
        name: name,
        value: parseInt(value),
        profit: parseInt(profit),
        loss: parseInt(loss),
        year: parseInt(year),
        dateCreated: dateCreated,
        dateUpdated: dateUpdated,
        imageUrl: imageUrl,
      },
    });
    debug("AddedAsset:", asset);

    res.status(200).json(asset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// admin login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(409).json({ message: "User not registered" });

    const isEqual = await bcrypt.compareSync(password, user.password);

    if (!isEqual) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    } else {
      // Add expiresIn
      const token = jwt.sign(user.email, SECRET_KEY);
      const { name, email } = user;
      res.status(200).json({ token, name, email });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // const { email, password } = req.body;
  // console.log(email, password);
  // const token = generateToken({ email });
  // const redirectUrl = "./Pages/home";
  // if (email === "njahigatinu@gmail.com" && password === "9256") {
  //   res.status(200).json({ token, redirectUrl });
  // } else {
  //   res.status(401).json({ error: "Invalid credentials" });
  // }
});
// admin sign up before login
// app.post("/api/user", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await prisma.user.create({
//       data: {
//         email: email,
//         password: parseInt(password),
//       },
//     });
//     debug("new user:", user);

//     res.status(200).json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
app.post("/api/user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      res.status(409).json({ message: "User already exists" });
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user account
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
        },
      });

      if (user) {
        res.status(201).json("User registered succesfully");
      } else {
        res.status(500).json("Failed to register user");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update an existing asset
app.put(
  "/api/asset/:id",
  passport.authenticate("session"),
  async (req, res) => {
    const { id } = req.params;
    const { name, value } = req.body;

    try {
      const asset = await prisma.asset.update({
        where: { id: id },
        data: {
          name: name,
          value: parseInt(value),
        },
      });
      debug("Updated asset:", asset);

      res.status(200).json(asset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Delete an asset
app.delete(
  "/api/asset/:id",
  passport.authenticate("session"),
  async (req, res) => {
    const { id } = req.params;

    try {
      const deletedAsset = await prisma.asset.delete({
        where: { id: id },
      });
      debug("deleted asset:", deletedAsset);

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Get all assets
app.get("/api/asset", passport.authenticate("session"), async (req, res) => {
  try {
    const assets = await prisma.asset.findMany();
    debug("Retrieved Assets:", assets);
    res.status(200).json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get a specific asset by ID
app.get("/api/asset/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const asset = await prisma.asset.findUnique({
      where: { id: id },
    });

    if (!asset) {
      return res.status(404).json({ error: "Asset not found" });
    }

    res.status(200).json(asset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
