import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Forum.css';

const initialState = { answer_text: '', user_id: 1 };

function AnswerForm({ addAnswer }) {
  const [answerData, setAnswerData] = useState(initialState);

  const handleChange = (event) => setAnswerData(
    { ...answerData, [event.target.name]: event.target.value },
  );

  const submitAnswer = (event) => {
    event.preventDefault();
    addAnswer(answerData);
    setAnswerData(initialState);
  };

  return (
    <>
      <div className="answerForm">
        <form onSubmit={submitAnswer}>
          <div className="answerArea">
            <label htmlFor="Answer-text">
              Your answer :
              <textarea id="answer-text" name="answer_text" value={answerData.answer_text} onChange={handleChange} />
              <button type="submit" className="envoyer">Send</button>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

AnswerForm.propTypes = {
  addAnswer: PropTypes.func.isRequired,
};

export default AnswerForm;
