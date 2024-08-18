function sum(a, b) {
    console.log(x); // Variable x is hoisted but undefined
    var x = a + b;
    return x;
}

console.log(sum(5, 10));
