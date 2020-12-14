function heapSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    //keep deleting the max until the heap is empty
    for (let endOfHeap = arr.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(arr, 0, endOfHeap);
        heapify(arr, endOfHeap, 0);
    }

    console.log(arr);
}

function heapify(arr, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (arr[i] > leftVal && arr[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(arr, i, swapIdx);
    heapify(arr, n, swapIdx);
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr = [
    2,
    5,
    6,
    1,
    23,
    1,
    432,
    2,
    76,
    4,
    353,
    1,
    98,
    6,
    54,
    34,
    2,
    -1,
    -53,
    -1321,
    231231,
];

heapSort(arr);
