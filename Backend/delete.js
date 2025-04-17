import express from "express"

const app = express()

const deleteRequest = app.delete("/api/products/:id", async (req, res) => {
    // res.send("Delete Request")
    const { id } = req.params
    console.log(`id is ${id}`)
})

export default deleteRequest