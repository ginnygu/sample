const mongoose = require("mongoose");

async function mongooseConnect() {
	try {
		await mongoose.connect(
			"mongodb+srv://mainUser:helloWorld123@cluster0.fuzz7.mongodb.net/candyDatabase?retryWrites=true&w=majority"
		);
		console.log("Connected to Mongodb");
	} catch (error) {
		throw error;
	}
}

module.exports = {
	mongooseConnect,
};
