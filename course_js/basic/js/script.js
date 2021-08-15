'use strict';

let numberOfFilms;





const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function  (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        let ans = '';
        for (let i = 1; i <= 3; i++) {
            ans = prompt(`Ваш любимый жанр под номером ${i}`);
            if (ans == 'отмена' || ans === '' || ans ===null){
                console.log('error');
                i--;
            }
            else {
                personalMovieDB.genres[i-1] = ans;
            }
        }
        personalMovieDB.genres.forEach((value,index) => {
            console.log(`Любимый жанр ${index+1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function(){
       personalMovieDB.privat = !personalMovieDB.privat;
    }

};

personalMovieDB.rememberMyFilms();