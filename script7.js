console.log("Fetch Api");
console.log("Fetch Api1");

let btnFetchDetails = document.getElementById("btnFetchDetails");
console.log(btnFetchDetails);
btnFetchDetails.addEventListener('click', FetchDetails);

let btnInsert = document.getElementById("btnInsert");
btnInsert.addEventListener("click", Insert);

function FetchDetails()
{
  console.log("Button clicked");
  fetch('test.txt').then((response)=>
  {
    console.log("Inside 1st then");
  return response.text();
  }).then(data=>
    {  console.log("Inside 2nd then");
      console.log(data);
    });
}


function Insert()
{
 console.log("Inside Insert Method");
 var url ='https://reqres.in/api/users';
 var data = { "name" :"Anamika",
             "job" :"job1"
};
 var obj =
 {
   method:'post',
   headers:{
     'Content-Type':'application/json'
 },
 body:data
  }
 fetch(url).then(response=>
  {
     return response.json();
  }).then(data=>
    {
 console.log(data);
    });
  }

