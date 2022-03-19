import { TextField } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";

interface AmountProps {
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
}

function Amount({ amount, setAmount }: AmountProps) {
  return (
    <NumberFormat
      thousandSeparator={true}
      prefix={"$"}
      id="amount"
      placeholder="Amount"
      value={amount}
      onValueChange={(e) => setAmount(e.value)}
      customInput={TextField}
      sx={{ mt: 2 }}
      label="Amount"
      minLength={1}
      fullWidth
      required
    />
  );
}

export default Amount;
