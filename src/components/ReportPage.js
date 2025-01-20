import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const ReportPage = ({ questions, answers }) => {
  return (
    <Container>
      <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>
        Quiz Report
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Question</b></TableCell>
            <TableCell><b>Your Answer</b></TableCell>
            <TableCell><b>Correct Answer</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow key={index}>
              <TableCell>{question.question}</TableCell>
              <TableCell style={{ color: answers[index] === question.correctAnswer ? "green" : "red" }}>
                {answers[index] || "No Answer"}
              </TableCell>
              <TableCell>{question.correctAnswer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ReportPage;
