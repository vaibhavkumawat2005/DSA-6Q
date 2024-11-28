class stack{
    constructor(){
        this.item = [];
        this.top = -1;
    }

    push(element){
        this.top++;
        this.item[this.top] = element;
    }
    pop() {
        if (this.top < 0) {
          console.log("Stack is underflow");
          return undefined;
        } else{
          let poppedElement = this.item[this.top];
          this.top--;
          return poppedElement;
        }
      }
    peek() {
        if (this.top < 0) {
          console.log("Stack is Empty");
          return undefined;
        }
        return this.item[this.top];
      }
    
      isEmpty() {
        return this.top < 0;
      }



}


let stack1 = new stack()

stack1.push(10)
stack1.push(20)
stack1.push(90)

console.log(stack1.pop())
