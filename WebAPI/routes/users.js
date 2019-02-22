var express = require("express");
var router = express.Router();
const userModel = require("./../model/users");
const roleModel = require("./../model/roles");

/* creating new user */
router.post("/create", (req, res) => {
  roleModel.findOne({ RoleType: req.body.Role }).exec((err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      let user = {
        UserId: req.body.UserName.substring(0,2)+Math.floor(Math.random()*999) , 
        UserName: req.body.UserName,
        Email: req.body.Email,
        Mobile: req.body.Mobile,
        Password: req.body.Password,
        RoleId: data.RoleId
      };
      
      userModel.create(user, (err, data) => {
        if (err) {
          res.send({ status: 500, error: err });
        } else {
          res.send({ status: 200, uid: data.UserId });
        }
      });
    }
  });
});

// authorizing user
router.post("/authorized", (req, res) => {
  console.log(req.body.Email);

  userModel
    .findOneAndUpdate({ Email: req.body.Email }, { isAuthorized: "true" })
    .exec((err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        userModel.find((err, user) => {
          if (err) {
            res.send({ status: 500, error: err });
          } else {
            let usr = [];
            user.map((value, idx) => {
              let u = {
                UserId: value.UserId,
                UserName: value.UserName,
                Email: value.Email,
                Mobile: value.Mobile,
                Authorized: value.isAuthorized
              };
              usr.push(u);
            });
            console.log(usr);

            res.send({ status: 200, user: usr });
          }
        });
      }
    });
});

/* get all users */
// router.get("/", (req, res) => {
//   userModel.find((err, user) => {
//     if (err) {
//       res.send({ status: 500, error: err });
//     } else {
//       let users = [];
//       user.map((value, index) => {
//         roleModel.findOne({'RoleId':value.RoleId}).exec((err,data) =>{
//           if(err){
//             console.log(err);
//             return;
//           }
//           else{
//             let usr ={
//               'UserName': value.UserName,
//               'Email': value.Email,
//               'Mobile': value.Mobile,
//               'RoleName': data.RoleType,
//               'isAuthorized': value.isAuthorized
//             };
//             //users.push(usr);
//             module.export = usr;
//             console.log(usr);
//           }
//         })
//         users.push(usr);
//       });
//       res.send({ status: 200, data: users });
//     }
//   });
// });

/* get all users */
router.get("/", (req, res) => {
  userModel.find((err, user) => {
    if (err) {
      res.send({ status: 500, error: err });
    } else {
      let usr = [];
      user.map((value, idx) => {
        let u = {
          UserId: value.UserId,
          UserName: value.UserName,
          Email: value.Email,
          Mobile: value.Mobile,
          Authorized: value.isAuthorized
        };
        usr.push(u);
      });
      console.log(usr);

      res.send({ status: 200, user: usr });
    }
  });
});

/* get user based on userId */
router.get("/:id", (req, res) => {
  let id = req.params.id;
  userModel.findOne({ UserId: id }, (err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    if (data) {
      res.send({ status: 200, data: data });
    } else {
      res.send({ status: 404, message: "not found" });
    }
  });
});

/* update user based on userId */
router.put("/:id", (req, res) => {
  let user = {
    UserId: req.params.id,
    UserName: req.body.userName,
    Email: req.body.email,
    Mobile: req.body.mobile,
    Password: req.body.password,
    RoleId: req.body.roleId
  };

  userModel.findOneAndUpdate({ UserId: req.params.id }, user, (err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    res.send({ status: 200, data: data });
  });
});


module.exports = router;