const mongoose = require("mongoose");

const loginStatusSchema = mongoose.Schema({
  LoginStatusId: String,    // UserId
  UserName: String,
  LoginForm: String, // ????????  ---> geo-location // city name
  DateTime: { type: Date, default: Date.now }, // ??????
  IPAddress: String
});

const LoginStatus = (module.exports = mongoose.model(
  "LoginStatus",
  loginStatusSchema,
  "LoginStatus"
));
