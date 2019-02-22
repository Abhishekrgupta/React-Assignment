const express = require("express");
const bodyPasrer = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// setting auth- middleware
const authMiddleware = require("./authMiddleware");

// router setting
var usersRouter = require("./routes/users");
var personRouter = require("./routes/person");
var rolesRouter = require("./routes/roles");
var loginStatusRouter = require("./routes/loginstatus");

var app = express();

/* #region Mongoose Database connectivity logic */
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:20000/HarbingerUserApp",
  { useNewUrlParser: true }
);
var dbConnect = mongoose.connect;
if (!dbConnect) {
  console.log("sorry db connection is not established");
  return;
}
/* #endregion */


/* #region middleware used in application */
app.use(cors());
app.use(bodyPasrer.urlencoded({ extended: false }));
app.use(bodyPasrer.json());
app.use(authMiddleware());

// router setting
app.use("/api/users", usersRouter);
app.use("/api/person", personRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/loginStatus", loginStatusRouter);

/* #endregion */

// server started setting
app.listen(8080, () => {
  console.log(`server started on port 8080`);
});
