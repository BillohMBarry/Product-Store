import express from "express"
import { connectDB } from "./config/db.js"
import postRequest from "./post.js"
import deleteRequest from "./delete.js"

const port = process.env.PORT || 8000
const app = express()
// midddleware
// allow  us to accept json data in the req.body
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello World!")  
})
// post request
app.use(postRequest)
// delete request
app.use(deleteRequest)


// console.log(process.env.Mongo_URL)
app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port http://localhost:${port}`)
})