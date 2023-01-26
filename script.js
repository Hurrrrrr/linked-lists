"use strict";

const LinkedListFactory = () => {

    this.head = null;
    this.tail = null;

    // add a node with a value to the end of the LL
    const append = (value) => {

        // create a new node with the given value
        let newNode = NodeFactory();
        newNode.value = value;

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
    // const prepend = (value) => {

    //     // create a new node with the given value


    //     // if the LL has no head yet, designate the new node as head


    //     // point the new node to the previous head
    // }


    // count the number of nodes in the LL


    // return the first node of the LL


    // return the last node of the LL


    // return the node at index (n)


    // remove the last node from the LL


    // return true if the passed value is found in the LL


    // display the LL in the console


    // insert new node with passed value at passed index


    // remove node at index (n)

    return { append };
}

const NodeFactory = () => {
    this.next = null;
    this.value = null;

    return { next, value };
}

const list = LinkedListFactory();

list.append(5);
list.append(3);