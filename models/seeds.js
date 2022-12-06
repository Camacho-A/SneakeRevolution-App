///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const { urlencoded } = require("express")
const mongoose = require("./connection")
const Sneaker = require("./sneaker")
// const img = require("../images/")


mongoose.connection.on("open", () => {
	const sneakers = [
		{
			name: "Air Jordan 1",
			style: "High Tops",
			rating: 10,
			img: "https://i.ibb.co/j6sjVGX/jordan1.png",
			deadstock: true,
		},
		{
			name: "Air Max 1",
			style: "Mid Tops",
			rating: 9,
			img: "https://i.ibb.co/r0Phcv2/airmax1.png",
			deadstock: true,
		},
		{
			name: "Air Force 1",
			style: "Low Tops",
			rating: 9.5,
			img: "https://i.ibb.co/fpFtvfC/airforce1.png",
			deadstock: true,
		},
		{
			name: "Air Huarache",
			style: "Mid Tops",
			rating: 7,
			img: "https://i.ibb.co/MGhCjNX/airhuarache.png",
			deadstock: true,
		},
		{
			name: "Air Jordan XI",
			style: "High Tops",
			rating: 9.5,
			img: "https://i.ibb.co/ZWskYsj/airjordanxi.png",
			deadstock: true,
		},
		{
			name: "Dunk",
			style: "High Tops",
			rating: 8,
			img: "https://i.ibb.co/BBy8wxY/nikedunk.png",
			deadstock: false,
		},
	]
	Sneaker.deleteMany({}, (err, data) => {
		Sneaker.create(sneakers, (err, data) => {
			// log the create fruits to confirm
			console.log("--------Sneakers Created----------")
			console.log(data)
			console.log("--------Sneakers Created----------")

			// close the DB connection
			mongoose.connection.close()
		})
	})
})