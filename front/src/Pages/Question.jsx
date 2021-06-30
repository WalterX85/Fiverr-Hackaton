import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import AnswerForm from '../components/AnswerForm';

function Question() {
  const id = parseInt(useParams().id, 10);

  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/questions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
      });
    fetch(`http://localhost:9000/questions/${id}/answers`)
      .then((res) => res.json())
      .then((data) => {
        setAnswers(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Link to="/forum" className="backForum">Back to forum</Link>
      <section>
        { question && <h1 className="h1Title">{question.question_text}</h1> }
        <div className="answerClass">
          <AnswerForm
            id={id}
            addAnswer={(answerData) => {
              const config = {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(answerData),
              };

              fetch(`http://localhost:9000/questions/${id}/answers`, config)
                .then((response) => response.json())
                .then((data) => { setAnswers([data, ...answers]); });
            }}
          />
          <ul>
            {answers.map((answer) => (<li key={answer.id}>{answer.answer_text}</li>))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Question;
