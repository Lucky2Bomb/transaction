import { TextField } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";

interface ExpirationDateProps {
  setExpirationDate: React.Dispatch<React.SetStateAction<string>>;
  expirationDate: string;
}

function ExpirationDate({ expirationDate, setExpirationDate }: ExpirationDateProps) {
  return (
    <NumberFormat
      format="##/####"
      id="expirationDate"
      placeholder="01/2000"
      value={expirationDate}
      onValueChange={(e) => setExpirationDate(e.value)}
      customInput={TextField}
      sx={{ mt: 2 }}
      label="Expiration date"
      fullWidth
      required
    />
  );
}

export default ExpirationDate;
