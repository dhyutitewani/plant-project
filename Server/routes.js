// implement routes 

// use expresjs documentation and articles i have sent on discord 

//  create plant route
/*
    POST request
    > Figure out how to send data in POST request (Through body and params)
    > just log the value of data u have sent for now , we will implement mongodb later

*/
const express = require('express');
const { connectDB } = require('./database');
const DBuri = 'mongodb://0.0.0.0:27017/plantProject'
const app = express();
const port = 3000;
const Plant = require('./models');
connectDB(DBuri)
app.use(express.json());

app.post('/plants', (req, res) => {
  // Extract plant information from the request body
  const {
    plantID,
    volunteerName,
    studentID,
    scientificPlantName,
    location,
    commonPlantName,
    lastCareDate,
    pestAndDiseases,
    notes
  } = req.body;

  // Create a new Plant instance using the extracted information
  const newPlant = new Plant({
    plantID,
    volunteerName,
    studentID,
    scientificPlantName,
    location,
    commonPlantName,
    lastCareDate,
    pestAndDiseases,
    notes
  });

  // Save the new plant to the database
  newPlant.save()
    .then((savedPlant) => {
      console.log('New plant added:', savedPlant);
      res.status(201).json({ message: 'Plant added successfully', plant: savedPlant });
    })
    .catch((err) => {
      console.error('Error saving plant:', err);
      res.status(500).json({ error: 'Failed to save plant' });
    });
});

app.listen(port, () => 
console.log(`Listening on port ${port}`));


app.post('/createPlant', (req, res) =>{
    const data = req.body
    console.log(data)
});

//  update plant route
/*
    What will it be ? POST/GET/PUT/UPDATE request type(search and figure out)
    > Figure out how to update data in X request type (Through body and params)
    > just log the value of data u have updated for now , we will implement mongodb later

*/


// show plant route
/*
    >This has to show all the plants availabe 
    > For director sir use
    > Log all the plant values

*/

// Route to handle the GET request for retrieving all plants
app.get('/plants', (req, res) => {
  Plant.find()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      console.error('Error retrieving plants:', err);
      res.status(500).json({ error: 'Failed to retrieve plants' });
    });
});

// Route to handle the PUT request for updating plant information
app.put('/plants/:id', (req, res) => {
  const plantId = req.params.id;
  const updateData = req.body;

  Plant.findOneAndUpdate({plantID: plantId}, updateData)
    .then((updatedPlant) => {
      if (!updatedPlant) {
        return res.status(404).json({ error: 'Plant not found' });
      }
      res.status(200).json(updatedPlant);
    })
    .catch((err) => {
      console.error('Error updating plant:', err);
      res.status(500).json({ error: 'Failed to update plant' });
    });
});