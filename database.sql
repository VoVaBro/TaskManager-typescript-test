CREATE DATABASE Todo;

CREATE TABLE tasks (
 id SERIAL PRIMARY KEY,
 text VARCHAR(255) NOT NULL,
 priority integer
 CONSTRAINT con1 CHECK (priority > 0 AND priority < 101)
 );