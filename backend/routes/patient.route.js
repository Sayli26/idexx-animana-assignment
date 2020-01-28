const express = require('express');
const app = express();
const patientRoute = express.Router();

// Patient model
let Patient = require('../models/Patient');

// Add Patient
patientRoute.route('/add-patient').post((req, res, next) => {
  Patient.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all patients
patientRoute.route('/patients').get((req, res) => {
  Patient.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single patient
patientRoute.route('/read-patient/:id').get((req, res) => {
  Patient.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update patient
patientRoute.route('/update-patient/:id').put((req, res, next) => {
  Patient.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Patient successfully updated!')
    }
  })
})

// Delete patient
patientRoute.route('/delete-patient/:id').delete((req, res, next) => {
  Patient.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = patientRoute;