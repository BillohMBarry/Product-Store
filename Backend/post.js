import express from "express"
import { productModels } from "./models/productModels.js"


const app = express()

const postRequest  = app.post("/api/products", async (req, res) => {
    const productRespond = req.body;
    if(!productRespond.productName || !productRespond.productPrize  || !productRespond.productImage) {
        return res.status(400).json({
            success : false,
            message : "Please provide all fields"
        })
    }
    const newProduct = new productModels(productRespond)

    try {
        await newProduct.save()
        res.status(201).json({
           success: true,
           data : newProduct 
        })
    } catch (error) {
        console.error(`Errors in create product: ${error}`)
        res.status(500).json({
            success: false,
            message : "server error"
        })
    }
})
export default postRequest