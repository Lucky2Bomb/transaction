import { TextField } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";

interface CardNumberProps {
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
}

function CardNumber({ cardNumber, setCardNumber }: CardNumberProps) {
  return (
    <NumberFormat
      format="#### #### #### ####"
      id="cardNumber"
      placeholder="1234 5678 9012 3456"
      label="Card number"
      value={cardNumber}
      onValueChange={(e) => setCardNumber(e.value)}
      customInput={TextField}
      sx={{ mt: 2 }}
      minLength={16}
      fullWidth
      required
    />
  );
}

export default CardNumber;
