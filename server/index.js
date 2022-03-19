const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { transactionSchema } = require("./cardScheme");
const jsonParser = express.json();

const PORT = process.env.PORT || 3001;
const mongodb = "mongodb+srv://user:1234@cluster0.as6o5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

const Transaction = mongoose.model("Transaction", transactionSchema);

app.use(cors());
app.use(express.urlencoded({ extended: true }));

async function start() {
  console.log("try to start server...");
  try {
    await mongoose.connect(mongodb, {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server has been started with port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();

app.post("/transaction", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const CardNumber = req.body.CardNumber;
  const ExpDate = req.body.ExpDate;
  const Cvv = req.body.Cvv;
  const Amount = +req.body.Amount;

  if (!CardNumber || !ExpDate || !Cvv || !Amount) return res.sendStatus(400);

  const transaction = new Transaction({
    CardNumber: CardNumber.match("\\d{16}")[0],
    ExpDate: ExpDate.match("\\d{2}/\\d{4}")[0],
    Cvv: Cvv.match("\\d{3}")[0],
    Amount,
  });

  transaction.save(function (error) {
    if (error) res.send(error).status(400);
    else
      res.send({
        RequestId: transaction._id,
        Amount: transaction.Amount,
      });
  });
});
