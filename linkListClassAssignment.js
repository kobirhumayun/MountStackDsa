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
    appendByTraverse(data) {
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = new Node(data, null);
        this.tail = temp.next;
        this.length++;
    }
    insertAtPosition(data, position) {
        if (position == 1) {
            this.prepend(data);
        } else {

            let count = 1;
            let temp = this.head;
            for (count; count < position - 1; count++) {
                temp = temp.next;
            }
            temp.next = new Node(data, temp.next);
            this.length++;
        }
    }
    prepend(data) {
        this.head = new Node(data, this.head);
        this.length++;
    }

    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

}

let list = new LinkList(10);
list.append(9);
list.append(10);
list.append(20);
list.prepend(5);
list.insertAtPosition(500, 3);
list.appendByTraverse(30);
list.prepend(4);
list.append(40)
list.insertAtPosition(400, 3);
list.appendByTraverse(50);
list.print()
console.log(list.length);