import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";

const StartPage = ({ onStart }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      onStart(email);
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Start Quiz</h1>
      <TextField
        label="Enter your email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Start Quiz
      </Button>
    </Container>
  );
};

export default StartPage;
