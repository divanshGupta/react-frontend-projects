import React from 'react'

function Result({questions, userAnswers, resetQuiz = () => {}}) {

    const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className='result'>
      <h2>Result</h2>
      <p>You answered {correctAnswers} out of {questions.length} questions</p>
      <span className="tryAgain" onClick={resetQuiz}>Try Again</span>
      <ul className='answers'>
        {questions.map((question, index) => {
            return (
                <li key={index} data-correct={userAnswers[index]}>
                    Q{index + 1}. {question.question}
                    {question.answerOptions.map((option) => {
                       return (
                        <span className='rightAnswer'>{option.isCorrect && option.text}</span>
                       );
                    })}
                </li>
            );
        })}
      </ul>
    </div>
  )
}

export default Result
