// Counting Valleys

/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly STEPS  steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.

A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path

 */

function countingValleys(steps, path) {
    // Write your code here
    console.log('tracking hike');

    // create array to store the distance
    // traveled from sea level (0)
    let unitsFromBase = 0;

    // create variable to store the 
    // number of valleys travelled in a hike
    let valleysTravelled = 0;

    // loop through the path string 
    for (let i = 0; i < path.length; i++ ) {

        /* conditional validates the uphill or 
        downhill direction and adjusts unitsFromBase
        accordingly */

        // case: character of string at current index is U (uphill)
        if (path[i] != 'D') {
            console.log('in if, going up a mountain.');

            // add one to the last index of unitsFromBase
            // and push that number to the array
            unitsFromBase++;

        }// end if

        // case: character of string at current index is D (downhill)
        // and the hiker is at sea-level
        else if (path[i] != 'U' && unitsFromBase === 0) {
            console.log('in else if, going down the valley');

            // subtract one from the last index of unitsFromBase
            // then push that to unitsFromBase
            unitsFromBase--;

            // add one to the number of valleys travelled
            valleysTravelled++;

        } // end else if

        // case: character of string at current index 
        // is D but the hiker is not at sea-level
        else {
            console.log('in else, traveling the path');

            // subtract one from the last index of unitsFromBase
            // then push that to unitsFromBase
            unitsFromBase--;

        }// end else

    } // end path loop

        console.log(unitsFromBase)
    
    // return the number of valleys travelled
    return valleysTravelled;
}