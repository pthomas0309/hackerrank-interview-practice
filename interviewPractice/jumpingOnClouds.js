/* There is a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. */

function jumpingOnClouds(c) {
    // Write your code here

    // the input (c) represents an array of binary values
    // that represent clouds that are safe to jump on
    // and those that are not
    const cloudArr = c;

    // variable to store the amount of
    // jumps to get to the end
    let totalJumps = 0;

    // variable indicating the cloud the player
    // is standing on after a jump
    let currentCloud = 0;

    // variable storing the end of the cloud path
    const lastCloud = c.length - 1;

    /* the first task is to loop through cloudArr to
    choose if the jump is one or two indices long */
    while (currentCloud < lastCloud) {

        /* conditional checks if the second closest cloud is safe
        to jump on and... */
        if (cloudArr[currentCloud + 2] != 1) {
            console.log('In if');
            // the cloud that is two indices away is safe to jump to
            // so we increase the totalJumps count by one 
            totalJumps++;

            // and we move two indices closer to the end, or...
            currentCloud++;
            console.log(currentCloud)
        } // end if
        else if (cloudArr[currentCloud + 1] != 1) {
            console.log('In else if');
            // the next immediate cloud is the only viable option
            // so we increase totalJumps count by one, and only progress one index
            totalJumps++;

            console.log(currentCloud);
        } // end else if
        else {
            console.log('impossible jump');
        }// end else

        currentCloud++

    } // end while loop

    // return the jump count
    return totalJumps;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))