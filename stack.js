/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  /** push(val): add new value to end(first) of the stack. Returns undefined. */

  push(val) {
		const newNode = new Node(val);
    
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
      this.size++;
      
      return;
    }
    
    newNode.next = this.first;
    this.first = newNode;
    
    this.size++;
    
    return;
    
  }

  /** pop(): remove the node from the top(first) of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
	if(this.size === 0) throw new Error('Stack is Empty');
    
    const poppedNode = this.first;
    
    if(this.size === 1){
    	this.first = null;
      this.last = null;
      this.size--;
      
      return poppedNode.val;
    }
    
    this.first = poppedNode.next;
    this.size--;
    
    return poppedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
	if(this.size === 0) return ('Stack Empty');

	return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Stack;
