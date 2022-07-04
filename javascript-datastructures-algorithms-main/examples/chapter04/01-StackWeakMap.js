// @ts-check


const items = new WeakMap();
const _count = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    const r = _count.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    const items = _items.get(this);
    const count = _count.get(this);
    return items[count - 1];
  }

  isEmpty() {
    return _count.get(this) === 0;
  }

  size() {
    return _count.get(this);
  }

  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    _count.set(this, 0);
    _items.set(this, {});
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const items = _items.get(this);
    const count = _count.get(this);
    let objString = `${items[0]}`;
    for (let i = 1; i < count; i++) {
      objString = `${objString},${items[i]}`;
    }
    return objString;
  }
}
