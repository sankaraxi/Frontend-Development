const promise = createOrder();

promise.then((order) => { // this is the success callback
    console.log(order);
});

