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
    
    
    reverse(){
        let prevBefore = null;
        let prev = this.head;
        let current = this.head.next;
        while(current.next){
            prevBefore = prev;
            prev = current;
            current = current.next;
            prev.next = prevBefore;
        }

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        this.tail.next = null;
        this.head= current;
        this.head.next = prev;
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
list.append(8);
list.append(9);
list.append(10);

console.log("Before Reverse");
list.print();
console.log("After Reverse");
list.reverse();
list.print();