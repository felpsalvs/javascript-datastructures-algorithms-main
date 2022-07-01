class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  //método para remover o último elemento da pilha
  pop() {
    return this.items.pop();
  }
  //método para retornar o último elemento da pilha
  peek() {
    return this.items[this.items.length - 1];
  }
  //método para verificar se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }
  //método para retornar o tamanho da pilha
  size() {
    return this.items.length;
  }
  //método para limpar a pilha
  clear() {
    this.items = [];
  }
  //método para retornar a pilha em forma de string
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());
stack.push(11);
console.log(stack.size()); //3
console.log(stack.isEmpty()); //false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); //2
