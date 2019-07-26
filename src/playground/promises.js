const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Gustav',
        //     age: 29
        // });
        reject('error - something went wrong');
    }, 1500);
});

console.log('Before');

promise.then((data) => {//when promise resolves (only resolves, not rejects), this gets called. 
    console.log('1', data);
}).then(() => {
    'This is chaining of promises'
}).catch((error) => { //this happens when the promise rejects
    console.log(error);
}); 



console.log('After');