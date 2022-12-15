console.log("hi");
function greet(person: string, date: Date) {
  console.log(`hello ${person}, Today is ${date.toDateString()}!`);  // hello sachin Today is thu 15 December 2022!
}
greet("sachin", new Date());

var user = { name: "sachin ", age: 10 };
console.log(user); //{name: 'sachin', age: 10}
 console.log(user.name); // sachin
console.log(user.age); //10
console.log("hello"); // hello
console.log("Hello world"); //  Hello world
