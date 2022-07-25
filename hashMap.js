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
        let index = this.hash(val)
        if (!this.arr[index]) {
            this.arr[index] = new LinkList(val);
        } else {
            let innerArr = this.arr[index]
            innerArr.append(val)
        }
    }
    get(val) {
        let index = this.hash(val)
        if (!this.arr[index]) {
            return false
        }
        let innerArr = this.arr[index]
        return innerArr.peek(val);

    }

}

let hashDb = new hashMap();
hashDb.set(13)
hashDb.set(13)
hashDb.set(13)
hashDb.set(12)
hashDb.set(11)
hashDb.set(12)
hashDb.set(12)
hashDb.set(3)
hashDb.set(1)
hashDb.set(12)
console.log(hashDb.get(3));
console.log(hashDb.arr);
