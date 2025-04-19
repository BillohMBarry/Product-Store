import express from "express"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

const port = process.env.PORT || 8000
const app = express()
// midddleware
// allow  us to accept json data in the req.body
app.use(express.json())

app.use("/api/products", productRoutes)

// console.log(process.env.Mongo_URL)
app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port http://localhost:${port}`)
})