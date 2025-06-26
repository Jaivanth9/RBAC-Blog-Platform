const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config(); // Always near the top

const { MONGO_URI } = require('./config/key');

const app = express(); // ✅ Declare 'app' before using it

//============= MIDDLEWARES ==============//
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend
  credentials: true               // Allow cookies if needed
}));
app.use(express.json()); // To parse JSON request bodies

//============= MONGOOSE ==============//
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex is no longer needed in newer mongoose versions
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//============= MODELS ==============//
require('./models/usermodel');

//============= ROUTES ==============//
app.get("/", (req, res) => {
  res.send("🚀 Server working...");
});

app.use('/api/auth', require('./routes/authroute'));
app.use('/auth', require('./routes/authroute'));


//============= START SERVER ==============//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
