const mongoose = require("mongoose");
const express = require("express");
const User = require("../scheme/scheme");
const route = express.Router();
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();

//getting the whole data from db
route.get("/user", (req, res) => {
	User.find({})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => console.log(err));
});

//get data of particular id from db
route.get("/user/:id", async (req, res) => {
	try {
		const alien = await User.findById(req.params.id);

		res.send(alien);
	} catch (err) {
		res.send(err);
	}
});

//posting data to the db
route.post("/user", async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		phoneno: req.body.phoneno,
		position: req.body.position,
	});
	try {
		const save_user = await user.save();
		res.json(save_user);
	} catch (err) {
		res.send({ message: err });
		// res.body.send(err)
	}
});

//deleting from  the db
route.delete("/user/:id", async (req, res) => {
	try {
		const del_item = await User.findByIdAndDelete(req.params.id);
		User.save();
		res.send(del_item);
	} catch (err) {
		res.send(err);
	}
});

//updating users
route.post("/updateUser/:id", async (req, res) => {
	const updateUser = await User.findByIdAndUpdate(req.params.id, {
		name: req.body.name,
		email: req.body.email,
		phoneno: req.body.phoneno,
		position: req.body.position,
	});
	try {
		User.save();
		res.send(updateUser);
	} catch (err) {
		res.send(err);
	}
});

//email service

route.post("/emailservice/", async (req, res) => {
	//configure
    APIKEY='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'
	sgMail.setApiKey(
        APIKEY
	);

	//data
	const data = req.body;
	const sendTo = {
		from:'mkharvi570@gmail.com',
		to: data.email,
		subject: data.headings,
		text: data.contents,
	};

	//sending mail
	sgMail.send(sendTo).then(
		(data) => {console.log(data)},
		(error) => {
			if (error.response) {
				console.error(error.response.body);
			}
		}
	);
});

module.exports = route;
