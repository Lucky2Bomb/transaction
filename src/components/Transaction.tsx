import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import requestTransaction from "../http/requestTransaction";
import CardNumber from "./CardNumber";
import Cvv from "./Cvv";
import Amount from "./Amount";
import ExpirationDate from "./ExpirationDate";

function Transaction() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");

  const isValid = cardNumber.length === 16 && expirationDate.length === 6 && cvv.length === 3 && amount.length > 0;

  const onSendClick = () => {
    const body = {
      CardNumber: cardNumber,
      ExpDate: `${expirationDate.substring(0, 2)}/${expirationDate.substring(2, 6)}`,
      Cvv: cvv,
      Amount: +amount,
    };

    requestTransaction(body).then((value) => alert(JSON.stringify(value.data)));
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />

      <ExpirationDate expirationDate={expirationDate} setExpirationDate={setExpirationDate} />

      <Cvv cvv={cvv} setCvv={setCvv} />

      <Amount amount={amount} setAmount={setAmount} />

      <Button variant="contained" disabled={!isValid} sx={{ mt: 2 }} onClick={onSendClick} fullWidth>
        Send
      </Button>
    </Grid>
  );
}

export default Transaction;
