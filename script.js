"use strict";

const LinkedListFactory = () => {

    this.head = null;
    this.tail = null;

    // add a node with a value to the end of the LL
    const append = (value) => {

        // create a new node with the given value
        let newNode = NodeFactory(value);

        // if the LL has no head yet, designate the new node as head
        if (this.head === null) {
            this.head = newNode;
        }

        // if the LL has at least one node, point that node at the new node
        if (this.tail !== null) {
            this.tail.next = newNode;
        }

        // designate the new node as the tail
        this.tail = newNode;
        newNode.next = null;

        return newNode;
    };

    // add a node with a value to the start of the LL
    const prepend = (value) => {

        // create a new node with the given value
        let newNode = NodeFactory(value);

        // if the LL already has a head, point the new node to it
        if (this.head !== null) {
            newNode.next = this.head;
        }

        this.head = newNode;

        return newNode;
    }


    // count the number of nodes in the LL
    const size = () => {

        let count = 0;

        let trav = this.head;
        while (trav) {
            count++;
            trav = trav.next;
        }

        return count;
    }

    // return the first node of the LL
    const headF = () => {
        return this.head;
    }


    // return the last node of the LL
    const tailF = () => {
        return this.tail;
    }

    // return the node at index (n)
    const at = (index) => {

        let trav = this.head;

        for (let i = 0; i < index; i++) {
            trav = trav.next;
        }

        return trav;
    }


    // remove the last node from the LL
    const pop = () => {

        this.tail = null;

        // traverse the LL to find the new tail
        let trav = this.head;
        while (trav) {

            trav = trav.next;
            // if we've found the new tail, designate it
            if (trav.next === null) {
                this.tail = trav;
            }
        }
    }


    // return true if the passed value is found in the LL


    // display the LL in the console


    // insert new node with passed value at passed index


    // remove node at index (n)

    return { append, prepend, size, headF, tailF, at, pop };

}

const NodeFactory = (value) => {
    this.next = null;
    this.value = value;

    return { next, value };
}

const list = LinkedListFactory();

list.append("a");
list.append("b");
list.append("c");
list.append("d");