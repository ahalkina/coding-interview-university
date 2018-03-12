function MergeSort(array) {
    if (array.length <= 1) {
        return;
    }
    var middle = Math.floor(array.length / 2);
    var leftArray = array.slice(0, middle);
    var rightArray = array.slice(middle, array.length);
    MergeSort(leftArray);
    MergeSort(rightArray);
    var i = 0;
    var j = 0;
    for (var k = 0; k < array.length; k++) {
        if (leftArray[i] > rightArray[j] || i == leftArray.length) {
            array[k] = rightArray[j];
            j = j + 1;
        }
        else {
            array[k] = leftArray[i];
            i = i + 1;
        }
    }
}
//Test
var arrayTest = [21, 3, 45, 23, 4, 1, 8, 7, 45, 23];
MergeSort(arrayTest);
console.log(arrayTest);
var arrayTest1 = [1];
MergeSort(arrayTest1);
console.log(arrayTest1);
var arrayTest2 = [21, 3, 45, 23, 0, 4, 1, 8, 7, 45, 23];
MergeSort(arrayTest2);
console.log(arrayTest2);
