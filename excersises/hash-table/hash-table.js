var HashTable = /** @class */ (function () {
    function HashTable(n) {
        this.n = n;
        this.array = new Array(n);
    }
    // hash(k, m) - m is size of hash table
    // add(key, value) - if key already exists, update value
    // exists(key)
    // get(key)
    // remove(key)
    HashTable.prototype.hashFunction = function (key) {
        var hash = 0;
        if (key.length == 0)
            return hash;
        for (var i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash;
            hash = hash + key.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer 
        }
        return Math.abs(hash);
    };
    HashTable.prototype.hash = function (k) {
        return this.hashFunction(k) % this.n;
    };
    HashTable.prototype.add = function (key, value) {
        var node = new ListNode();
        node.value = value;
        node.key = key;
        var index = this.hash(key);
        if (!this.array[index]) {
            this.array[index] = node;
        }
        else {
            var currentNode = this.array[index];
            if (key == currentNode.key) {
                currentNode.value = value;
                return;
            }
            while (currentNode.nextNode) {
                if (key == currentNode.key) {
                    currentNode.value = value;
                    return;
                }
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
    };
    HashTable.prototype.exists = function (key) {
        if (this.get(key) != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    HashTable.prototype.get = function (key) {
        var index = this.hash(key);
        if (this.array[index]) {
            var currentNode = this.array[index];
            while (currentNode) {
                if (currentNode.key == key) {
                    return currentNode.value;
                }
                currentNode = currentNode.nextNode;
            }
        }
        return undefined;
    };
    HashTable.prototype.remove = function (key) {
        var index = this.hash(key);
        if (this.array[index]) {
            var currentNode = this.array[index];
            var prevNode = currentNode;
            if (currentNode.key == key) {
                this.array[index] = currentNode.nextNode;
                return;
            }
            while (currentNode) {
                if (currentNode.key == key) {
                    prevNode.nextNode = currentNode.nextNode;
                    return;
                }
                currentNode = currentNode.nextNode;
            }
        }
    };
    HashTable.prototype.print = function () {
        for (var i = 0; i < this.n; i++) {
            var node = this.array[i];
            while (node) {
                console.log(node.key + " : " + node.value);
                node = node.nextNode;
            }
        }
    };
    return HashTable;
}());
var ListNode = /** @class */ (function () {
    function ListNode() {
    }
    return ListNode;
}());
//test for hash-table
var hashTable = new HashTable(6);
hashTable.add("IL", "Illinois");
hashTable.add("GA", "Georgia");
hashTable.add("AL", "Alabama");
hashTable.add("IO", "Iwoa");
hashTable.add("CA", "California");
hashTable.add("MO", "Missouri");
hashTable.print();
console.log(hashTable.exists("fs"));
console.log(hashTable.exists("IL"));
console.log(hashTable.get("fs"));
console.log(hashTable.get("IL"));
hashTable.remove("GA");
hashTable.print();
