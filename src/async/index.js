const duSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const duSomething = async () => {
    const something = await duSomethingAsync();
    console.log(something);
}

console.log('Before');
duSomething();
console.log('After')

const anotherFunction = async() => {
    try{
        const something = await duSomethingAsync();
        console.log(something)
    } catch(error){
        console.error(error)
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2')