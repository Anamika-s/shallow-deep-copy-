// console.log("Start");
// console.log("In Between");
// console.log("End");


//  console.log("Start");
//  setTimeout(()=>
//  {
//    console.log("In Between")
//  }, 2000);

//  console.log("End")


// var numbers =[1,2,3,4,5];
// console.log("Start");
// numbers.forEach(item=>
//   {
//     console.log(item);
//   });
//   console.log("End");


// console.log("Start")
// function getName(name)
// {
//   setTimeout(()=>
//   {
//      console.log("Inside GetName"); return name;

//   },2000);
// }

// var name = getName("Deepak");
// console.log(name);
// console.log("End")


console.log("CallBack");
console.log("Start");
function getName(name , callback)
{
  setTimeout(()=>
  {
  console.log("Inside GetName"); callback(name);
  }, 2000)
  
};
getName("Deepak" , (name)=>
{
  console.log(name);
})
console.log("End")



















