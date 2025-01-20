import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Grid, Box } from "@mui/material";
import OverviewPanel from "./OverviewPanel";
import Question from "./Question";

const QuizPage = ({ questions, onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Time Remaining: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
      </Typography>
      <Grid container spacing={2}>
        
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: { xs: "none", md: "block" }, 
          }}
        >
          <OverviewPanel
            questions={questions}
            currentQuestion={currentQuestion}
            answers={answers}
            onSelect={(index) => setCurrentQuestion(index)}
          />
        </Grid>

        
        <Grid item xs={12} md={9}>
          <Question
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            answer={answers[currentQuestion]}
            onAnswer={(answer) => handleAnswer(currentQuestion, answer)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { sm: "space-between" },
              mt: 2,
            }}
          >
            
            <Button
              variant="contained"
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
              disabled={currentQuestion === 0}
              sx={{
                mb: { xs: 2, sm: 0 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Previous
            </Button>

          
            <Button
              variant="contained"
              onClick={() =>
                setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))
              }
              disabled={currentQuestion === questions.length - 1}
              sx={{
                mb: { xs: 2, sm: 0 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Next
            </Button>

           
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Submit Quiz
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuizPage;
