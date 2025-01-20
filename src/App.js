import React, { useState, useEffect } from "react";
import { CircularProgress, Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import ReportPage from "./components/ReportPage";
import fetchQuestions from "./api/fetchQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", 
    },
    secondary: {
      main: "#ff5722", 
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const App = () => {
  const [email, setEmail] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    if (email) {
      setLoading(true);
      fetchQuestions()
        .then((data) => setQuestions(data))
        .catch((err) => setError("Failed to fetch questions. Please try again."))
        .finally(() => setLoading(false));
    }
  }, [email]);

  const handleQuizFinish = (submittedAnswers) => {
    setAnswers(submittedAnswers);
    setIsQuizFinished(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        {!email && <StartPage onStart={setEmail} />}
        {email && loading && <CircularProgress />}
        {email && error && <p>{error}</p>}
        {email && !isQuizFinished && !loading && !error && (
          <QuizPage questions={questions} onSubmit={handleQuizFinish} />
        )}
        {isQuizFinished && <ReportPage questions={questions} answers={answers} />}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
