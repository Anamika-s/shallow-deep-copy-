console.log("Inside script 5")


let btnGetContents  = document.getElementById("btnGetContents");

btnGetContents.addEventListener('click', btnGetClicked);

let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener('click', btnAddClicked);

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

 

