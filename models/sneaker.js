//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const { urlencoded } = require("express")
const mongoose = require("./connection")

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make fruits schema
const sneakerSchema = new Schema({
	name: String,
	style: String,
	rating: Number,
	img: String,
	deadstock: Boolean,
	username: String,
})


const Sneaker = model("Sneaker", sneakerSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Sneaker

