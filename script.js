"use strict";

let numberOfFilms;
let lastWatchedMovie,
	lastWachedMovieRating;

movieCountQuestion();

// для дебага
//let numberOfFilms = 5;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//console.log(personalMovieDB.genres.length);

lastMoviesWrite();
endCommentary();
writeYourGenres();
showMyDB();

function movieCountQuestion(){
	numberOfFilms = prompt("How much movies do you already watched?", "").trim();
	while(isNaN(numberOfFilms) || numberOfFilms === null || numberOfFilms < 0){
		alert("Wrong format answer. Write only numbers that are not negative");
		numberOfFilms = +prompt("How much movies do you already watched?", "");
	}
	numberOfFilms = parseInt(numberOfFilms);
}

function lastMoviesWrite(){
	for(let correctAnswer = 0; correctAnswer < 2;){
		if(!lastWatchedMovie){
			lastWatchedMovie = prompt("Name one of the last films you watched", "");
		}
		if(!lastWatchedMovie || lastWatchedMovie.length > 50 ){
			alert("Wrong format answer. Answer should be not an empty space and not longer than 50 characters");
			continue;
		}

		lastWachedMovieRating = +prompt("How would you rate this movie?", "");
		if(!lastWachedMovieRating || lastWachedMovieRating < 1 || lastWachedMovieRating > 10){
			lastWachedMovieRating = 0;
			alert("Wrong format answer. Answer should be a number, without empty spaces and have the value between 1-10");
			continue;
		}

		personalMovieDB.movies[lastWatchedMovie] = lastWachedMovieRating;
		lastWatchedMovie = "";

		correctAnswer++;
	}
}

function endCommentary(){
	if(personalMovieDB.count < 10 && personalMovieDB.count >= 0){
		alert("You watched a really small amount of films");
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		alert("You watched a decent amount of films");
	} else if(personalMovieDB.count > 30){
		alert("Wow, you are really a cinephile");
	} else{
		alert("There is an error in counting your watched films amount");
	}
}

function writeYourGenres(){
	const questionAmount = personalMovieDB.genres.length + 3;
	for(let i = personalMovieDB.genres.length; i < questionAmount; i++){
		personalMovieDB.genres[i] = prompt(`Your favorite genre on number ${i + 1}`, "");
	}
}

function showMyDB(){
	if(!personalMovieDB.privat){
		console.log(personalMovieDB);
	}
}