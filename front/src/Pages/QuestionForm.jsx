import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function QuestionForm() {
  const history = useHistory();
  const [questionData, setQuestionData] = useState({ question_text: '', user_id: 1 });

  const handleChange = (event) => setQuestionData(
    { ...questionData, [event.target.name]: event.target.value },
  );

  const submitQuestion = (event) => {
    event.preventDefault();

    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questionData),
    };

    fetch('http://localhost:9000/questions', config)
      .then((response) => response.json())
      .then((data) => {
        history.push(`/questions/${data.id}`);
      });
  };

  return (
    <form onSubmit={submitQuestion}>
      <div>
        <label htmlFor="question-text">
          Votre question :
          <input id="question-text" name="question_text" type="text" value={questionData.question_text} onChange={handleChange} />
        </label>
      </div>
      <div>
        <button type="submit">Demander</button>
      </div>
    </form>
  );
}

export default QuestionForm;
