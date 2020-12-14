function selectionSort(arr) {
    const n = arr.length;

    //the `i` loop will track the index that points to the first element of the unsorted region:
    //sorted region is everything left of index i
    //unsorted region is everything to the right of index i
    for (let i = 0; i < n; i++) {
        let min = i;

        //the `j` loop will iterate through the unsorted region and find the index of the smallest element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        //swap minIndex with the first index of the unsorted region
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
