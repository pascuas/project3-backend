const express =require('express')
const PORT = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(parser.json())
app.use(cors())

//add routers 
app.get('/', (req, res)=>{
    res.send("index working")
})


app.listen(PORT, () => console.log('workit coder!', PORT))