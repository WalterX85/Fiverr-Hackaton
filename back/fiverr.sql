DROP DATABASE IF EXISTS fiverr;
CREATE DATABASE fiverr;
USE fiverr;

CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `question` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_question_user` FOREIGN KEY (`user_id`) REFERENCES user(id)
);

CREATE TABLE `answer` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `question_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_answer_user` FOREIGN KEY (`user_id`) REFERENCES user(id),
    CONSTRAINT `fk_answer_question` FOREIGN KEY (`question_id`) REFERENCES question(id)
);


insert into user(id, email, password) values
  (1, 'a@mail.com', 'secret'),
  (2, 'b@mail.com', 'secret');

insert into question(id, user_id) values
  (1, 1);

insert into answer(id, user_id, question_id) values
  (1, 2, 1);
