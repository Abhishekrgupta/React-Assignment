var express = require("express");
var router = express.Router();
const roleModel = require("./../model/roles");

/* creating new role */
router.post("/create", (req, res) => {
  let role = {
    //RoleId: req.body.roleId,
    RoleType: req.body.RoleType
  };

console.log(role);

  roleModel.create(role, (err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    res.send({ status: 200, message: "role added successfully", role: data.RoleType });
  });
  // res.send({status: 200, message: "role added successfully"});
});

/* get all roles */
router.get("/", (req, res) => {
  roleModel.find((err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    res.send({ status: 200, data: data });
  });
});

/* get role based on roleId */
router.get("/:id", (req, res) => {
  let id = req.params.id;
  roleModel.findOne({ RoleId: id }, (err, data) => {
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
  let role = {
    RoleId: req.params.id,
    RoleType: req.body.roleName
  };

  roleModel.findOneAndUpdate({ RoleId: req.params.id }, role, (err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    res.send({ status: 200, data: data });
  });
});

/* delete user based on userId */
router.delete("/:id", (req, res) => {
  let id = req.params.id;

  roleModel.deleteOne({ RoleId: id }, (err, data) => {
    if (err) {
      res.send({ status: 500, error: err });
    }
    if (data.deletedCount)
      res.send({ status: 200, message: `data deleted successfully` });
    else
      res.send({
        status: 404,
        message: `data not found for ${id}`
      });
  });
});

module.exports = router;
