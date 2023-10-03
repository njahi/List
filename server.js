const express = require("express");
const debug = require("debug")("server");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST, GET, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

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

// Update an existing asset
app.put("/api/asset/:id", async (req, res) => {
  const { id } = req.params;
  const { name, value, profit, loss, year, imageUrl } = req.body;
  const dateUpdated = new Date();

  try {
    const updatedAsset = await prisma.asset.update({
      where: { id: parseInt(id) },
      data: {
        name,
        value,
        profit,
        loss,
        dateUpdated,
        year,
        imageUrl,
      },
    });
    debug("Updated asset:", updatedAsset);

    res.status(200).json(updatedAsset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an asset
app.delete("/api/asset/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.asset.delete({
      where: { id: parseInt(id) },
    });

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
  console.log(id);

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
