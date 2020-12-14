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

        let parentIdx = Math.floor(idx / 2);
        if (this.array[idx] > this.array[parentIdx]) {
            [this.array[idx], this.array[parentIdx]] = [
                this.array[parentIdx],
                this.array[idx],
            ];
            this.siftUp(parentIdx);
        }
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

console.log(heap);
