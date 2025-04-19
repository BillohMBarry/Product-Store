import productModels from "../models/productModels.js";
import mongoose from "mongoose";
export const getProduct = async (req,res) => {
    try {
        const products = await productModels.find({})
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        console.log(`Error in fetching products ${error}`)  
        res.status(400).json({
            success: false,
            message: "Products not found",
            data: error
        })
    }
}
export const postProduct =  async (req,res) => {
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
}

export const updateProduct = async (req,res) => {
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
}
export const deleteProduct = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Product not found",
            data : error
        })
    }
    try {
        const product = await productModels.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            data : product
        })
    } catch(error) {
        console.log(`Error in deleting product ${error}`)
        res.status(500).json({
            success: false,
            message: "Server error",
            data : error
        })
    }
}