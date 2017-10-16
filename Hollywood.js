/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 Hollywood || created: 10.15.2017
 *   @todo nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieTitle;
let movieRating, averageRating, movieTotal, numCounter, printAvgRating;


/**
 * @method
 * @desc dispatch method
 * @returns {null}
 */
function main() {
    process.stdout.write('\x1bc');
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieTitle();
        setMovieRating();
        setNumCounter();
        setMovieTotal();
        setAverageRating();
        setPrintAvgRating();
        setContinueResponse();
    }
    printGoodbye();
}

/**
 * @method
 * @desc Continue Response
 * @returns {null}
 */

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setMovieTitle() {
    movieTitle= PROMPT.question(`\tWhat movie would you like to rate?`);

}

/**
 * @method
 * @desc Movie Rating
 * @returns {null}
 */

function setMovieRating() {
    const MAX_RATING = 5,
        MIN_RATING = 0,
        MAX_ATTEMPTS = 3;
    let answered = false;
    let counter = 0;
    while (counter < MAX_ATTEMPTS && answered != true) {
        movieRating = Number(PROMPT.question(`\nEnter how many stars 1-5: `));
        if (movieRating < MIN_RATING || movieRating > MAX_RATING) {
            counter++;
        } else {
            counter++;
            answered = true;
        }
    }
}

/**
 * @method
 * @desc Movie total
 * @returns {null}
 */
function setMovieTotal() {
    if(movieTotal != null) {
        movieTotal += movieRating
    } else {
        movieTotal = movieRating
    }
}


/**
 * @method
 * @desc Num Counter
 * @returns {null}
 */

function setNumCounter(){
    if (numCounter != null) {
        numCounter++;
    } else {
        numCounter = 1;
    }
}

/**
 * @method
 * @desc Average Rating
 * @returns {null}
 */

function setAverageRating() {
    averageRating = movieTotal / numCounter

}

/**
 * @method
 * @desc Prints Average Rating
 * @returns {null}
 */

function  setPrintAvgRating() {
    printAvgRating = console.log(`\nAverage rating is: ${averageRating}. `);
}
/**
 * @method
 * @desc Print goodbye utility method
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\tGoodbye.`);
}

/*
 Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from 0 to 5 that
 indicates the number of stars they are awarding to a movie title they are prompted for. The program executes
 continuously until a user decides to quit. If a user enters a star value that does not fall in the correct range,
 re-prompt the user three (3) times until a correct value is entered. At the end of the program, display the average
 star rating for the movie.
 */