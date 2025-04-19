import express from "express"
import productModels from "./models/productModels.js"   
import mongoose from "mongoose"

const app = express()

const updated = app.put("/api/products/:id", async (req,res) => {
    const {id} = req.params
    const product = req.body
 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Product not found",
            data : error
        })
    }
    try {
        const updateProduct = await productModels.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data : updateProduct
        })
    } catch (error) {
        console.log(`Error in updating product ${error}`)
        res.status(400).json({
            success: false,
            message: "Product not found",
            data : error
        })
    }
})

export default updated