const express = require("express");
const debug = require("debug")("server");
const app = express();
const cors = require("cors");
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();
const SECRET_KEY = crypto.randomBytes(32).toString("hex");
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST, GET, PUT, DELETE, PATCH",
    allowedHeaders: "Content-Type, Authorization",
  })
);

const generateToken = (user) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
};

// Add a new asset
app.post("/api/asset", async (req, res) => {
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
  if (email === "njahigatinu@gmail.com" && password === "9256") {
    const token = generateToken({ email });
    const redirectUrl = "./Pages/home";
    res.status(200).json({ token, redirectUrl });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});
// admin sign up before login
app.post("/api/user", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: parseInt(password),
      },
    });
    debug("new user:", user);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update an existing asset
app.put("/api/asset/:id", async (req, res) => {
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
});

// Delete an asset
app.delete("/api/asset/:id", async (req, res) => {
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
});

// Get all assets
app.get("/api/asset", async (req, res) => {
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
