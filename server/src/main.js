const express  = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
const dbConnect =require("./dbConnect")
const movieRoutes =require("./routes/movies")


app.use(express.json())
app.use(cors())
dbConnect()


app.use('/api',movieRoutes)




const PORT =process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))