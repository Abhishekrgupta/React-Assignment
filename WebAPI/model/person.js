const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  PersonId: {
    type: String,
  },
  FullName: {
    FirstName: String,
    MiddleName: String,
    LastName: String
  },
  Gender: String,
  DateOfBirth: Date,
  Age: Number,
  Address: {
    FlatNumber: String,
    SocietyName: String,
    AreaName: String
  },
  City: String,
  State: String,
  Pincode: Number,
  PhoneNo: Number,
  MobileNo: {
    type: Number,
    unique: true,
  },
  PhysicalDisability: {
    type: String,
    default: 'null'
  },
  MaritalStatus: String,
  Education: String,
  BirthSign: {
    type: String,
    default: 'null'
  },
  isAuthorized: {
    type: String,
    default: 'E'
  } // E-Entry, R-Reject, A-Approved, P-Pending/Inactive
});

const Person = (module.exports = mongoose.model(
  "Person",
  personSchema,
  "Person"
));