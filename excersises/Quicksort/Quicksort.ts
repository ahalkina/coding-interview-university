function QuickSort(array:number[],start:number,end:number){
    if(start>=end){
        return;
    }
    let pivot = array[Math.floor((Math.random() * (end-start))+start)];
    let i = start-1;
    let j = end+1;
    //console.log("QuickSort: " + start + " " + end+ " " + pivot);
    //console.log(array);
    while(true){
        //console.log("   inside while:");
       //console.log("   " + array);
        do{
            i++;
        }
        while(array[i]<pivot);
        //console.log("   i: "+ i);
        do{
            j--;
        }
        while(array[j]>pivot);
        
        if(i>=j){
            break;
        }
        //console.log("   j: "+ j);
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    //console.log("finished")
    QuickSort(array,start,j);
    QuickSort(array,j+1,end);
}


let arrayTest = [21,3,45,23,4,1,8,7,45,23];
QuickSort(arrayTest,0,(arrayTest.length-1));
console.log(arrayTest);

// let arrayTest1 = [1];
// QuickSort(arrayTest1,0,(arrayTest1.length-1));
// console.log(arrayTest1);

// let arrayTest2 = [21,3,45,23,0,4,1,8,7,45,23];
// QuickSort(arrayTest2,0,(arrayTest2.length-1));
// console.log(arrayTest2);