//implementation
class LinkedList {
    head:ListNode;


    size():number{
       let length:number = 0;
       let currentNode=this.head;
       while(currentNode){
           length+=1;
           currentNode=currentNode.nextNode;
       }
       return length;
    }
    empty():boolean{
        if(this.head){
            return false;
        }
        return true;
    }
    value_at(index:number):any{
        if(index<0){
            return undefined;
        }
        let currentI=0;
        let currentNode=this.head;
        while(currentI<index  && currentNode){
            currentNode=currentNode.nextNode;
            currentI+=1;
        }
        if(currentNode){
            return currentNode.value;
        }
        else{
            return undefined;
        }
    }
    push_front(value:any){
        let firstNode = new ListNode();
        firstNode.value=value;
        firstNode.nextNode=this.head;
        this.head=firstNode;

    }
    pop_front():any{
        if(!this.head){
            return undefined;
        }
        let firstNode = new ListNode();
        let value:any = this.head.value;
        this.head = this.head.nextNode;
        return value;
    }
    push_back(value:any){
        if(!this.head){
            this.push_front(value);
            return;
        }
        let lastNode = new ListNode();
        lastNode.value=value;
        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = lastNode;
    }
    pop_back(){
        let currentNode = this.head;
        if(!currentNode){
            return undefined;
        }
        if(!currentNode.nextNode){
            this.head=undefined;
            return currentNode.value;
        }
        let prevNode:ListNode;
       while(currentNode.nextNode){
           
           prevNode = currentNode;
           currentNode = currentNode.nextNode;
       }
       prevNode.nextNode=null;
       return currentNode.value;
    }
    front(){
        if(!this.head){
            return undefined;
        }
        return this.head.value;

    }
    back(){
        let currentNode = this.head;
        if(!currentNode){
            return undefined;
        }
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }
    insert(index:number,value:any){
        if (index==0){
            this.push_front(value);
            return;
        }
       let newNode = new ListNode();
       newNode.value = value;
       let currentNode = this.head;
       let i = 0;
       
       while(currentNode){
        let prevNode = currentNode;
        currentNode = currentNode.nextNode;
        if(i==index){
            prevNode.nextNode= newNode;
            newNode.nextNode = currentNode;
            return;
        }
        i+=1;

       }
    }
    erase(index){
        let currentNode = this.head;
        let i=0;
        if(!currentNode || index<0){
            return;
        }
        if(index==0){
            this.head = this.head.nextNode;
            return;
        }
        while(currentNode.nextNode){
            let prevNode = currentNode;
            currentNode = currentNode.nextNode;
            if(i==index-1){
                prevNode.nextNode=currentNode.nextNode;
                return;
            }
            i+=1;  
        }
    }
    value_n_from_end(indexB){
        let currentNode = this.head;
        let length = this.size();
        if(!currentNode || indexB<0 || indexB>=length){
            return undefined;
        }
        
        return this.value_at(length - indexB - 1);
    }
    reverse(){
        let currentValue:any;
        let length = this.size();
        for(let i=0;i<length-1;i++){
            let currentNode = this.head;
            for(let j=0;j<length-i-1;j++){
                let tmp = currentNode.value;
                currentNode.value=currentNode.nextNode.value;
                currentNode.nextNode.value=tmp;
                currentNode=currentNode.nextNode;
            }
        }
    }
    remove_value(value){
        if(!this.head){
            return;
        }
        if(this.head.value==value){
            this.head = this.head.nextNode;
            return;
        }
        let currentNode = this.head;
        while(currentNode.nextNode){
            let prevNode = currentNode;
            currentNode = currentNode.nextNode;
            if(currentNode.value==value){
                prevNode.nextNode=currentNode.nextNode;
                return;
            }
            
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

//  size() - returns number of data elements in list
//  empty() - bool returns true if empty
//  value_at(index) - returns the value of the nth item (starting at 0 for first)
//  push_front(value) - adds an item to the front of the list
//  pop_front() - remove front item and return its value
//  push_back(value) - adds an item at the end
//  pop_back() - removes end item and returns its value
//  front() - get value of front item
//  back() - get value of end item
//  insert(index, value) - insert value at index, so current item at that index is pointed to by new item at index
//  erase(index) - removes node at given index
//  value_n_from_end(n) - returns the value of the node at nth position from the end of the list
//  reverse() - reverses the list
//  remove_value(value) - removes the first item in the list with this value
}
class ListNode{
    value:any;
    nextNode:ListNode;
    
}
//test
let filledList = new LinkedList();
let emptyList = new LinkedList();
filledList.push_front(0);
filledList.push_front(1);
filledList.push_front(2);
filledList.push_front(3);
filledList.push_front(4);
filledList.push_front(5);
filledList.print();


console.log("size filledList:");
console.log(filledList.size());
console.log("size emptyList:");
console.log(emptyList.size());

console.log("empty filledList:");
console.log(filledList.empty());
console.log("empty emptyList:");
console.log(emptyList.empty());


console.log("value_at filledList:");
console.log(filledList.value_at(-1));
console.log(filledList.value_at(0));
console.log(filledList.value_at(3));
console.log(filledList.value_at(5));
console.log(filledList.value_at(7));
console.log("value_at emptytList:");
console.log(emptyList.value_at(-1));
console.log(emptyList.value_at(0));
console.log(emptyList.value_at(1));


console.log("pop_front filledList:");
console.log(filledList.pop_front());
console.log("pop_front emptyList:");
console.log(emptyList.pop_front());

console.log("push_back filledList:");
filledList.push_back(3);
filledList.print();
console.log("push_back emptyList:");
emptyList.push_back(2);
emptyList.print();


console.log("pop_back filledList:");
console.log(filledList.pop_back());
filledList.print();
console.log("pop_back emptyList:");
console.log(emptyList.pop_back());
emptyList.print();
console.log(emptyList.pop_back());


console.log("front filledList:");
console.log(filledList.front());
console.log("front emptyList:");
console.log(emptyList.front());

console.log("back filledList:");
console.log(filledList.back());
console.log("back emptyList:");
console.log(emptyList.back());

console.log("insert filledList:");
filledList.insert(-1,2);
filledList.insert(0,3);
filledList.insert(3,4);
filledList.insert(6,5);
filledList.insert(10,6);
filledList.print();
console.log("insert emptytList:");
emptyList.insert(-1,1);
emptyList.insert(1,2);
emptyList.insert(0,3);
emptyList.print();


console.log("erase filledList:");
filledList.erase(-1);
filledList.erase(0);
filledList.erase(3);
filledList.erase(5);
filledList.erase(10);
filledList.print();
console.log("erase emptytList:");
emptyList.erase(-1);
emptyList.erase(1);
emptyList.erase(0);
emptyList.print();

console.log("value_n_from_end filledList:");
console.log(filledList.value_n_from_end(-1));
console.log(filledList.value_n_from_end(0));
console.log(filledList.value_n_from_end(3));
console.log(filledList.value_n_from_end(4));
console.log(filledList.value_n_from_end(7));
console.log("value_n_from_end emptytList:");
console.log(emptyList.value_n_from_end(-1));
console.log(emptyList.value_n_from_end(0));
console.log(emptyList.value_n_from_end(1));

console.log("reverse filledList:");
filledList.reverse();
filledList.print();
console.log("reverse emptyList:");
emptyList.reverse();
emptyList.print();

console.log("remove_value filledList:");
filledList.remove_value(0);
filledList.remove_value(2);
filledList.remove_value(4);
filledList.remove_value(10);
filledList.print();
console.log("remove_value emptytList:");

emptyList.remove_value(0);
emptyList.print();