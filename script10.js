console.log("Async Await Demo");

async function hello()
{
  console.log("Inside hello");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("after response");
  return users;
}
console.log("Before Calling hello");
let a= hello();
console.log("After Calling hello");
console.log(a);
a.then(data=>console.log(data))
.catch(error=>console.log(error));
console.log("This is the last line of the program");