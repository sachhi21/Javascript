function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId("sachin");
printId(23);
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and ")); //Hello, sachin and dhruv and durgesh
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x); // Welcome lone traveler sachin
  }
}
welcomePeople(["sachin", "dhruv", "durgesh"]);

function getFirstThree(x: number[] | string) {
  return console.log(x.slice(0, 3));
}
getFirstThree([1, 2, 3, 4, 5]);
