class LinkedList {
  #head;
  #tail;
  #size;

  constructor() {
    this.#size = 0;
  }

  append(value) {
    //Add a new value at the #head
    let newNode = new Node(value);
    if (this.#tail == undefined) {
      this.#tail = newNode;
      if (this.#head == undefined) {
        this.#head = newNode;
      }
    } else {
      this.#tail.next = newNode;
      newNode.prev = this.#tail;
      this.#tail = newNode;
    }
    this.#size++;
  }

  prepend(value) {
    //Add a new value at the #head
    let newNode = new Node(value);
    if (this.#head == undefined) {
      this.#head = newNode;
      if (this.#tail == undefined) {
        this.#tail = newNode;
      }
    } else {
      this.#head.prev = newNode;
      newNode.next = this.#head;
      this.#head = newNode;
    }
    this.#size++;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  at(index) {
    let i = 0;
    let currentNode = this.#head;
    while (true) {
      if (i == index) {
        return currentNode;
      } else {
        if (currentNode == undefined) return;
        currentNode = currentNode.next;
        i++;
      }
    }
  }

  pop() {
    let returnNode = this.#tail;
    this.#tail = undefined;
    size--;
    return returnNode;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  contains(value) {
    let currentNode = this.#head;
    while (currentNode.next != undefined) {
      if (currentNode.value.localeCompare(value) == 0) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.#head;
    let counter = 0;
    while (true) {
      if (currentNode == undefined) return -1;
      if (currentNode.value.localeCompare(value) == 0) return counter;
      counter++;
      currentNode = currentNode.next;
    }
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let currentNode = this.#head;
    while (index != 0) {
      currentNode = currentNode.next;
      index--;
    }
    currentNode.prev.next = newNode;
    newNode.prev = currentNode.prev;
    newNode.next = currentNode;
    currentNode.prev = newNode;
  }

  removeAt(index) {
    let currentNode = this.#head;
    while (index != 0) {
      currentNode = currentNode.next;
      index--;
    }
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
  }

  toString() {
    let returnString = "";
    let currentNode = this.#head;
    while (currentNode != undefined) {
      returnString += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    returnString += null;
    return returnString;
  }
}

class Node {
  #prev;
  #next;
  #value;

  constructor(value) {
    this.#value = value;
  }

  set prev(node) {
    this.#prev = node;
  }

  set next(node) {
    this.#next = node;
  }

  set value(value) {
    this.#value = value;
  }

  get prev() {
    return this.#prev;
  }

  get next() {
    return this.#next;
  }

  get value() {
    return this.#value;
  }
}
