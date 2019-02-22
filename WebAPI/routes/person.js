var express = require("express");
var router = express.Router();
const PersonModel = require("./../model/person");

router.post("/create", (request, response) => {
  var Person = {
    PersonId: request.body.PersonId,
    FullName: {
      FirstName: request.body.FullName.FirstName,
      MiddleName: request.body.FullName.MiddleName,
      LastName: request.body.FullName.LastName
    },
    Gender: request.body.Gender,
    DateOfBirth: request.body.DateOfBirth,
    Age: request.body.Age,
    Address: {
      FlatNumber: request.body.Address.FlatNumber,
      SocietyName: request.body.Address.SocietyName,
      AreaName: request.body.Address.AreaName
    },
    City: request.body.City,
    State: request.body.State,
    Pincode: request.body.Pincode,
    PhoneNo: request.body.PhoneNo,
    MobileNo: request.body.MobileNo,
    PhysicalDisability: request.body.PhysicalDisability,
    MaritalStatus: request.body.MaritalStatus,
    Education: request.body.Education,
    BirthSign: request.body.BirthSign
  };

  console.log(Person);
  PersonModel.create(Person, (err, res) => {
    if (err) {
      response.statusCode = 500;
      response.send({
        status: response.statusCode,
        error: err
      });
    } else {
      response.send({ status: 200, data: res });
    }
  });
});

// router.get("/info", (request, response) => {
//   PersonModel.find().then(
//     personDoc => {
//       response.status(200).send({ personDoc });
//     },
//     e => {
//       response.status(400).send(e);
//     }
//   );
// });

router.get("/:pid", (request, response) => {
  var pid = request.params.pid;
  PersonModel.find({ PersonId: pid }, (err,data) => {
    if(err){
      console.log(err);
      return
    }
    else if(data){
      response.send({status:200, data:data});
    }
    else{
      response.send({status:404, message:"No Data Found"});
    }
  });
});

// router.delete("/:pid", (request, response) => {
//   var pid = request.params.pid;
//   //console.log(pid);
//   PersonModel.deleteOne({ personalUID: pid }).then(
//     personDeletedDoc => {
//       response.status(200).send({
//         personDeletedDoc,
//         message: "Record deleted sucessfully"
//       });
//     },
//     e => {
//       response.status(400).send(e);
//     }
//   );
// });

// router.put("/update/:pid", (request, response) => {
//   console.log(request.params.pid);
//   var updatePerson = {
//     personalUID: request.body.personalUID,
//     fullName: {
//       firstName: request.body.fullName.firstName,
//       middleName: request.body.fullName.middleName,
//       lastName: request.body.fullName.lastName
//     },
//     gender: request.body.gender,
//     birthDate: request.body.birthDate,
//     email: request.body.email,
//     age: request.body.age,
//     address: {
//       flatNumber: request.body.address.flatNumber,
//       societyName: request.body.address.societyName,
//       streetName: request.body.address.streetName
//     },
//     city: request.body.city,
//     state: request.body.state,
//     pinCode: request.body.pinCode,
//     phoneNo: request.body.phoneNo,
//     mobileNo: request.body.mobileNo,
//     physicalDisable: request.body.physicalDisable,
//     maritalStatus: request.body.maritalStatus,
//     eduStatus: request.body.eduStatus,
//     birthSign: request.body.birthSign,
//     isAuthorized: request.body.isAuthorized
//   };

//   var updateConditon = {
//     personalUID: request.params.pid
//   };

//   PersonModel.updateOne(updateConditon, updatePerson, function(err, res) {
//     if (err) {
//       response.status = 500;
//       response.send({ status: response.status, error: err });
//     }
//     console.log(JSON.stringify(res));
//     response.send({ status: 200, Message: "Record Updated Successfully" });
//   });
// });

module.exports = router;
