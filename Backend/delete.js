import express from "express"
import productModels from "./models/productModels.js"
const app = express()

const deleteRequest = app.delete("/api/products/:id", async (req, res) => {
    // res.send("Delete Request")
    const { id } = req.params
    console.log(`id is ${id}`)

    try {
        const product = await productModels.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            data : product
        })
    } catch(error) {
        console.log(`Error in deleting product ${error}`)
        res.status(400).json({
            success: false,
            message: "Product not found",
            data : error
        })
    }
})

export default deleteRequest