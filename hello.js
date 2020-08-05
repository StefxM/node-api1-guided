const name = process.argv[2] || "World"
// ^ its a [2] because arrays go 0,1,2
//in terminal `$ node hello.js Stephanie` = terminal saying Hello, Stephanie
console.log((`Hello, ${name}`))