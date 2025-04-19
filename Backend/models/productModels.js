import mongoose from "mongoose";
const productSchemas = new mongoose.Schema({
    productName: {
        type: String,
        require : true
    },
    productPrize: {
        type: Number,
        require : true
    },
    productImage: {
        type : String,
        require : true
    }
}, {
    timestamps: true //createdAt, updatedAt
})

const productModels = mongoose.model("Product", productSchemas)

export default productModels