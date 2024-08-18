const products = [
    {
        name: "Laptop",
        price: 100000
    },
    {
        name: "Mobile",
        price: 20000
    },
    {
        name: "Tablet",
        price: 15000
    },
    {
        name: "Earphone",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 500
    },
    {
        name: "Mouse",
        price: 300
    },
]

const max = [
    {
        name: null,
        price: null
    }
]

const min = [
    {
        name: null,
        price: null
    }
]

for(let pro of products) {
    if(max[0].price == null || pro.price > max[0].price) {
        max[0].name = pro.name;
        max[0].price = pro.price;
    }
    if(min[0].price == null || pro.price < min[0].price) {
        min[0].name = pro.name;
        min[0].price = pro.price;
    }
}

console.log(`The most expensive product is ${max[0].name} and its price is ${max[0].price}`);

console.log(`The cheapest product is ${min[0].name} and its price is ${min[0].price}`);
