function doubleElements(arr, callback) {
    return arr.map((element) => callback(element));
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleElements(numbers, (num) => num * 2);
  console.log(doubledNumbers); 