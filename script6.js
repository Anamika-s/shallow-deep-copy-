console.log("Inside script 5")


let btnGetContents  = document.getElementById("btnGetContents");

btnGetContents.addEventListener('click', btnGetClicked);

let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener('click', btnAddClicked);

let btnPopulateList = document.getElementById("btnPopulateList");
btnPopulateList.addEventListener('click', PopulateList);


var xhr = new XMLHttpRequest();
function btnGetClicked()
{  
  xhr.open("GET", "data.json",true);
  xhr.onprogress = function()
  {
     console.log(xhr.readyState); console.log("Inside Progess");
  }
  xhr.onload = function()
  {
    console.log(xhr.readyState); console.log("Inside load");
    console.log(xhr.responseText);
    document.getElementById("div1").innerHTML = xhr.responseText;

  }
  xhr.send();
}




function btnAddClicked()
{
  var obj = {
    "name": "Anamika",
    "job": "leader"
    
};
  xhr.open("POST", "https://reqres.in/api/users",true);
  xhr.getResponseHeader("Content-Type", 'application/json');

  xhr.onprogress = function()
  {
     console.log(xhr.readyState); console.log("Inside Progess");
  }
  xhr.onload = function()
  {
    console.log(xhr.readyState); console.log("Inside load");
    console.log(xhr.responseText);
    document.getElementById("div1").innerHTML = xhr.responseText;

  }
  xhr.send(obj);
}

var xhr1 = new XMLHttpRequest();
function PopulateList()
{
 console.log("Inside Method");
xhr1.open('Get', 'https://jsonplaceholder.typicode.com/comments', true);
 // xhr1.onreadystatechange = handleRequest;
 xhr1.send();
 
//  xhr1.onprogress = function()
//  {
//    console.log(xhr1.readyState);
//  }
 xhr1.onload = function()
 {
  //  console.log("Inside 2");
  // console.log(xhr1.readyState);
  if(xhr1.readyState==4 && xhr1.status==200)
  {
    // console.log("Request success");
    let obj =  JSON.parse(xhr1.responseText);
    // console.log(obj);
    let list = document.getElementById("list");
    var str = "";
     for(key in obj)
      {
        str+= `<li>${obj[key].name}</li>`;
      }
      list.innerHTML= str;
   
 }
 }
}

// function handleRequest()
// {
//   console.log(xhr1.readyState);
//   if(xhr1.readyState==4 && xhr1.status==200)
//   {
//     console.log("Request success");
//     let obj =  JSON.parse(xhr1.responseText);
//     console.log(obj);
//     let list = document.getElementById("list");
//     var str = "";
//      for(key in obj)
//       {
//         str+= `<li>${obj[key].name}</li>`;
//       }
//       list.innerHTML= str;
//     }
// }

























