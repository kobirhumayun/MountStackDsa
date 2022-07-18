class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor(val) {
        this.front = new Node(val, null);
        this.rear = this.front;
        this.length = 1;
    }

    enqueue(val) {
        this.rear.next = new Node(val, null);
        this.rear = this.rear.next;
        this.length++;
    }

    dequeue() {
        if (this.#isEmpty()) return null;

        this.front = this.front.next;
        this.length--;
    }

    peek() {
        if (this.#isEmpty()) return null;
        return this.front.val;
    }

    #isEmpty() {
        return this.front == null ? true : false;
    }

    print() {
        let temp = this.front;
        while (temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    }

}



let list = new Queue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.enqueue(5);


list.dequeue();
list.dequeue();
list.dequeue();
// list.dequeue();
// list.dequeue();
// list.dequeue();
// list.dequeue();
// list.dequeue();
list.print()
console.log(list.length)
console.log(list.front)
console.log(list.rear)
console.log(list.peek());
console.log(list.dequeue());
console.log(list.peek());