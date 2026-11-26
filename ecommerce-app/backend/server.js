
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Welcome route
app.get("/", (req, res) => {
    res.send("E-commerce API is running!");
});

// Product API routes
app.use("/api/products", productRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");

        app.listen(process.env.PORT || 5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.log("MongoDB Error:", error.message);
    });
