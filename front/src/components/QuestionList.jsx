import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);
  return (
    <ul>
      {questions.map((question) => (<li key={question.id} className="liQuestion"><Link to={`/questions/${question.id}`}>{question.question_text}</Link></li>))}
    </ul>
  );
}

export default QuestionList;
