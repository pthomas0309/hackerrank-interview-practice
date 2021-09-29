function hourglassSum(arr) {
    // Write your code here

    // arr is a array of 6 arrays
    const numberGrid = arr;

    // variable for the hourglass with the
    // highest value
    const highestHourglass = 0;

    // loop through numberGrid
    for (let i = 0; i < numberGrid.length; i++) {
        
        // create the dimensions of the hourGlass
        const hourglass = {
            totalValue: 0,
            

        }

        /* conditional determines which section of hourglass 
        to look for based on an index of numberGrid */


        // loop through the array at the current index

    }

    console.log(highestHourglass);
    // return highestHourglass
    return highestHourglass;
}
console.log(
    hourglassSum(
        [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ]
    )
)

console.log(
    hourglassSum(
        [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 9, 2, -4, -4, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, -1, -2, -4, 0]
        ]
    )
)