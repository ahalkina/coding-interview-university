var BinarySearchTrees = /** @class */ (function () {
    function BinarySearchTrees() {
    }
    BinarySearchTrees.prototype.insert = function (value) {
        if (!this.root) {
            var node = new ListNode();
            node.value = value;
            this.root = node;
        }
        else {
            insertToNode(this.root, value);
        }
        function insertToNode(currentNode, value) {
            if (currentNode.value <= value) {
                if (currentNode.rightNode) {
                    insertToNode(currentNode.rightNode, value);
                }
                else {
                    var node = new ListNode();
                    node.value = value;
                    currentNode.rightNode = node;
                    return;
                }
            }
            else {
                if (currentNode.leftNode) {
                    insertToNode(currentNode.leftNode, value);
                }
                else {
                    var node = new ListNode();
                    node.value = value;
                    currentNode.leftNode = node;
                    return;
                }
            }
        }
    };
    BinarySearchTrees.prototype.get_node_count = function () {
        function elementsCount(currentNode) {
            if (!currentNode) {
                return 0;
            }
            return 1 + elementsCount(currentNode.leftNode) + elementsCount(currentNode.rightNode);
        }
        return elementsCount(this.root);
    };
    BinarySearchTrees.prototype.print_values = function () {
        function printNode(currentNode) {
            if (currentNode) {
                printNode(currentNode.leftNode);
                console.log(currentNode.value);
                printNode(currentNode.rightNode);
            }
        }
        printNode(this.root);
    };
    BinarySearchTrees.prototype.delete_tree = function () {
        if (this.root) {
            this.root = null;
        }
    };
    BinarySearchTrees.prototype.is_in_tree = function (value) {
        function comperValues(currentNode) {
            if (currentNode == null) {
                return false;
            }
            if (value < currentNode.value) {
                return comperValues(currentNode.leftNode);
            }
            if (value > currentNode.value) {
                return comperValues(currentNode.rightNode);
            }
            if (value == currentNode.value) {
                return true;
            }
        }
        return comperValues(this.root);
    };
    BinarySearchTrees.prototype.get_height = function () {
        function countHeight(currentNode) {
            var leftHeight = 0;
            var rightHeight = 0;
            if (currentNode.leftNode) {
                leftHeight = countHeight(currentNode.leftNode);
            }
            if (currentNode.rightNode) {
                rightHeight = countHeight(currentNode.rightNode);
            }
            if (leftHeight > rightHeight) {
                return leftHeight + 1;
            }
            else {
                return rightHeight + 1;
            }
        }
        return countHeight(this.root);
    };
    BinarySearchTrees.prototype.get_min = function () {
        function min(currentNode) {
            if (!currentNode.leftNode) {
                return currentNode.value;
            }
            else {
                return min(currentNode.leftNode);
            }
        }
        return min(this.root);
    };
    BinarySearchTrees.prototype.get_max = function () {
        function max(currentNode) {
            if (!currentNode.rightNode) {
                return currentNode.value;
            }
            else {
                return max(currentNode.rightNode);
            }
        }
        return max(this.root);
    };
    BinarySearchTrees.prototype.is_binary_search_tree = function () {
    };
    BinarySearchTrees.prototype.delete_value = function (value) {
        function popMinValue(currentNode, parentNode) {
            var value = currentNode.value;
            while (currentNode.leftNode) {
                parentNode = currentNode;
                currentNode = currentNode.leftNode;
                value = currentNode.value;
            }
            deleteFromParentNode(parentNode, currentNode, null, null);
            return value;
        }
        function deleteFromParentNode(parentNode, currentNode, newNode, tree) {
            if (!parentNode) {
                tree.root = newNode;
                return;
            }
            if (parentNode.leftNode == currentNode) {
                parentNode.leftNode = newNode;
            }
            if (parentNode.rightNode == currentNode) {
                parentNode.rightNode = newNode;
            }
        }
        function findValue(currentNode, parentNode, tree) {
            if (currentNode == null) {
                return;
            }
            if (value > currentNode.value) {
                return findValue(currentNode.rightNode, currentNode, tree);
            }
            if (value < currentNode.value) {
                return findValue(currentNode.leftNode, currentNode, tree);
            }
            if (value == currentNode.value) {
                if (!currentNode.leftNode && !currentNode.rightNode) {
                    deleteFromParentNode(parentNode, currentNode, null, tree);
                }
                if (currentNode.leftNode && !currentNode.rightNode) {
                    deleteFromParentNode(parentNode, currentNode, currentNode.leftNode, tree);
                }
                if (currentNode.rightNode && !currentNode.leftNode) {
                    deleteFromParentNode(parentNode, currentNode, currentNode.rightNode, tree);
                }
                if (currentNode.leftNode && currentNode.rightNode) {
                    currentNode.value = popMinValue(currentNode.rightNode, currentNode);
                }
            }
        }
        return findValue(this.root, null, this);
    };
    BinarySearchTrees.prototype.get_successor = function (value) {
        var successor = -1;
        var currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (currentNode.value < successor || successor == -1) {
                    successor = currentNode.value;
                }
                currentNode = currentNode.leftNode;
            }
            else {
                currentNode = currentNode.rightNode;
            }
        }
        return successor;
    };
    BinarySearchTrees.prototype.print = function () {
        function printTree(depth, node, drawLine) {
            var beforeValue = "";
            var str = drawLine ? "| " : "  ";
            for (var i = 0; i < depth - 1; i++) {
                beforeValue += str;
            }
            if (depth > 0) {
                beforeValue += "|_";
            }
            console.log(beforeValue + node.value);
            var leftNodeExists = !(!node.leftNode);
            var rightNodeExists = !(!node.rightNode);
            if (rightNodeExists) {
                printTree(depth + 1, node.rightNode, false);
            }
            if (leftNodeExists) {
                printTree(depth + 1, node.leftNode, false);
            }
        }
        printTree(0, this.root, false);
    };
    return BinarySearchTrees;
}());
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
var ListNode = /** @class */ (function () {
    function ListNode() {
    }
    return ListNode;
}());
//Test
var binaryTree = new BinarySearchTrees();
var empty = new BinarySearchTrees();
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
