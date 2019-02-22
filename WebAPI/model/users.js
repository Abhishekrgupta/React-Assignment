const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  UserId: String,
  UserName: String,
  Email: {
    type: String,
    unique: false
  },
  Mobile: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    unique: false
  },
  Password: String,
  RoleId: {
    type: Number,
    default: 3
  },
  isAuthorized: {
    type: String,
    default: "false"
  }
});

const userModel = (module.exports = mongoose.model("Users", userSchema, "Users"));