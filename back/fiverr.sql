DROP DATABASE IF EXISTS fiverr;
CREATE DATABASE fiverr;
USE fiverr;

CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `questions` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_questions_user` FOREIGN KEY (`user_id`) REFERENCES user(id)
);

CREATE TABLE `answers` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `questions_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_answers_users` FOREIGN KEY (`user_id`) REFERENCES user(id),
    CONSTRAINT `fk_answers_questions` FOREIGN KEY (`questions_id`) REFERENCES questions(id)
);