// make server , refer it to express documentation 

// http://expressjs.com/en/starter/installing.html (this part is done already , u can read if u wanna)
// http://expressjs.com/en/starter/hello-world.html (tryy thissss) <<task 1>> : Once you run , your terminal will throw O/P

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})