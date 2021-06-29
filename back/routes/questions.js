const questions = require('express').Router();
const db = require('../db-config');

questions.get('/', (req, res) => {
  db.query('SELECT * from question', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

questions.get('/:id/answers', (req, res) => {
  db.query('SELECT * from answer WHERE question_id = ?', [req.params.id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

questions.post('/', (req, res) => {
  const question = {
    question_text: req.body.question_text,
    user_id: req.body.user_id,
  };

  db.query('INSERT INTO question (question_text, user_id) VALUES (?, ?)', [question.question_text, question.user_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...question, id: results.insertId });
    }
  });
});

questions.post('/:id/answers', (req, res) => {
  const answer = {
    user_id: req.body.user_id,
    answer_text: req.body.answer_text,
  };

  db.query('INSERT INTO answer (question_id, user_id, answer_text) VALUES (?, ?, ?)', [req.params.id, answer.user_id, answer.answer_text], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...answer, id: results.insertId });
    }
  });
});
module.exports = questions;
