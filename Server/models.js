const mongoose = require('mongoose');

// Define the schema for the Location
const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

// Define the main schema for the Plant
const plantSchema = new mongoose.Schema({
  plantID: { type: String, required: true },
  volunteerName: { type: String, required: true },
  studentID: { type: String, required: true },
  scientificPlantName: { type: String, required: true },
  location: { type: locationSchema, required: true },
  commonPlantName: { type: String, required: true },
  lastCareDate: { type: Date, required: true },
  pestAndDiseases: { type: String },
  notes: { type: String }
});

// Create the Plant model
const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;