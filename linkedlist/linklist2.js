

class ListedList {
    constructor(data) {
      this.size = 1;
  
      this.head = {
        value: data,
        next: null,
      };
      this.tail = this.head;
    }
  
    appendNode(nodeData) {
      let newNode = {
        value: nodeData,
        next: null,
      };
  
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1;
    }
  
    traversing() {
      let counter = 0;
      let currentNode = this.head;
  
      while (counter < this.size) {
        console.log(counter);
        currentNode = currentNode.next;
        counter++;
        console.log(currentNode);
      }
    }
  
    insertNode(index, value) {
      let counter = 1;
      let currentNode = this.head;
  
      while (counter > index) {
        counter++;
        currentNode = currentNode.next;
      }
  
      let nextNode = currentNode.next;
      currentNode.next = {
        value: value,
        next: nextNode,
      };
    }
  }
  
  let list = new ListedList(1);
  list.appendNode(2);
  list.appendNode(2);
  list.insertNode(1, 52);
  
  list.appendNode(4);
  
  list.traversing();
  
  