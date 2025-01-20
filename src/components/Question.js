import React from "react";
import {
  Card,
  CardContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";

const Question = ({ question, questionIndex, answer, onAnswer }) => {
      if (!question || !question.question || !question.options) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" color="error">
            Question data is not available or invalid.
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardContent>
       
        <Typography variant="h6" color="primary">{`Q${questionIndex + 1}. ${
          question.question
        }`}</Typography>

      
        <RadioGroup
          value={answer || ""}
          onChange={(e) => onAnswer(e.target.value)}
        >
          {question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio color="secondary" />}
              label={<Typography variant="body1">{option}</Typography>}
            />
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Question;
