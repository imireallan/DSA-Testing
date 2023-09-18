class CustomArray {
  data: Record<number, any>;
  length: number;
  constructor() {
    this.data = {};
    this.length = 0;
  }
  get(index: number) {
    if (index >= this.length) return null;
    return this.data[index];
  }
  push(item: any): number {
    if (!item) return this.length;
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  indexOf(item: any): number {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
    return -1;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {}
  unshift() {}
  delete(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  private shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

export default CustomArray;
