function details (name, model, price) {
    return {
        name: name,
        mode: model,
        price: price,
    }
}

const mycar = details('Toyota', 'Corolla', 2000000);

displayCarDetails(mycar);

function displayCarDetails (car) {
    console.log(`Name: ${car.name}, Model: ${car.model}, Price: ${car.price}`);
}