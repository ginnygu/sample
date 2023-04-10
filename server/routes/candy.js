const Category = require("../model/Category");
const Candy = require("../model/Candy");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	const data = await Category.find({});
	res.json({ categories: data });
});
router.post("/add-new", async (req, res) => {
	console.log(req.body);
	const addNew = new Candy(req.body);
	await addNew.save();
	res.json({ success: true });
});

module.exports = router;
