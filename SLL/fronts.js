class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value){
        let new_node = new Node(value)
        if(!this.head){
            this.head = new_node
            return this
        }
        new_node.next = this.head
        this.head = new_node
        return this
    }
    removeFront(){
        if(!this.head){
            console.log("null")
        }
        else{
            this.head = this.head.next
            return this
        }
    }
    front(){
        if(!this.head){
            console.log("null")  
        }
        else{
            console.log(this.head.data) 
        }
        
    }
}

SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
SLL1.removeFront()
SLL1.removeFront()
SLL1.front()
SLL1.removeFront()
SLL1.front()
console.log(SLL1)