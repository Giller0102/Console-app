'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();



function rememberMyFilms () {
    for (let i = 0; i <=2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
        if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');    
            i--;
        }
    }
}
rememberMyFilms();



function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error');
    }
}
detectPersonalLevel();



let answerAboutGenres;
let personalGenres = [];

function writeYourGenres () {
    for (let i = 1; i < 3; i++) {
        answerAboutGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');

        if (answerAboutGenres == '' || answerAboutGenres == null) {
            answerAboutGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
        }

        personalGenres[i] = answerAboutGenres;
    }
}
writeYourGenres();



console.log(personalMovieDB);

























