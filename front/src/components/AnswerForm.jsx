import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={submitAnswer}>
      <div>
        <label htmlFor="Answer-text">
          Votre réponse :
          <input id="answer-text" name="answer_text" type="text" value={answerData.answer_text} onChange={handleChange} />
        </label>
      </div>
      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}

AnswerForm.propTypes = {
  addAnswer: PropTypes.func.isRequired,
};

export default AnswerForm;
