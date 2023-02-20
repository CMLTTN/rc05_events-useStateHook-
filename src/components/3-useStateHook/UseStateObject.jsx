import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({ 
    name: "Ahmet",
    surname: "Can",
    salary:10000 
  })
 const handleSalaryInc = ()=>{
setPerson({...person, salary: person.salary + 500})
 }
 const handleSalaryDec = ()=>{
setPerson({...person, salary: person.salary - 500})
 }
 const handleClearName = ()=>{
setPerson({...person,name:"no name",surname:"no name"})
 }
  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Object</h2>
      <h1 className="display-4">
        {person.name} {person.surname}
      </h1>
      <h1 className="display-6">Salary:{person.salary}</h1>

      <button onClick={handleSalaryInc} className="btn btn-success">
        Salary inc
      </button>
      <button onClick={handleClearName} className="btn btn-danger">CLR</button>
      <button onClick={handleSalaryDec} className="btn btn-warning">
        Salary dec
      </button>
    </div>
  );
};

export default UseStateObject;
