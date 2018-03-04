class MaxHeap{
    private array:number[] = [];

    constructor(array?:number[]){
        if(array){
            this.array = array;
            this.heapify();
        }
    }

    sift_up(index:number){
        let parent =Math.floor((index-1)/2);
        let tmp = this.array[index];
        this.array[index]=this.array[parent];
        this.array[parent] = tmp;
        
        }

    insert(value){
        if(this.array.length!=0){
            this.array[this.array.length]=value;
            let index = this.array.length-1;
            let parent = Math.floor((index-1)/2);
            while(value>this.array[parent]){
                this.sift_up(index);
                index = parent;
                parent = Math.floor((parent-1)/2);
            }
        }
        else{    
            this.array[0]=value;
        }

    }
    get_max():number{
        if(this.array[0]){
            return this.array[0];
        }
        else{
            return undefined;
        }
    }
    get_size():number{
        let length = 0;
        for(let i = 0; i<this.array.length;i++){
            if(this.array[i]!=undefined){
                length = length+1;
            }
        }
        return length;
    }
    is_empty():boolean{
        return this.get_size()==0;
    }
    sift_down(index:number){
        function isNone(value:number){
            return value==undefined || value==null;
        }
        let left = 2*index+1;
        let right = 2*index+2;
        if(isNone(this.array[left]) && isNone(this.array[right])){
            return;
        }
        let bigger = left;
        if(this.array[left] < this.array[right]|| isNone(this.array[left])){
           bigger = right;
        }
        if(this.array[bigger] > this.array[index] || isNone(this.array[index])){
            this.sift_up(bigger);
            this.sift_down(bigger);
        }
    }
    extract_max(){
        let root = this.array[0];
        this.remove(0);
        return root;
    
    }
    remove(index:number){
        this.array[index] = undefined;
        this.sift_down(index);
         
    }

    heapify(){
        let last = this.get_size()-1;
        let parent = last/2;
        while(parent>=0){
        this.sift_down(parent);
        parent = parent - 1;
        }
    }

    static heap_sort(array:number[]):number[]{
        let heap = new MaxHeap(array);
        let sortedArray = [];
        let index = heap.get_size()-1;
        while(!heap.is_empty()){
           sortedArray[index] = heap.extract_max();
           index = index-1;
        }
        return sortedArray;
    }
    
}

let testArray = new MaxHeap();
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

console.log("heapify test:")
let hArray = new MaxHeap([1,45,3,6,56,76,0,23,23,67]);
console.log(hArray);

let heapSortArray = [1,56,76,3,45,32,0,27,9,65,39,5]
console.log("unsorted array:");
console.log(heapSortArray);
console.log("sorted array:");
console.log(MaxHeap.heap_sort(heapSortArray));
