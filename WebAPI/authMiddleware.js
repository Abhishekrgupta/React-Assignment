const userModel = require("./model/users");
const roleModel = require("./model/roles");

const jwt = require("jsonwebtoken");
const tokenSetting = require("./config/token");

module.exports = function() {
  return function(req, res, next) {
    // "REQUEST" other than "CREATE USER" or "AUTH USER"
    if (!(req.url == "/api/user/auth")) {
      /* #region "FOR PRODUCT ROUTES" */

      // token data reading
      let tokenValue = req.headers.authorization.split(" ")[1];
      if (tokenValue === undefined || tokenValue === "") {
        res.send({
          status: 401,
          authenticated: false,
          message: "authentication failed"
        });
      } else {
        // verifying token information
        jwt.verify(tokenValue, tokenSetting.jwtSecret, function(err, decoded) {
          if (err) {
            console.log("in auth error");
            res.send({
              status: 500,
              authenticated: false,
              message: "Token verification failed"
            });
          }
          next();
        });
      }

      /* #endregion */
    } else {
      // reading username and password for request object
      let user = {
        UserName: req.body.UserName,
        Password: req.body.Password
      };

      //console.log(user);

      // user credentials checking
      userModel.findOne({$and: [{UserName: req.body.UserName},{Password: req.body.Password}]}, (err, data) => {
        //userModel.isAuthenticate(user, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        if (data != undefined) {
          let userId = data.UserId;          
          // token creation
          var token = jwt.sign({ user }, tokenSetting.jwtSecret, {
            expiresIn: 2400
          });
          
          roleModel.findOne({ RoleId: data.RoleId }).exec((err, data) => {
            // TOKEN SEND TO CLIENT
            res.send({
              status: 200,
              token: token,
              role: data.RoleType,
              UserId: userId
            });
          });
        } else {
          res.statusCode = 401;
          res.send({ status: res.statusCode, message: "Unauthorized user" });
          res.end();
        }
      });
      /* #endregion */
    }
  };
};
