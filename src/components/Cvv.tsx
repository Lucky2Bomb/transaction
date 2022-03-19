import { TextField } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";

interface CvvProps {
  setCvv: React.Dispatch<React.SetStateAction<string>>;
  cvv: string;
}

function Cvv({ cvv, setCvv }: CvvProps) {
  return (
    <NumberFormat
      format="###"
      type="password"
      id="cvv"
      placeholder="CVV"
      value={cvv}
      onValueChange={(e) => setCvv(e.value)}
      customInput={TextField}
      sx={{ mt: 2 }}
      minLength={3}
      label="CVV"
      fullWidth
      required
    />
  );
}

export default Cvv;
