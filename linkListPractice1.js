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

    sumList() {
        let tempHead = this.head;
        let sum = 0;
        while (tempHead != null) {
            sum += tempHead.data;
            tempHead = tempHead.next;
        }
        return sum;
    }
    findIndex(value) {
        let tempHead = this.head;
        let index = 0;
        while (tempHead.data != value) {
            tempHead = tempHead.next;
            index++;
            if (tempHead == null) return "not found";
        }
        return `index: ${index}`;
    }
    findFirstLastIndex(value) {
        let tempHead = this.head;
        let counterIndex = 0;
        let index = [];
        while (tempHead != null) {
            if (tempHead.data == value) {
                index[0] = counterIndex;
                index[1] = counterIndex;
                while (tempHead != null) {
                    if (tempHead.data == value) {
                        index[1] = counterIndex;
                    }
                    tempHead = tempHead.next;
                    counterIndex++;
                }
                return index;
            }
            tempHead = tempHead.next;
            counterIndex++;
            if (tempHead == null) return "not found";


        }
    }
    findMiddleElement() {
        let tempHead = this.head;
        let middle = tempHead,
            last = tempHead;
        while (last !== null) {
            if (last.next == null) break;
            middle = middle.next;
            last = last.next.next;
        }
        return middle.data;

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
list.append(5);
list.append(6);
list.append(7);
list.append(5);
list.append(8);
list.print()
console.log(list.findMiddleElement());
console.log(list.sumList());
console.log(list.findIndex(4));
console.log(list.findFirstLastIndex(5));