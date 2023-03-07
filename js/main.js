'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i <=2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    

    if (a != '' && b != '' && a != null && b != null && a.length > 50 && b.length > 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');    
    }
}


if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}


console.log(personalMovieDB);




















