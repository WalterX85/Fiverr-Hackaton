import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from './Header';
import '../CSS/Forum.css';

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
    <>
      <Header />
      <Link to="/forum" className="backForum">Back to forum</Link>
      <form className="formForm" onSubmit={submitQuestion}>
        <div className="formQuestion">
          <label className="labelForm" htmlFor="question-text">
            Your question :
            <textarea id="question-text" name="question_text" type="text" value={questionData.question_text} onChange={handleChange} />
            <button type="submit">Ask</button>
          </label>
        </div>
      </form>
    </>
  );
}

export default QuestionForm;
