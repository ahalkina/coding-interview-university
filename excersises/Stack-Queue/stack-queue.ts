class Queue_List{

    head:ListNode;
    tail:ListNode;


    
    enqueue(value:any){
        if(!this.head){
            let firstNode = new ListNode();
            firstNode.value=value;
            firstNode.nextNode=this.head;
            this.head=firstNode;
            this.tail=firstNode;   
        }
        else{
            let newTail= new ListNode();
            newTail.value=value;
            newTail.nextNode=undefined;
            this.tail.nextNode=newTail;
            this.tail=newTail;
        }
    }

    dequeue():any{
        if(!this.head){
            return undefined;
        }
        if(this.head){
            let value = this.head.value;
            this.head=this.head.nextNode;
            return value;
        }
    }
    empty():boolean{
        if(!this.head){
            return true;
        }
        else{
            return false;
        }

    }
    print(){
        let string:string="";
        let currentNode = this.head;
        while(currentNode){
            string = string + " " + currentNode.value;
            currentNode = currentNode.nextNode;
        }
        console.log(string);
    }

// enqueue(value) - adds value at position at tail
// dequeue() - returns value and removes least recently added element (front)
// empty()
}
class Queue_Array{

    read:number;
    write:number;
    value:Queue_Array;
    n:number;
    queue_array:any[];
    constructor(n:number){
        this.n=n;
        this.queue_array = new Array(n);
        this.write=0;
        this.read=0;
    }

    enqueue(value:any){
        if(this.full()){
            console.log("queue_array is full");
            return;
        }
        this.queue_array[this.write]=value;
        this.write=this.write+1;
        if(this.write==this.n){
            this.write=0;
        }
    }
    dequeue(){
        if(this.empty()){
            return undefined;
        }
        let value = this.queue_array[this.read];
        this.queue_array[this.read]=undefined;
        this.read+=1;
        if(this.read==this.n){
            this.read=0;
        }
        return value;
        
    }

    empty():boolean{
        return this.read==this.write;
    }
    full():boolean{
        return (this.write+1)%this.n == this.read;
    }
    print(){
        let string:string="";
        for(let i = 0;i<this.queue_array.length;i++){
            string=string+' '+this.queue_array[i];
        }
        
        console.log(string);
    }

}
    // enqueue(value) - adds item at end of available storage
    // dequeue() - returns value and removes least recently added element
    // empty()
    // full()



class ListNode{
    value:any;
    nextNode:ListNode;
    
}

//test for Queue_List

let filledQueueList = new Queue_List();
let emptyQueueList = new Queue_List();
console.log("    queue linked list");
console.log("enqueue for filled:");
filledQueueList.enqueue(0);
filledQueueList.enqueue(1);
filledQueueList.enqueue(2);
filledQueueList.enqueue(3);
filledQueueList.enqueue(4);
filledQueueList.enqueue(5);
filledQueueList.print();

console.log("enqueue for empty:");
emptyQueueList.enqueue(0);
emptyQueueList.print();

console.log("dequeue for filled:");
console.log(filledQueueList.dequeue());
filledQueueList.print();
console.log(filledQueueList.dequeue());
console.log(filledQueueList.dequeue());
filledQueueList.print();

console.log("dequeue for empty:");
console.log(emptyQueueList.dequeue());
emptyQueueList.print();
console.log(emptyQueueList.dequeue());


console.log("empty for filled:");
console.log(filledQueueList.empty());

console.log("empty for empty:");
console.log(emptyQueueList.empty());



console.log("    queue array");

let filledQueueArr:Queue_Array = new Queue_Array(5);


console.log("enqueue for filled:");
filledQueueArr.enqueue(0);
filledQueueArr.enqueue(1);
filledQueueArr.enqueue(2);
filledQueueArr.enqueue(3);
filledQueueArr.enqueue(4);
filledQueueArr.print();
filledQueueArr.dequeue()
filledQueueArr.enqueue(5);
filledQueueArr.enqueue(6);
filledQueueArr.print();

console.log("full and empty for full:");
console.log(filledQueueArr.full());
console.log(filledQueueArr.empty());

console.log("dequeue for filled:");
console.log(filledQueueArr.dequeue());
console.log(filledQueueArr.dequeue());
console.log(filledQueueArr.dequeue());
console.log(filledQueueArr.dequeue());
console.log(filledQueueArr.dequeue());
filledQueueArr.print();

console.log("full and empty for empty:");
console.log(filledQueueArr.full());
console.log(filledQueueArr.empty());


