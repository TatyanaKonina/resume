'use strict';
const numberOfilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', ''), 
       mark= prompt('На сколько оцените его?','');

personalMovieDB.movies[lastFilm] = mark;

