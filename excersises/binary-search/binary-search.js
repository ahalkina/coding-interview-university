function binarySearch(array, value) {
    if (!array || !array.length) {
        return -1;
    }
    var min = 0;
    var max = (array.length) - 1;
    if (value > array[max] || value < array[min]) {
        return -1;
    }
    while (max - min > 1) {
        var middle = Math.floor((max + min) / 2);
        if (value == array[middle]) {
            return middle;
        }
        if (value > array[middle]) {
            min = middle;
        }
        if (value < array[middle]) {
            max = middle;
        }
    }
    if (value == array[max]) {
        return max;
    }
    if (value == array[min]) {
        return min;
    }
    return -1;
}
function binarySearchRecursion(array, value) {
    function searchIndex(min, max, value, array) {
        if (value == array[max]) {
            return max;
        }
        if (value == array[min]) {
            return min;
        }
        if (max - min <= 1) {
            return -1;
        }
        var middle = Math.floor((max + min) / 2);
        if (value == array[middle]) {
            return middle;
        }
        if (value > array[middle]) {
            return searchIndex(middle, max, value, array);
        }
        if (value < array[middle]) {
            return searchIndex(min, middle, value, array);
        }
    }
    if (!array || !array.length) {
        return -1;
    }
    return searchIndex(0, array.length - 1, value, array);
}
//test
//regular case
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var value = 8;
console.log(binarySearch(array, value));
console.log(binarySearchRecursion(array, value));
//empty array
var emptyArray;
var emValue = 12;
console.log(binarySearch(emptyArray, emValue));
console.log(binarySearchRecursion(emptyArray, emValue));
//value does not exist in array
var array1 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
var value1 = 7;
console.log(binarySearch(array1, value1));
console.log(binarySearchRecursion(array1, value1));
//bounds tests
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var maxValue = 10;
var minValue = 1;
console.log(binarySearch(array2, maxValue));
console.log(binarySearch(array2, minValue));
console.log(binarySearchRecursion(array2, maxValue));
console.log(binarySearchRecursion(array2, minValue));
//value biggest then array[max]
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bigValue = 11;
console.log(binarySearch(array3, bigValue));
console.log(binarySearchRecursion(array3, bigValue));
//value less then array[min]
var array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lessValue = 0;
console.log(binarySearch(array3, lessValue));
console.log(binarySearchRecursion(array3, lessValue));
//one element in array
var array5 = [1];
var value5 = 1;
var value6 = 7;
console.log(binarySearch(array5, value5));
console.log(binarySearch(array5, value6));
console.log(binarySearchRecursion(array5, value5));
console.log(binarySearchRecursion(array5, value6));
