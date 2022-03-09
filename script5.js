console.log("Inside script 5")


let btnGetContents  = document.getElementById("btnGetContents");

btnGetContents.addEventListener('click', btnGetClicked);

var xhr = new XMLHttpRequest();
function btnGetClicked()
{  
  xhr.open("GET", "test.txt",true);
  xhr.onprogress = function()
  {
     console.log(xhr.readyState); console.log("Inside Progess");
  }
  xhr.onload = function()
  {
    console.log(xhr.readyState); console.log("Inside load");
    document.getElementById("div1").innerHTML = xhr.responseText;

  }
  xhr.send();
}

 

