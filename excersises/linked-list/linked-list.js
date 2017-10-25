//implementation
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.size = function () {
        var length = 0;
        var currentNode = this.head;
        while (currentNode) {
            length += 1;
            currentNode = currentNode.nextNode;
        }
        return length;
    };
    LinkedList.prototype.empty = function () {
        if (this.head) {
            return false;
        }
        return true;
    };
    LinkedList.prototype.value_at = function (index) {
        if (index < 0) {
            return undefined;
        }
        var currentI = 0;
        var currentNode = this.head;
        while (currentI < index && currentNode) {
            currentNode = currentNode.nextNode;
            currentI += 1;
        }
        if (currentNode) {
            return currentNode.value;
        }
        else {
            return undefined;
        }
    };
    LinkedList.prototype.push_front = function (value) {
        var firstNode = new ListNode();
        firstNode.value = value;
        firstNode.nextNode = this.head;
        this.head = firstNode;
    };
    LinkedList.prototype.pop_front = function () {
        if (!this.head) {
            return undefined;
        }
        var firstNode = new ListNode();
        var value = this.head.value;
        this.head = this.head.nextNode;
        return value;
    };
    LinkedList.prototype.push_back = function (value) {
        if (!this.head) {
            this.push_front(value);
            return;
        }
        var lastNode = new ListNode();
        lastNode.value = value;
        var currentNode = this.head;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = lastNode;
    };
    LinkedList.prototype.pop_back = function () {
        var currentNode = this.head;
        if (!currentNode) {
            return undefined;
        }
        if (!currentNode.nextNode) {
            this.head = undefined;
            return currentNode.value;
        }
        var prevNode;
        while (currentNode.nextNode) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = null;
        return currentNode.value;
    };
    LinkedList.prototype.front = function () {
        if (!this.head) {
            return undefined;
        }
        return this.head.value;
    };
    LinkedList.prototype.back = function () {
        var currentNode = this.head;
        if (!currentNode) {
            return undefined;
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index == 0) {
            this.push_front(value);
            return;
        }
        var newNode = new ListNode();
        newNode.value = value;
        var currentNode = this.head;
        var i = 0;
        while (currentNode) {
            var prevNode = currentNode;
            currentNode = currentNode.nextNode;
            if (i == index) {
                prevNode.nextNode = newNode;
                newNode.nextNode = currentNode;
                return;
            }
            i += 1;
        }
    };
    LinkedList.prototype.erase = function (index) {
        var currentNode = this.head;
        var i = 0;
        if (!currentNode || index < 0) {
            return;
        }
        if (index == 0) {
            this.head = this.head.nextNode;
            return;
        }
        while (currentNode.nextNode) {
            var prevNode = currentNode;
            currentNode = currentNode.nextNode;
            if (i == index - 1) {
                prevNode.nextNode = currentNode.nextNode;
                return;
            }
            i += 1;
        }
    };
    LinkedList.prototype.value_n_from_end = function (indexB) {
        var currentNode = this.head;
        var length = this.size();
        if (!currentNode || indexB < 0 || indexB >= length) {
            return undefined;
        }
        return this.value_at(length - indexB - 1);
    };
    LinkedList.prototype.reverse = function () {
        var currentValue;
        var length = this.size();
        for (var i = 0; i < length - 1; i++) {
            var currentNode = this.head;
            for (var j = 0; j < length - i - 1; j++) {
                var tmp = currentNode.value;
                currentNode.value = currentNode.nextNode.value;
                currentNode.nextNode.value = tmp;
                currentNode = currentNode.nextNode;
            }
        }
    };
    LinkedList.prototype.remove_value = function (value) {
        if (!this.head) {
            return;
        }
        if (this.head.value == value) {
            this.head = this.head.nextNode;
            return;
        }
        var currentNode = this.head;
        while (currentNode.nextNode) {
            var prevNode = currentNode;
            currentNode = currentNode.nextNode;
            if (currentNode.value == value) {
                prevNode.nextNode = currentNode.nextNode;
                return;
            }
        }
    };
    LinkedList.prototype.print = function () {
        var string = "";
        var currentNode = this.head;
        while (currentNode) {
            string = string + " " + currentNode.value;
            currentNode = currentNode.nextNode;
        }
        console.log(string);
    };
    return LinkedList;
}());
var ListNode = /** @class */ (function () {
    function ListNode() {
    }
    return ListNode;
}());
//test
var filledList = new LinkedList();
var emptyList = new LinkedList();
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
filledList.insert(-1, 2);
filledList.insert(0, 3);
filledList.insert(3, 4);
filledList.insert(6, 5);
filledList.insert(10, 6);
filledList.print();
console.log("insert emptytList:");
emptyList.insert(-1, 1);
emptyList.insert(1, 2);
emptyList.insert(0, 3);
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
