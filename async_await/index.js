const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolved');
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved');
    }, 20000);
});

async function asyncFunction() {
    console.log("Hello World");

    const result1 = await p1;
    console.log(result1);
    console.log("Hello World Again");


    const result2 = await p2;
    console.log(result2);
    console.log("Hello World Again Again");

}

asyncFunction();