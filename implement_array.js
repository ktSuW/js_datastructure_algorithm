class ArrayImplementation {
  constructor() {
    this.length = 0; // initial length
    this.data = {};
  }

  get(index) {
    return this.data;
  }

  push(item) {
    this.data[this.length] = item;
    // after adding, increment the array length
    this.length++;
    return this.length;
  }

  pop() {
    const removed = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }

  delete(index) {
    const removed = this.data[index];
    this.shiftItems(index);
    return removed;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arrayOne = new ArrayImplementation();
arrayOne.push("hi");
arrayOne.push("you");
arrayOne.push("!");
// arrayOne.pop();
arrayOne.delete(0);
arrayOne.push("are");
arrayOne.push("nice");
arrayOne.delete(1);
console.log(arrayOne);
