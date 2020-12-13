//bubble sort pseudo-code
// n := length(array)
// repeat
//  swapped = false
//  for i := 1 to n - 1 inclusive do
//
//     /* if this pair is out of order */
//     if A[i - 1] > A[i] then
//
//       /* swap them and remember something changed */
//       swap(A[i - 1], A[i])
//       swapped := true
//
//     end if
//   end for
// until not swapped

function bubbleSort(arr) {
    const n = arr.length;

    //this variable will be used to track whether or not we
    //made a swap on the previous pass. If we did not make
    //any swap on the previous pass, then the array must
    //already be sorted
    let swapped = true;

    //this while will keep doing passes if a swap was made
    //on the previous pass
    while (swapped) {
        swapped = false; //reset swap to false

        //this for will perform a single pass
        for (let i = 0; i < n; i++) {
            //if the two values are not ordered, swap
            if (arr[i] > arr[i + 1]) {
                //swap the two values
                swap(arr, i, i + 1);

                //since you made a swap, remember that you did so
                //bc we should perform another pass after this one
                swapped = true;
            }
        }
    }

    return arr;
}

//swap helper function
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

module.exports = {
    bubbleSort,
    swap,
};
