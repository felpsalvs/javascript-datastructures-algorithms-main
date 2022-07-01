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