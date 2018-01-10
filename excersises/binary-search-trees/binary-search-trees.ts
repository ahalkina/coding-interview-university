class BinarySearchTrees{
    root:ListNode;
    insert(value:number){
        if(!this.root){
            let node = new ListNode();
            node.value=value;
            this.root=node;
        }
        else{
            insertToNode(this.root,value);
        }
        function insertToNode(currentNode:ListNode,value:number){
            if(currentNode.value<=value){
                if(currentNode.rightNode){
                    insertToNode(currentNode.rightNode,value);
                }
                else{
                    let node = new ListNode();
                    node.value=value;
                    currentNode.rightNode=node;
                    return;
                }
            }
            else{
                if(currentNode.leftNode){
                    insertToNode(currentNode.leftNode,value);
                }
                else{
                    let node = new ListNode();
                    node.value=value;
                    currentNode.leftNode=node;
                    return;
                }
            }
        } 
    }
    get_node_count():number{

        function elementsCount(currentNode:ListNode):number{
            if(!currentNode){
                return 0;
            }
            return 1 + elementsCount(currentNode.leftNode) + elementsCount(currentNode.rightNode);
        }
        return elementsCount(this.root);

    }
    print_values(){
        function printNode(currentNode:ListNode){
            if(currentNode){
                printNode(currentNode.leftNode)
                console.log(currentNode.value);
                printNode(currentNode.rightNode);
            }
        }
        printNode(this.root);
    }
    delete_tree(){
        if(this.root){
            this.root=null;
        }
    }
    is_in_tree(value:number){
        function comperValues(currentNode:ListNode){
            if(currentNode==null){
                return false;
            }  
            if(value<currentNode.value){
                return comperValues(currentNode.leftNode);
            }
            if(value>currentNode.value){
                return comperValues(currentNode.rightNode);
            }
            if(value==currentNode.value){
                return true;
            }
                 
        }
        return comperValues(this.root);
    }
    get_height(){
        function countHeight(currentNode:ListNode){
            let leftHeight=0;
            let rightHeight=0;
            if (currentNode.leftNode){
                leftHeight = countHeight(currentNode.leftNode);
            }
            if(currentNode.rightNode){
                rightHeight = countHeight(currentNode.rightNode);
            }
            if(leftHeight>rightHeight){
                return leftHeight +1;
            }
            else{
                return rightHeight+1;
            }
        }
        return countHeight(this.root);
    }
    get_min(){
        function min(currentNode:ListNode){
           if(!currentNode.leftNode){
               return currentNode.value;
           }
           else{
               return min(currentNode.leftNode);
           }
            
        }
        return min(this.root);
    }
    get_max(){
        function max(currentNode:ListNode){
            if(!currentNode.rightNode){
                return currentNode.value;
            }
            else{
                return max(currentNode.rightNode);
            }
         }
         return max(this.root);
    }
    is_binary_search_tree(){
        return true;
    }
    delete_value(value:number){
        function popMinValue(currentNode:ListNode, parentNode:ListNode){
            let value = currentNode.value;
            while(currentNode.leftNode){
                parentNode = currentNode;
                currentNode = currentNode.leftNode;
                value = currentNode.value; 
            }
            deleteFromParentNode(parentNode, currentNode, null, null);
            return value;
        }
        function deleteFromParentNode(parentNode:ListNode, currentNode:ListNode, newNode:ListNode, tree:BinarySearchTrees){
            if(!parentNode){
                tree.root=newNode;
                return;
            }
            if(parentNode.leftNode==currentNode){
                parentNode.leftNode=newNode;
            }
            if(parentNode.rightNode==currentNode){
                parentNode.rightNode=newNode;
            }
        }
        function findValue(currentNode:ListNode, parentNode:ListNode, tree:BinarySearchTrees){
            if (currentNode==null){
                return;
            }
            if(value>currentNode.value){
                return findValue(currentNode.rightNode, currentNode, tree);
            }
            if(value<currentNode.value){
                return findValue(currentNode.leftNode, currentNode, tree);
            }
            if(value==currentNode.value){
                if(!currentNode.leftNode && !currentNode.rightNode){
                    deleteFromParentNode(parentNode,currentNode,null, tree);
                }
                if(currentNode.leftNode && !currentNode.rightNode){
                    deleteFromParentNode(parentNode,currentNode,currentNode.leftNode, tree);
                }
                if(currentNode.rightNode && !currentNode.leftNode){
                    deleteFromParentNode(parentNode,currentNode,currentNode.rightNode, tree);
                }
                if(currentNode.leftNode && currentNode.rightNode){
                    
                    currentNode.value = popMinValue(currentNode.rightNode,currentNode);
                }
            }
        }
        return findValue(this.root, null, this);
    }
    get_successor(value:number){
        let successor = -1;
        let currentNode = this.root;
        while(currentNode){
            if(value<currentNode.value){
                if(currentNode.value<successor || successor==-1){
                    successor= currentNode.value;
                }
                currentNode=currentNode.leftNode;
            }
            else{
                currentNode=currentNode.rightNode;
            }
        }
        return successor;
    }
    print(){
        function printTree(depth:number,node:ListNode, drawLine:boolean){
            let beforeValue="";
            let str = drawLine?"| ":"  ";
            for(let i=0;i<depth-1;i++){
                beforeValue += str;
            }
            if(depth>0){
                beforeValue += "|_"
            }
            console.log(beforeValue+node.value);
            let leftNodeExists:boolean = !(!node.leftNode);
            let rightNodeExists:boolean = !(!node.rightNode);
            if(rightNodeExists){
                printTree(depth+1,node.rightNode, false);
            }
            if(leftNodeExists){
                printTree(depth+1,node.leftNode, false);
            } 
        }
        printTree(0,this.root, false);
    }
}

//  insert // insert value into tree
//  get_node_count // get count of values stored
//  print_values // prints the values in the tree, from min to max
//  delete_tree
//  is_in_tree // returns true if given value exists in the tree
//  get_height // returns the height in nodes (single node's height is 1)
//  get_min // returns the minimum value stored in the tree
//  get_max // returns the maximum value stored in the tree
//  is_binary_search_tree
//  delete_value
//  get_successor // returns next-highest value in tree after given value, -1 if none

class ListNode{
    value:any;
    leftNode:ListNode;
    rightNode:ListNode;

}

//Test

let binaryTree = new BinarySearchTrees();
let empty = new BinarySearchTrees();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(1);
binaryTree.print();
console.log(binaryTree.get_node_count());
console.log(empty.get_node_count());
binaryTree.print_values();
console.log(binaryTree.is_in_tree(4));
console.log(binaryTree.is_in_tree(44));
console.log(binaryTree.get_height());
console.log(binaryTree.get_min());
console.log(binaryTree.get_max());
//console.log("Test delete");
// binaryTree.delete_value(1);
// binaryTree.delete_value(3);
// binaryTree.delete_value(11);
// binaryTree.delete_value(6);
// binaryTree.delete_value(7);
// binaryTree.delete_value(5);
// binaryTree.delete_value(8);
// binaryTree.print();
console.log(binaryTree.get_successor(4));
console.log(binaryTree.get_successor(1));
console.log(binaryTree.get_successor(6));
console.log(binaryTree.get_successor(8));





