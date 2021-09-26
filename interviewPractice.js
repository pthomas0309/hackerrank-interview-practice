// Sales by Match

/* Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock

*/

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    
    // n represents the number 
    // of socks in the array
    const numOfSocks = n;
    
    // ar is an array of integers
    // that represent sock colors
    // ar.length = n
    const unpairedSocks = ar;
    
    // sockDrawer is a object that
    // keeps track of the amount of matched socks
    let sockDrawer = { 
        socksByColor: [],
        pairedSocks: 0
    };
    
    // loop through the array of 
    // socks to look for duplicates
    for (let i = 0; i < unpairedSocks.length; i++) {
        
        /* conditional verifies if the value
        at the index exists in the object */
        
        // case: the value at the index is not                
        // tracked in the object
        if (sockDrawer[unpairedSocks[i]] === undefined){
            console.log('in if')
            
            // map the first occurance of value in 
            // array to compare against other indices
            sockDrawer[unpairedSocks[i]] = 1;
            
            // push the value into the socksByColor
            // array for a list of every sock color
            // that exists in ar
            sockDrawer.socksByColor.push(unpairedSocks[i]);
        } // end if
        
        // case: the value at the index occurs
        // in the object
        else {
            console.log('in else')
            
            // add one to the count of socks matching
            // the current color
            sockDrawer[unpairedSocks[i]] += 1;
        } // end else
    }; // end unpairedSocks loop
    
    // duplicates are now tracked in the object
    // loop through the array without duplicates
    // to do the math to find the pairs 
    for (let i = 0; i < sockDrawer.socksByColor.length; i++) {
        
        // locate the count of the socks stored 
        // in the object using the index of the loop
        // and update the count of pairs
        const pairs = Math.floor(sockDrawer[sockDrawer.socksByColor[i]] / 2);
        
        // add the number of pairs in this color
        // to the number of total pairs
        sockDrawer.pairedSocks += pairs;
    } // end socksByColor loop

    // return the total number of paired socks
    return sockDrawer.pairedSocks;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // expected output: 3 output: 3 success
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // expected output: 4 output: 4 success
console.log(sockMerchant(2, [1, 2])); // expected output: 0 output: 0 success
console.log(sockMerchant(2, [[1,1], [2,2]])); // expected output: 2 output: 0 failed