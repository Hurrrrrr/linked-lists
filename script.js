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
    };


    // count the number of nodes in the LL
    const size = () => {

        let count = 0;

        let trav = this.head;
        while (trav) {
            count++;
            trav = trav.next;
        }

        return count;
    };

    // return the first node of the LL
    const headF = () => {
        return this.head;
    };


    // return the last node of the LL
    const tailF = () => {
        return this.tail;
    };

    // return the node at index (n)
    const at = (index) => {

        let trav = this.head;

        for (let i = 0; i < index; i++) {
            trav = trav.next;
        }

        return trav;
    };


    // remove the last node from the LL
    const pop = () => {

        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }
        // traverse the LL to find the tail
        let prev = this.head;
        let trav = this.head.next;

        while (trav.next !== null) {

            prev = trav;
            trav = trav.next;
        }

        // now we've found the tail, so delete it
        prev.next = null;
    };


    // return true if the passed value is found in the LL
    const contains = (value) => {

        if (!this.head) {
            return false;
        }

        let trav = this.head;

        if (trav.value === value) {
            return true;
        }

        while (trav.next !== null) {
            if (trav.value === value) {
                return true;
            }
            trav = trav.next;
        }

        return false;
    };

    // returns the index of the node with the passed value
    const find = (value) => {

        let trav = this.head;
        let count = 0;

        // traverse the LL until we find the tail
        while (trav !== null) {

            if (trav.value === value) {
                return count;
            }

            count++;
            trav = trav.next;

        }

        // value not found
        return null;
    };

    // display the LL in the console
    const toString = () => {

        let trav = this.head;
        let output = [];
        
        if (trav === null) {
            output.push("null");
        }

        while (trav !== null) {

            output.push(`( ${trav.value} ) -> `);
            if (trav.next === null) {
                output.push("null");
            }

            trav = trav.next;
        }

        console.log(output);
    };


    // insert new node with passed value at passed index
    const insertAt = (value, index) => {

        let newNode = NodeFactory(value);

        if (index === 0) {
            if (this.head !== null) {
                newNode.next = this.head;
            }

            this.head = newNode;

            return newNode;
        }

        let trav = this.head.next;
        let prev = this.head;

        // traverse the LL to find the correct index
        for (let i = 0; i < (index - 1); i++) {
            prev = trav;
            trav = trav.next;
        }

        // check if we're at the tail
        if (trav.next === null) {

            if (this.head === null) {
                this.head = newNode;
            }
    
            if (this.tail !== null) {
                this.tail.next = newNode;
            }
    
            this.tail = newNode;
            newNode.next = null;
    
            return newNode;
        }

        // we're not, so connect the new node to the next node
        newNode.next = trav;

        // connect the previous node to the new node
        prev.next = newNode;
    };


    // remove node at index
    const removeAt = (index) => {
        
        if (index === 0) {
            // if there is a node after the head
            if (this.head.next !== null) {
                this.head = this.head.next;
                return;
            }
            // there is no node after the head, so just delete the head
            if (this.head !== null) {
                this.head = null;
                return;
            }
        return null;
        }

        let trav = this.head.next;
        let prev = this.head;

        // traverse the LL to find the correct index
        for (let i = 0; i < (index - 1); i++) {
            prev = trav;
            trav = trav.next;
        }

        prev.next = trav.next;
        trav = null;

    };

    return { append, prepend, size, headF, tailF, at, pop, contains, find, toString, insertAt, removeAt };

};

const NodeFactory = (value) => {
    this.next = null;
    this.value = value;

    return { next, value };
};

const list = LinkedListFactory();

list.append("a");
list.append("b");
list.append("c");
list.append("d");