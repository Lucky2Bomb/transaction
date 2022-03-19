import { Container } from "@mui/material";
import React from "react";
import Transaction from "./components/Transaction";

function App() {
  return (
    <Container maxWidth="sm" className="app">
      <Transaction />
    </Container>
  );
}

export default App;
