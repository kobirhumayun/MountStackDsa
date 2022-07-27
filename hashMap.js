class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkList {
    constructor(val) {
        this.head = new Node(val, null);
        this.tail = this.head;
        this.length = 1;
    }
    append(val) {
        this.tail.next = new Node(val, null);
        this.tail = this.tail.next;
        this.length++;
    }

    peek(val) {
        if (this.head.val == val) return true;
        if (this.tail.val == val) return true;

        let temp = this.head;
        while (temp) {
            if (temp.val == val) return true;
            temp = temp.next;
        }
        return false;

    }
    remove(val) {
        if (this.head == null) return false;
        if (this.head.val == val) {
            this.head = this.head.next;
            return true;
        };
        let prevNode = this.head;
        let currentNode = this.head.next;
        let nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            if (currentNode.val == val) {
                prevNode.next = nextNode;
                return true;
            }
            prevNode = currentNode;
            currentNode = nextNode;

        }
        return false;

    }

    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;

        }
    }

}


class hashMap {
    constructor() {
        this.arr = [];
    }

    hash(val) {
        let index = val % 20;
        return index;
    }
    set(val) {
        let index = this.hash(val);
        if (!this.arr[index]) {
            this.arr[index] = new LinkList(val);
        } else {
            let innerArr = this.arr[index];
            innerArr.append(val);
        }
    }
    get(val) {
        let index = this.hash(val)
        if (!this.arr[index]) {
            return false;
        }
        let innerArr = this.arr[index]
        return innerArr.peek(val);

    }
    remove(val) {
        let index = this.hash(val)
        if (!this.arr[index]) {
            return false;
        }
        let innerArr = this.arr[index]
        return innerArr.remove(val);

    }


}

function findDuplicate(arr) {
    let tempHashDb = new hashMap();
    for (i = 0; i < arr.length; i++) {
        let isDuplicate = tempHashDb.get(arr[i]);
        if (isDuplicate) {
            return arr[i];
        } else {
            tempHashDb.set(arr[i]);
        }
    }
    return "No Duplicate";
}


function towSum(arr, target) {
    let tempHashDb = new hashMap();
    for (i = 0; i < arr.length; i++) {
        tempHashDb.set(arr[i])
    }
    for (i = 0; i < arr.length; i++) {
        let isFirstValue = arr[i];
        let isSecondValue = target - isFirstValue;
        let isFound = tempHashDb.get(isSecondValue);
        if (isFound) {

            return `${isFirstValue} and ${isSecondValue}`;
        }

    }
    return "Tow sum not Match"
}

console.log(findDuplicate([1, 45, 475, 34, 34, 45, 1]));
console.log(towSum([45, 47, 34, 34, 45, 1], 92));

let hashDb = new hashMap();
hashDb.set(13)
hashDb.set(13)
hashDb.set(13)
hashDb.set(12)
hashDb.set(11)
hashDb.set(125)
hashDb.set(12)
hashDb.set(3)
hashDb.set(1)
hashDb.set(1)
hashDb.set(1)
hashDb.set(1)
hashDb.set(12)
console.log(hashDb.get(1));
console.log(hashDb.remove(1));
console.log(hashDb.remove(1));
console.log(hashDb.remove(1));
console.log(hashDb.remove(1));
console.log(hashDb.remove(1));
console.log(hashDb.remove(1));
console.log(hashDb.arr);