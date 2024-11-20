const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
  googleId: String,
});

module.exports = mongoose.model('users', Userschema);
