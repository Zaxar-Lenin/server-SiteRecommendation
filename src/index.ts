import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app:express.Application  = express()


app.use(express.json())

app.use(cors())



const port = process.env.PORT || "8080"

app.listen(port,() =>{
    console.log(`Server started on port: ${port}`)
})


