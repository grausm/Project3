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
 The "Hurr Durr, Make 'em Smarter Everyday" private school has contracted you to write software that prints the monthly
 payment coupons for each month, grade, & classroom. The school is in session for 9 months (September - May), goes from
 kindergarten to  grade 8, & has 3 classrooms per grade-level. The monthly base cost for kindergarten is $80. All other
 grades are $60 monthly, multiplied by the current grade.
 Topics:  Loops (while, C-style for), nesting logic, typeof, validation++
 */