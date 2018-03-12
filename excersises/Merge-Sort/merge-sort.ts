function MergeSort(array:number[]){
    if(array.length <= 1){
        return; 
    }
    let middle =Math.floor(array.length/2);
    let leftArray = array.slice(0,middle);
    let rightArray = array.slice(middle,array.length);
    MergeSort(leftArray);
    MergeSort(rightArray);
    let i = 0;
    let j = 0;
    for(let k = 0; k<array.length; k++){
        if(leftArray[i]>rightArray[j] || i == leftArray.length){
            array[k] = rightArray[j];
            j = j+1;
        }
        else{
            array[k]=leftArray[i];
            i = i+1;
        }
    }
    
}
//Test
let arrayTest = [21,3,45,23,4,1,8,7,45,23];
MergeSort(arrayTest);
console.log(arrayTest);

let arrayTest1 = [1];
MergeSort(arrayTest1);
console.log(arrayTest1);

let arrayTest2 = [21,3,45,23,0,4,1,8,7,45,23];
MergeSort(arrayTest2);
console.log(arrayTest2);
