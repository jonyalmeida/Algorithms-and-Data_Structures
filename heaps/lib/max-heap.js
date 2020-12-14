class MaxHeap {
    constructor() {
        this.array = [null];
    }

    //return parent idx
    getParent(idx) {
        return Math.floor(idx / 2);
    }

    //return left side child idx
    getLeftChild(idx) {
        return idx * 2;
    }

    //return right side child
    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        //push value to end of array
        this.array.push(val);

        //bring value up as needed
        this.siftUp(this.array.length - 1);
    }

    //helper method to bring max values to top
    siftUp(idx) {
        //base case, item already at top, return
        if (idx === 1) return;

        //get parent's index
        const parentIdx = this.getParent(idx);

        //swap if parent is less than item
        if (this.array[idx] > this.array[parentIdx]) {
            [this.array[idx], this.array[parentIdx]] = [
                this.array[parentIdx],
                this.array[idx],
            ];
            //recursive call
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 1) return null;

        if (this.array.length === 2) return this.array.pop();

        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);

        return max;
    }

    siftDown(idx) {
        let leftIdx = idx * 2;
        let rightIdx = idx * 2 + 1;
        let ary = this.array;
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];
        let val = ary[idx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (val > leftVal && val > rightVal) return;

        let swapIdx;
        if (leftVal > rightVal) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }
        [ary[swapIdx], ary[idx]] = [ary[idx], ary[swapIdx]];

        this.siftDown(swapIdx);
    }
}

function isMaxHeap(array) {
    // check if the tree is complete, i.e. there are no gaps like [null, 50, undefined, 20]
    let isComplete = array.every((el) => el !== undefined);
    return isComplete && _isMaxHeap(array);
}

function _isMaxHeap(array, idx = 1) {
    if (array[idx] === undefined) return true;
    let leftIdx = 2 * idx;
    let rightIdx = 2 * idx + 1;
    let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
    let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
    return (
        array[idx] > leftVal &&
        array[idx] > rightVal &&
        _isMaxHeap(array, leftIdx) &&
        _isMaxHeap(array, rightIdx)
    );
}

module.exports = { MaxHeap, isMaxHeap };

// let heap = new MaxHeap();
// heap.insert(42);
// heap.insert(32);
// heap.insert(24);
// heap.insert(100);
// heap.insert(12);
// heap.insert(9);
// heap.insert(53);
// heap.insert(101);
// heap.insert(1);

// console.log(heap);
// console.log(heap.deleteMax());
// console.log(heap.deleteMax());
// console.log(heap);
// console.log(heap.deleteMax());
