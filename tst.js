/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 Hollywood || created: 10.15.2017
 *   @todo nothing
 */

"use strict";
const PROMPT = require('readline-sync');

const MAX_STARS = 5;
const MAX_Runs = 3;
let continueResponse;
let movieTitle, starsNum, avgStars;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieTitle();
        setStarsNum();
        setAvgStars();
        setContinueResponse();
    }
    for (let i = 0; i < MAX_Runs; i++) {
        printGoodbye();
    }
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
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
    movieTitle= console.log(`\tSaving Private Ryan.`);

}

/**
 * @method
 * @desc setStarNum mutator
 * @returns {null}
 */
function setStarsNum() {
    starsNum= PROMPT.question(`Please enter number of stars: `);

}

/**
 * @method
 * @desc setAvgStars mutator
 * @returns {null}
 */
function setAvgStars() {
    if (starsNum !== null && starsNum <= MAX_STARS) {
        starsNum++;
    } else {
        starsNum = 3;
    }
    console.log(`\nAverage Rating: `);
}

/**
 * @method
 * @desc
 * @returns {null}
 */



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