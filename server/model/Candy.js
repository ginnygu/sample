const mongoose = require("mongoose");

const candySchema = new mongoose.Schema({
	name: String,
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
	},
	subCategories: String,
});

const Candy = mongoose.model("Candy", candySchema);
module.exports = Candy;
