CREATE DATABASE todoapp_datbase;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    name VARCHAR (25),
    task VARCHAR (50)
);