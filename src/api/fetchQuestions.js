import shuffleArray from "../utils/shuffleArray";

const fetchQuestions = async () => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=15");
    const data = await response.json();
    console.log("Fetched Questions:", data.results); 
    return data.results.map((item) => ({
      question: item.question,
      options: shuffleArray([item.correct_answer, ...item.incorrect_answers]),
      correctAnswer: item.correct_answer,
    }));
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export default fetchQuestions;
