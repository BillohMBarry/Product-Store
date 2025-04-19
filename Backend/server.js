import express from "express"
import { connectDB } from "./config/db.js"
import postRequest from "./post.js"
import deleteRequest from "./delete.js"
import updated from "./updateProduct.js"
import productModels from "./models/productModels.js"

const port = process.env.PORT || 8000
const app = express()
// midddleware
// allow  us to accept json data in the req.body
app.use(express.json())
app.get("/api/products/", async (req, res) => {
    // res.send("Hello World!")
    try {
        const products =  await productModels.find({})
        res.status(200).json({
            success: true,
            message : "Products fetched successfully",
            data : products
        })
    } catch (error) {
        console.log(`Error in fetching products ${error}`)
        res.status(400).json({
            success: false,
            message : "Products not found",
            data : error
        })
    }
})
// post request
app.use(postRequest)
// delete request
app.use(deleteRequest)
// updated request
app.use(updated)

// console.log(process.env.Mongo_URL)
app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port http://localhost:${port}`)
})