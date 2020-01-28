const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Patient = new Schema({
  name: {
    type: String
  },
  class: {
    type: String
  },
  species: {
    type: String
  },
  dateOfBirth: {
    type: String
  },
  crossBreed: {
    type: Boolean
  },
  gender: {
    type: String
  },
  warning: {
    type: String
  },
  remarks: {
    type: String
  },
  color: {
    type: String
  },
  active: {
    type: Boolean
  }
}, {
  collection: 'patients'
})

module.exports = mongoose.model('Patient', Patient)