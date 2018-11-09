CREATE DATABASE datingApp_db;

USE datingApp_db;

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL, 
    photo VARCHAR(1000) NOT NULL, 
    scores INT (1)
)

