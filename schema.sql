CREATE DATABASE datingApp_db;

USE datingApp_db;

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL, 
    photo VARCHAR(1000) NOT NULL, 
    scores INT (1)
)

INSERT INTO friends (name, photo, scores) VALUES ("Dexter", "http://www.toptensthings.com/wp-content/uploads/2012/03/8.-Dexter-of-Dexters-Laboratory.jpg", )