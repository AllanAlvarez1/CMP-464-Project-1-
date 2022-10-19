const express = require('express')
const app = express()
const port = 3000
const porto = 4000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//get group index html page
app.get('/', function(req, res)   { //define root route for localhost:3000
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//get personal html page
app.get('/allan', function(req, res)  {
  res.sendFile(path.join(__dirname, '/allan.html'))
})

app.listen(porto, () => {
  console.log(`Example app listening on port ${porto}`)
})

app.post('/comment', (req, res) =>{

console.log(req.body)
res.json(req.body)

} )
