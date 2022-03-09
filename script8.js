console.log("Promise Demo")

//pending
//resolved
//rejected

// producing code
function func1()
{
  return new Promise (function(resolve,reject)
  {
     setTimeout(()=>
     { 
      const error = false;
      if(!error)
      {
       // console.log("Your promise has been resolved");
        resolve("Your promise has been resolved");
      }
      else 
      {
        reject("Promise not fullfilled");
      }

     },2000);
  });
}

// Call code

func1().then(function (response)
{
  console.log("succeded");
  console.log(response);
}).catch(function(error)
{
  console.log(error);
  // console.log("Promise not fullfilled");
});

