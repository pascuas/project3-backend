const express =require('express')
const PORT = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')
const app = express()

//add routers 

app.use(parser.json())
app.use(cors())