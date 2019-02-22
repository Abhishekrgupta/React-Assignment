const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  RoleId: Number,
  RoleType: {
    type: String,
    default: "AccessUser"
  }
});

const Roles = (module.exports = mongoose.model("Roles", roleSchema, "Roles"));