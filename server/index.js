const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
require('dotenv/config');
const Users = require('./models/User');

const app = express();

app.use('/auth/google', require('./routes/authRoutes'));

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
