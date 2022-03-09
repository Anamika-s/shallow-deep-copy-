console.log("Inside script 4")


let btnGetContents  = document.getElementById("btnGetContents");

btnGetContents.addEventListener('click', btnGetClicked);

var xhr = new XMLHttpRequest();
function btnGetClicked()
{

  // console.log("Button is clicked");
  // console.log("1" + xhr.readyState);
  xhr.open("GET", "test.txt",true);
 // console.log("2" + xhr.readyState);
  xhr.onreadystatechange = Statechange;
  xhr.send(null);
}

function Statechange()
{
  // console.log("State is changed");
  // console.log("A"+ xhr.readyState);
  if(xhr.readyState ==4 && xhr.status == 200)
  {
    // console.log("State is 4");
    console.log(xhr.responseText);
    document.getElementById("div1").innerHTML = xhr.responseText;
  }
}
