console.log("Insdie Script9");

const students = [
  {name:"Deepak", subject:"English"},
  {name:"Ajay", subject:"Hindi"},
  {name:"Sagar", subject:"English"}
];

function EnrollStudent(student, DisplayStudents)
{
  return new Promise((resolve, reject) => 
  {
     setTimeout(()=>
     {
     const error=false;
      students.push(student);
      
      if(!error)
       resolve("Student is enrolled");
       else 
       reject("Student can not be insered");
     }, 6000);
})
}

function DisplayStudents()
{
   setTimeout(()=>
   {
     let str ="";
     students.forEach(student=>
      {
        // str+= '<li>' + student.name + '</li>';
        str+= `<li> ${student.name}</li>`;
      });
      document.getElementById("studentsList").innerHTML = str;
   },1000);
}

let student = {name:'Lalit', subject:'English'};
EnrollStudent(student).then(function(response)
{
  console.log(response);
 DisplayStudents();
}).catch(function(error)
{

 console.log(error);
});

// DisplayStudents();