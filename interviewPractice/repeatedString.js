/* There is a string, s, of lowercase English letters that is repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string. */

function repeatedString(s, n) {
    // Write your code here

    // s represents an infinetly repeated string
    const infiniteStr = s;

    // n represents length of substring of infiniteStr
    const substring = n;

    // counter variable for the number of 'a'
    // characters in the substring
    let aChars = 0

    // loop through the indices of infiniteStr 
    // for the length of substring
    for (let i = 0; i < infiniteStr.length; i++) {
        console.log('Looking for A\'s', i);

        /* conditional checks for a character in infiniteStr
        that matches 'a', and... */
        if (infiniteStr[i] === 'a') {
            console.log('Found an a')
            // it is a match and we increment the value
            // of aChars by one
            aChars++;

        } // end if

    }// end for loop
    console.log(aChars)
    // create a variable for the percentage of 'a'
    // in the section of infiniteStr
    const aPercentage = aChars / infiniteStr.length;
    console.log(aPercentage);
    // create a variable for the number of 'a'
    // that would appear in infiniteStr when the
    // length is equal to substring
    const aCharCount = aPercentage * substring;
    console.log(aCharCount);
    // return the count of 'a'
    return Math.round(aCharCount);

}

console.log(repeatedString('gfcaeeecbg', 547602));
console.log(repeatedString('gfcaaaecbg', 547602));
console.log(repeatedString('aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa', 42885108885));
console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));