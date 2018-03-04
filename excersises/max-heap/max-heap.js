var MaxHeap = /** @class */ (function () {
    function MaxHeap(array) {
        this.array = [];
        if (array) {
            this.array = array;
            this.heapify();
        }
    }
    MaxHeap.prototype.sift_up = function (index) {
        var parent = Math.floor((index - 1) / 2);
        var tmp = this.array[index];
        this.array[index] = this.array[parent];
        this.array[parent] = tmp;
    };
    MaxHeap.prototype.insert = function (value) {
        if (this.array.length != 0) {
            this.array[this.array.length] = value;
            var index = this.array.length - 1;
            var parent_1 = Math.floor((index - 1) / 2);
            while (value > this.array[parent_1]) {
                this.sift_up(index);
                index = parent_1;
                parent_1 = Math.floor((parent_1 - 1) / 2);
            }
        }
        else {
            this.array[0] = value;
        }
    };
    MaxHeap.prototype.get_max = function () {
        if (this.array[0]) {
            return this.array[0];
        }
        else {
            return undefined;
        }
    };
    MaxHeap.prototype.get_size = function () {
        var length = 0;
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i] != undefined) {
                length = length + 1;
            }
        }
        return length;
    };
    MaxHeap.prototype.is_empty = function () {
        return this.get_size() == 0;
    };
    MaxHeap.prototype.sift_down = function (index) {
        function isNone(value) {
            return value == undefined || value == null;
        }
        var left = 2 * index + 1;
        var right = 2 * index + 2;
        if (isNone(this.array[left]) && isNone(this.array[right])) {
            return;
        }
        var bigger = left;
        if (this.array[left] < this.array[right] || isNone(this.array[left])) {
            bigger = right;
        }
        if (this.array[bigger] > this.array[index] || isNone(this.array[index])) {
            this.sift_up(bigger);
            this.sift_down(bigger);
        }
    };
    MaxHeap.prototype.extract_max = function () {
        var root = this.array[0];
        this.remove(0);
        return root;
    };
    MaxHeap.prototype.remove = function (index) {
        this.array[index] = undefined;
        this.sift_down(index);
    };
    MaxHeap.prototype.heapify = function () {
        var last = this.get_size() - 1;
        var parent = last / 2;
        while (parent >= 0) {
            this.sift_down(parent);
            parent = parent - 1;
        }
    };
    MaxHeap.heap_sort = function (array) {
        var heap = new MaxHeap(array);
        var sortedArray = [];
        var index = heap.get_size() - 1;
        while (!heap.is_empty()) {
            sortedArray[index] = heap.extract_max();
            index = index - 1;
        }
        return sortedArray;
    };
    return MaxHeap;
}());
var testArray = new MaxHeap();
testArray.insert(5);
testArray.insert(10);
testArray.insert(23);
testArray.insert(1);
testArray.insert(7);
testArray.insert(8);
testArray.insert(15);
testArray.insert(50);
testArray.insert(40);
testArray.insert(11);
console.log("Array:");
console.log(testArray);
console.log("Root:");
console.log(testArray.get_max());
console.log("Array size:");
console.log(testArray.get_size());
console.log("Empty:");
console.log(testArray.is_empty());
console.log("Extract max");
console.log(testArray.extract_max());
console.log("new array:");
console.log(testArray);
var hArray = new MaxHeap([1, 45, 3, 6, 56, 76, 0, 23, 23, 67]);
console.log(hArray);
//hArray.heap_sort()
//console.log(hArray);
var heapSortArray = [1, 56, 76, 3, 45, 32, 0, 27, 9, 65, 39, 5];
console.log(heapSortArray);
console.log(MaxHeap.heap_sort(heapSortArray));
