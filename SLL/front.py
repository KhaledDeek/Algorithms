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
    def contains(self ,value):
        runner = self.head
        while(runner != None):
            if runner.data == value:
                print("True")
                return self
            runner = runner.next
        print("False")
        return self
    def length(self):
        runner = self.head
        count = 0
        while(runner != None):
            count +=1
            runner = runner.next
        print(count)
    def display(self):
        runner = self.head
        list = []
        while(runner != None):
            list.append(runner.data)
            runner = runner.next
        print(list)
    def max(self):
        runner = self.head
        val = self.head.data
        while(runner.next != None):
            if runner.data > val:
                val = runner.data 
            runner = runner.next
        print(val)
    def min(self):
        runner = self.head
        val = self.head.data
        while(runner.next != None):
            if runner.data < val:
                val = runner.data 
            runner = runner.next
        print(val)
    def avg(self):
        runner = self.head
        val = 0
        count = 0
        while(runner.next != None):
            val += runner.data
            count += 1
            runner = runner.next
        print(val/count)


SLL1 = SLL()
SLL1.addFront(18).addFront(5).addFront(73)
SLL1.remove_front()
SLL1.traverse()
SLL1.front()
SLL1.contains(5)
SLL1.contains(18)
SLL1.contains(73)
SLL1.length()
SLL1.addFront(6).addFront(52)
SLL1.length()
SLL1.display()
SLL1.max()
SLL1.min()
SLL1.avg()