class stack{
    constructor(){
        this.items = {};
        this.top = -1;
    }

    push(element){
        this.top++;
        this.items[this.top] = element
    }

    pop(){
        if(this.top < 0){
            console.log("Stack is underflow")
            return undefined
        }else{
            let poppedElement = this.items[this.top]
            this.top--;
            return poppedElement
        }

    }
    peek(){
        if(this.top < 0){
            console.log("Stack is underflow")
            return undefined
        }
            return this.items[this.top] ;
        
    }
    isEmpty(){
        return this.top < 0 
    }
}


let stack1 = new stack

stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.push(40)

console.log(stack1.pop())