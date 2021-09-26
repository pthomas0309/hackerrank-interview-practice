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
    const sockPile = ar;
    
    /* sockDrawer object stores: an array containing 
    each iteration of color in sockPile and the number of
    socks matched by color */
    let sockDrawer = { 
        socksByColor: [],
        pairedSocks: 0
    };
    
    // loop through sockPile
    for (let i = 0; i < sockPile.length; i++) {
        
        /* If/Else block will check sockDrawer obj for a
        key matching the value of the array at the current index  */
        
        // case: the value at the index is not                
        // stored in the object
        if (sockDrawer[sockPile[i]] === undefined){
            console.log('in if')
            
            // map the first occurance of this value
            // as a key in sockDrawer with the value 1
            sockDrawer[sockPile[i]] = 1;
            
            // create a seperate array of the colors 
            // in sockPile that is without duplicates
            sockDrawer.socksByColor.push(sockPile[i]);
        } // end if
        
        // case: the value at the index already
        // appears in the sockDrawer (duplicate)
        else {
            console.log('in else')
            
            // add one to the count of socks matching
            // the color at the current index
            sockDrawer[sockPile[i]] += 1;

        } // end else

    }; // end unpairedSocks loop
    
    /* loop through socksByColor to calculate
    number of sock pairs by each color that
    appears in sockPile */
    for (let i = 0; i < sockDrawer.socksByColor.length; i++) {
        
        /* pairs variable takes the value of socksByColor 
        at the current index that matches the key of sockDrawer
        and divides the paired value by two, 
        rounding the value down */
        const pairs = Math.floor(sockDrawer[sockDrawer.socksByColor[i]] / 2);
        
        // add the amount of pairs of the current 
        // color value to the number of total pairs
        sockDrawer.pairedSocks += pairs;
        
    } // end socksByColor loop

    // return the total number of paired socks
    return sockDrawer.pairedSocks;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // expected output: 3 output: 3 success
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // expected output: 4 output: 4 success
console.log(sockMerchant(2, [1, 2])); // expected output: 0 output: 0 success
console.log(sockMerchant(2, [[1,1], [2,2]])); // expected output: 2 output: 0 failed