console.log("Inside script file")

// var array1 =["Ajay", "Deepak" , "Sagar"];

// // console.log(array1)
// var array2 = array1;
// console.log(array1, array2);

// array2[1] = "New Name";
// console.log(array1, array2);

// Solutions : Shallow Or Deep Copy
// Shallow Copy 
// 1. concat 2. Array.from 3. Spread 
// Deep Copy 
// JSON.parse 

// var array3 = [100, 200 , {name:'Ajay'}];

// var array4 = array3;

// console.log(array3, array4);
// array4[0] = 1000;
// console.log(array3, array4);

var a = [100,200,300,{a:'india'}];
var b =[1000];
var c = a.concat(b);
// Shallow Copy means , that now it will not change values 
// after copying one array to other
// console.log(a, b , c);

// c[0] = 100000000;
// console.log(a);
// console.log(b);
// console.log(c);

// c[3][a] =111111111111111111111;
// console.log(a);
// console.log(b);
// console.log(c);

// console.log("Array.from")
// var d = Array.from(a);
// console.log(a);
// console.log(d);

// d[0] = 22222222222;
// console.log(a);
// console.log(d);

// d[3][a] = 50000000000000;

console.log("Spread Operator")
// ... means spread opeartor
var e = [...a]

console.log(a);
console.log(e);

e[0] = 1000000;
console.log(a);
console.log(e);

e[3][a]= 000000000000000;
console.log(a);
console.log(e);

console.log("About Spread Operator");

console.log(Math.max(1,2,3,4,5,6,3,344,45,546,3));

var num =[1,2,3,4,5,6,3,344,45,546,3];

console.log(Math.max(...num))


let person = {name:"Abhishek", age:23};
console.log(person);

var p1 = person;

console.log(person, p1);

p1.name="Jatin";
console.log(person, p1);

var p2 = {...person}
console.log(person, p2);

p2.name="Lalit";
console.log(person, p2);

 var num1 = [1,2,3];
 var num2 = [4,5,6];
 
 var num3 = [...num1 , ...num2];

 console.log(num3);

 var num4 = [100, 200, ...num1 , 900, 899 , ...num2];

console.log(num4);


 var arr1 = [1,2,3, {a:'hello'}];
 var arr2 = JSON.parse(JSON.stringify(arr1));

 console.log(arr1, arr2);

 arr2[3][a] = 800;
 console.log(arr1, arr2);


// Objects (Shallow Copy)


const target = { a: 1, b : 2 , d:16};
const source = { b: 4, c: 5 , d:10};

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

returnedTarget.b = 100;


console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);


var sourceObj =
{ 
  name:"Ajay",
  Age : 23,
  hobbies : ["Cricket", "Hockey"]
}

console.log(sourceObj);

var targetObj = Object.assign({}, sourceObj);

console.log(sourceObj);
console.log(targetObj);

targetObj.Age= 10;

console.log(sourceObj);
console.log(targetObj);

targetObj.hobbies[0] ="Football";

console.log(sourceObj);
console.log(targetObj);


// Deep Copy

var targetObj2 =  JSON.parse(JSON.stringify(sourceObj));

console.log(sourceObj);
console.log(targetObj);

targetObj.hobbies[0] ="Baseball";
console.log(sourceObj);
console.log(targetObj2);



// const Add = function(num)
// {
//   var sum  = 0;
//    num.forEach(element => {
//       sum+= element;
//    }); 
//    return sum;
// }

// REST Parameter

const Add = function(...num)
{
  var sum  = 0;
     num.forEach(element => {
        sum+= element;
     }); 
     return sum;
  
}




var num=[1,2,3,4];
console.log(Add(num));
console.log(Add(1,2,3,4,5,6,7,8,90));
console.log(Add(8,90));













































































