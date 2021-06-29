import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Question() {
  const { id } = useParams();

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
    <section>
      { question && <h1>{question.question_text}</h1> }
      <ul>
        {answers.map((answer) => (<li key={answer.id}>{answer.answer_text}</li>))}
      </ul>
    </section>
  );
}

export default Question;
