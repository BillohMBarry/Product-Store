import express from "express"
import { Product } from "./models/productModel.js"
const app = express()

const deleteRequest = app.delete("/api/products/:id", async (req, res) => {
    // res.send("Delete Request")
    const { id } = req.params
    console.log(`id is ${id}`)

    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            data : product
        })
    } catch(error) {
        res.status(500).json({
            message: "Error in deleting product",
            data : error
        })
    }
})

export default deleteRequest