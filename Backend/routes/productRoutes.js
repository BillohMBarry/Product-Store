import express from 'express';
import { getProduct, postProduct, updateProduct, deleteProduct } from '../controllers/productControllers.js';
const router = express.Router()

// get all products
router.get("/", getProduct)
// post a product
router.post("/", postProduct)
// update a product
router.put("/:id",updateProduct)
// delete a product
router.delete("/:id", deleteProduct)

export default router