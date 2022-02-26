import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import questions from './questions';

function QuizeApp(props){
  return (
    <div className='questionaire'>
      <div className='questionaire-header'>
        <h1>Quiz</h1>
      </div>

      {
        questions.map(questionObject => {
          return (
            <div className='question'>
              <p>{questionObject.question}</p>

              <div className='checkbox-grp'>
                  {
                    questionObject.answers.map(answer => {
                      return (
                        <div className='checkbox'>
                          <input type="checkbox" id={answer.answer} name={answer.answer} value={answer.isCorrect} />
                          <label for={answer.answer}>{answer.answer}</label> <br />
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

ReactDOM.render(
  <QuizeApp />
  ,
  document.getElementById('root')
);

reportWebVitals();
