class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkList {
    constructor(data) {
        this.head = new Node(data, null);
        this.tail = this.head;
        this.length = 1;
    }
    append(data) {
        this.tail.next = new Node(data, null);
        this.tail = this.tail.next;
        this.length++;
    }

    reverse() {
        if (this.length == 1) return;
        else if (this.length == 2) {
            this.head.next.next = this.head;
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            this.tail.next = null;
        } else {
            let prevNode = this.head;
            let currentNode = this.head.next;
            let nextNode = null;
            while (currentNode) {
                nextNode = currentNode.next;
                currentNode.next = prevNode;
                prevNode = currentNode;
                currentNode = nextNode;

            }

            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            this.tail.next = null;
        }

    }

    palindrome() {
        if (this.length == 1) return true;
        else if (this.length == 2) {
            if (this.head.data == this.head.next.data) {
                return true;
            } else {
                return false;
            }
        } else {

            let slow = this.head;
            let fast = this.head;
            let isEven = true;
            let counter = 0;
            while (fast != null) {
                if (fast.next == null) {
                    isEven = false;
                    break;
                }
                counter++;
                slow = slow.next;
                fast = fast.next.next;

            }

            if (isEven) {
                let prevNode = slow;
                let currentNode = slow.next;
                let nextNode = null;
                while (currentNode) {
                    nextNode = currentNode.next;
                    currentNode.next = prevNode;
                    prevNode = currentNode;
                    currentNode = nextNode;

                }

                let left = this.head;
                let right = prevNode;
                for (let i = 0; i < counter; i++) {
                    if (left.data != right.data) {
                        return false;
                    }
                    left = left.next;
                    right = right.next;
                }
                return true;
            } else {

                let prevNode = slow;
                let currentNode = slow.next;
                let nextNode = null;
                while (currentNode) {
                    nextNode = currentNode.next;
                    currentNode.next = prevNode;
                    prevNode = currentNode;
                    currentNode = nextNode;
                }

                let left = this.head;
                let right = prevNode;
                for (let i = 0; i < counter; i++) {
                    if (left.data != right.data) {
                        return false;
                    }
                    left = left.next;
                    right = right.next;
                }
                return true;
            }

        }
    }

    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;

        }
    }

}

let list = new LinkList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(3);
list.append(2);
list.append(1);
// list.append(1);
console.log(list.palindrome());