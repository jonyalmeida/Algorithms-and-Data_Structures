class MaxHeap {
    constructor() {
        this.array = [null];
    }

    insert(val) {
        //push value to end of array
        this.array.push(val);

        this.siftUp(this.array.length - 1);
    }

    //helper method to bring max values to top
    siftUp(idx) {
        //base case, item already at top, return
        if (idx === 1) return;

        //get parent's index
        const parentIdx = Math.floor(idx / 2);

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

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
heap.insert(12);
heap.insert(9);
heap.insert(53);
heap.insert(101);
heap.insert(1);

console.log(heap);
console.log(heap.deleteMax());
console.log(heap.deleteMax());
console.log(heap);
console.log(heap.deleteMax());
