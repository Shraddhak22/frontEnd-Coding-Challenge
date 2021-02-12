const express = require("express")
const app = express()
const port = 4000

const data = require('./cards.json')
//console.log(data)
app.get('/getCards', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})
