const express =require('express')
const PORT = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const presRoute = require ('./routes/presRoute')

app.use(parser.json())
app.use(cors())

//add routers 
app.use('/presentations', presRoute)

// app.get('/', (req, res)=>{
//     res.send("index working")
// })


app.listen(PORT, () => console.log('workit coder!', PORT))