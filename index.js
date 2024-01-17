const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const momentRoutes = require('./routes/momentRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require("./config");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use this middleware for URL-encoded bodies
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/moment', momentRoutes);
app.use('/user', userRoutes);

// Connect to MongoDB
mongoose.connect(`${config.mongoURL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
