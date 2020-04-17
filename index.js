const express =require('express')
const PORT = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const presRoutes = require ('./routes/presRoutes')

app.use(parser.json())
app.use(cors())

//add routers 
app.use('/presentations', presRoutes)

// app.get('/', (req, res)=>{
//     res.send("index working")
// })


app.listen(PORT, () => console.log('workit coder!', PORT))