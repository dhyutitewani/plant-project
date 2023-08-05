const express = require('express')
const PORT = 3000

const app = express()

// app.use(express.json()); 

app.get('/hi',(req,res)=>{
    res.send("helloooo")
})

app.post('/create',(req,res)=>{
    const data = req.body

    console.log(data);
})


app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`);
});


