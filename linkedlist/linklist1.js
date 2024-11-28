class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    
    constructor() {
      this.head = null;
    }
  
    
    addNode(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
    
        this.head = newNode;
      } else {
    
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = newNode;
        }
        currentNode.next = newNode;
      }
    }
  
    
    display() {
      let current = this.head;
      const result = [];
  
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join("->"));
    }
  }
  
  class LinkedListLength extends LinkedList {
    getLength() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  }
  
  class LinkedListSearch extends LinkedList {
    search(target) {
      let current = this.head;
  
      while (current) {
        if (current.data === target) return true;
        current = current.next;
      }
      return false;
    }
  }
  
  class LinkedListRemove extends LinkedList {
    remove(value) {
      if (!this.head) return;
  
      
      if (this.head.data === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.nextSibling.data !== value) {
        current = current.next;
      }
  
      
      if (current.next) {
        current.next = current.next.next;
      }
    }
  }
  
  const listRemove = new LinkedListRemove();
  listRemove.addNode(10);
  listRemove.addNode(20);
  listRemove.addNode(30);
  listRemove.remove(20);
  listRemove.display();
  