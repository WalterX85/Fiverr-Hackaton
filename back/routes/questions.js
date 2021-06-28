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

module.exports = questions;
