const product = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Space Grey",
    hardDisk: "256 GB"
}

for(let key in product) {
    console.log(`${key} : ${product[key]}`);
}