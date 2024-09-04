class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class SLL:
    def __init__(self): 
        self.head = None
    def addFront(self ,value):
        if(self.head == None):
            self.head = Node(value)
            return self
        else:
            new_node = Node(value)
            new_node.next = self.head
            self.head = new_node
            return self
    def traverse(self):
        newnode = self.head
        while ( newnode.next != None):
            print(newnode.data,"->")
            newnode = newnode.next 
            
        print(newnode.data, "--> NULL")
    def remove_front(self):
        self.head = self.head.next
        return self
    def front(self):
        if self.head == None:
            print("Null")
        else:
            print(self.head.data)


SLL1 = SLL()
SLL1.addFront(18).addFront(5)
SLL1.addFront(73)
SLL1.remove_front()
SLL1.traverse()
SLL1.front()