// list  : array of items
// n     : size of list
//
// for i = 1 to n - 1
// /* set current element as minimum*/
//    min = i
//
//    /* check the element to be minimum */
//
//    for j = i+1 to n
//       if list[j] < list[min] then
//          min = j;
//       end if
//    end for
//
//    /* swap the minimum element with the current element
//       using the above swap function*/
//    if indexMin != i  then
//       swap list[min] and list[i]
//    end if
// end for

function selectionSort(arr) {
    const n = arr.length;

    // the `i` loop will track the index that points to the first element of the unsorted region:
    //    this means that the sorted region is everything left of index i
    //    and the unsorted region is everything to the right of index i
    for (let i = 0; i < n; i++) {
        let min = i;

        // the `j` loop will iterate through the unsorted region and find the index of the smallest element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // after we find the minIndex in the unsorted region,
        // swap that minIndex with the first index of the unsorted region
        if (min !== i) {
            swap(arr, min, i);
        }
    }

    return arr;
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

module.exports = {
    selectionSort,
    swap,
};
