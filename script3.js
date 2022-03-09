console.log("Insdie Script3");

const students = [
  {name:"Deepak", subject:"English"},
  {name:"Ajay", subject:"Hindi"},
  {name:"Sagar", subject:"English"}
];

function EnrollStudent(student, DisplayStudents)
{
     setTimeout(()=>
     {
    students.push(student);
    console.log("Student is enrolled"); DisplayStudents(student);
     }, 6000);
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
EnrollStudent(student, DisplayStudents);
// DisplayStudents();