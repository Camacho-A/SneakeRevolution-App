////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const Sneaker = require("../models/sneaker")

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// index route
router.get("/", (req, res) => {
	const id = req.params.id
	Sneaker.find(id, (err, sneakers) => {
		res.render("sneakers/index.ejs", { sneakers })
		
	})
})

//new route
router.get("/new", (req, res) => {
	res.render("sneakers/new.ejs")
})

// create route
router.post("/", (req, res) => {
	req.body.deadstock = req.body.deadstock === "on" ? true : false
	Sneaker.create(req.body, (err, sneaker) => {
		res.redirect("/sneakers")
	})
})

// edit route
router.get("/:id/edit", (req, res) => {
	const id = req.params.id
	Sneaker.findById(id, (err, sneaker) => {
		res.render("sneakers/edit.ejs", { sneaker })
	})
})

//update route
router.put("/:id", (req, res) => {
	const id = req.params.id
	req.body.deadstock = req.body.deadstock === "on" ? true : false
	Sneaker.findByIdAndUpdate(id, req.body, { new: true }, (err, sneaker) => {
		res.redirect("/sneakers")
	})
})

router.delete("/:id", (req, res) => {
	const id = req.params.id
	Sneaker.findByIdAndRemove(id, (err, sneaker) => {
		res.redirect("/sneakers")
	})
})

// show route
router.get("/:id", (req, res) => {
	const id = req.params.id
	Sneaker.findById(id, (err, sneaker) => {
		res.render("sneakers/show.ejs", { sneaker })
	})
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router