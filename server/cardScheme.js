const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  CardNumber: String,
  ExpDate: String,
  Cvv: String,
  Amount: Number,
});

module.exports = { transactionSchema };
