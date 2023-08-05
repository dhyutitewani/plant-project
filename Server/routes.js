// implement routes 

// use expresjs documentation and articles i have sent on discord 

//  create plant route
/*
    POST request
    > Figure out how to send data in POST request (Through body and params)
    > just log the value of data u have sent for now , we will implement mongodb later

*/
const express = require('express');
const app = express();
const port = 3000;

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