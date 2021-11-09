CREATE DATABASE apitypescript;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);
INSERT INTO users (name, email)
VALUES ('jhon', 'jhon@bride.com'),
    ('carl', 'carl@gmail.com');