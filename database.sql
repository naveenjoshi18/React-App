CREATE DATABASE movies;

CREATE TABLE movie(
    movie_id SERIAL PRIMARY KEY,
    movie_name varchar(30),
    genre varchar(15)
     
);