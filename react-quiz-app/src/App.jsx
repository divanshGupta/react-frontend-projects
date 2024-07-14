import { useState } from 'react'
import './App.css'
import Question from './Components/Question'
import questions from './Constants/questions.json'
import Result from './Components/Result'

function App() {
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const[userAnswers, setUserAnswers] = useState([])

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  }
  return (
    <div className='App'>
      <h1>Quiz App</h1>

      {/* question component */}
      {currentQuestion < questions.length && (
        <Question 
        question={questions[currentQuestion]}
        onAnswerClick={handleNextQuestion}
        />
      )}

      {/* result component */}
      {currentQuestion === questions.length && (
        <Result
        userAnswers={userAnswers}
        questions={questions}
        resetQuiz={resetQuiz}
      />
      )}
    </div>
  )
}

export default App
