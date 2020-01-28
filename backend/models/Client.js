const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Client = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  title: {
    type: String
  },
  initials: {
    type: String
  },
  address: {
    city: String,
    street: String,
    zip: String
  },
  phone: {
    type: Number
  },
  business: {
    type: Boolean
  },
  iban: {
    type: String
  },
  startDate: {
    type: String
  },
  active: {
    type: Boolean
  }
}, {
  collection: 'clients'
})

module.exports = mongoose.model('Client', Client)