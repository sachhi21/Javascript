console.log("hi");
function greet(person: string, date: Date) {
  console.log(`hello ${person}, Today is ${date.toDateString()}!`);  // hello sachin Today is thursday 15 December
}
greet("sachin", new Date());

var user = { name: "sachin ", age: 10 };
console.log(user); //{sachin , 10}
 console.log(user.name); // sachin
console.log(user.age); //10
console.log("hello"); // hello
console.log("Hello world"); //  Hello world
