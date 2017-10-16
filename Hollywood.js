/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 Hollywood || created: 10.15.2017
 *   @todo nothing
 */

"use strict";
const PROMPT = require('readline-sync');

//Section 1 -----------------------------------------^

let continueResponse;
let policyId, lastName, firstName, age;
let premiumdDueDate, accidentsThreeYears;
let totalPrice;

const LANGUAGE = 'English';

//Section 2 -----------------------------------------^

/**
 * @method
 * @desc Dispatch method
 * @returns {null}
 */

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setpolicyId();
        setfirstName();
        setlastName();
        setage();
        setpremiumdDueDate();
        setaccidentsThreeYears();
        settotalPrice();
        printResults();
        setContinueResponse();
        return main();
    }
    printGoodbye();

}

/**
 * @method
 * @desc Do you want to continue
 * @returns {null}
 */

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is a incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

//Section 3 ----------------------------------------^

/**
 * @method
 * @desc Random policy id
 * @returns {null}
 */

function setpolicyId() {
    policyId = Math.floor((Math.random()* 5000) + 1);
}

/**
 * @method
 * @desc Enter last name
 * @returns {null}
 */
function setlastName() {
    lastName = (PROMPT.question(`\nPlease enter last name: `));
}

/**
 * @method
 * @desc Enter first name
 * @returns {null}
 */
function setfirstName() {
    firstName = (PROMPT.question(`\nPlease enter first name: `));
}

/**
 * @method
 * @desc Enter age
 * @returns {null}
 */
function setage() {
    age = Number(PROMPT.question(`\nPlease enter age: `));
}

/**
 * @method
 * @desc Enter premium due date
 * @returns {null}
 */
function setpremiumdDueDate() {
    premiumdDueDate = Number(PROMPT.question(`\nPlease enter premium due date: `));
}

/**
 * @method
 * @desc Enter accidents
 * @returns {null}
 */
function setaccidentsThreeYears() {
    accidentsThreeYears = Number(PROMPT.question(`\nHow many at fault accidents in the last 3 years: `));
}

/**
 * @method
 * @desc Total price
 * @returns {null}
 */
function settotalPrice() {
    totalPrice = 0;
    const BASE_PRICE = 100,
        UNDER_30 = 30,
        THIRTY_TO_45 = 45,
        SIXTY_AND_OVER = 60,
        UNDER_30_FEE = 20,
        THIRTY_TO_45_FEE = 10,
        SIXTY_AND_OVER_FEE = 30,
        ACCIDENTS = 50;
    if (age > 0) {
        if (age > 15 && age < UNDER_30) {
            totalPrice = UNDER_30_FEE + BASE_PRICE + (accidentsThreeYears * ACCIDENTS);
        } else if (age >= UNDER_30 && age < THIRTY_TO_45) {
            totalPrice = THIRTY_TO_45_FEE + BASE_PRICE + (accidentsThreeYears * ACCIDENTS);
        } else if (age >= SIXTY_AND_OVER) {
            totalPrice = SIXTY_AND_OVER_FEE + BASE_PRICE + (accidentsThreeYears * ACCIDENTS);
        }
    }


}

/**
 * @method
 * @desc Output final price
 * @returns {null}
 */
function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${firstName}'s bill: \$${totalPrice}. Customer#: ${policyId}`);
}

/**
 * @method
 * @desc Output goodbye
 * @returns {null}
 */
function printGoodbye() {
    process.stdout.write('\x1bc');
    console.log('\n\tGoodbye.');

}

//Section 4 -------------------------------------------^
/*
Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from 0 to 5 that
indicates the number of stars they are awarding to a movie title they are prompted for. The program executes
continuously until a user decides to quit. If a user enters a star value that does not fall in the correct range,
re-prompt the user three (3) times until a correct value is entered. At the end of the program, display the average
star rating for the movie.
 */
function processPaymentCoupons() {
    while (starsNum <= MAX_STARS) {
        while (currentClassroom <= MAX_CLASSROOM) {
            while (monthNum <= MAX_MONTH) {
                if (currentGrade === 0) {
                    console.log(`\n\tThe tuition for month: ${setCurrentMonth()}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${setUpperTuition()}.`);
                }
                setMonthNum();
            }
            setCurrentClassroom();
            setMonthNum();
        }
        setCurrentGrade();
        setCurrentClassroom();
    }
}
