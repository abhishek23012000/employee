import React, { useState } from "react";
import Axios from "axios";
function Form() {
const url="http://localhost:5000/api/employee/create"
// const [currentRadioValue, setCurrentRadioValue] = useState()
  const [data , setData] = useState({
    name: "",
    salary:"",
    department:"",
    dob:"",
    gender:""
  });
 

function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)

}
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    name:data.name,
    dob:data.dob,
    department:data.department,
    salary:data.salary,
    gender:data.gender
  })
  .then(res=>{
    console.log(res.data);
  })
}
 
  return (
    <form className="container" onSubmit={(e)=>submit(e)} >
      <div className="header">
  
      </div>
      

      
      <div>
        <input type="text" placeholder="EmployeeName" id="name" value={data.name} onChange={(e)=> {handle(e)}}></input>
      </div>
      {/* <div>
        <input type="text" placeholder="department" id="department" value={data.department} onChange={(e)=> {handle(e)}}></input>
      </div> */}
      <div>
        <input type="date" placeholder="Date Of Birth" id="dob" value={data.dob} onChange={(e)=> {handle(e)}}></input>
      </div>
      <div>
        <input type="text" placeholder="Salary" id="salary" value={data.salary} onChange={(e)=> {handle(e)}}></input>
      </div>
      {/* <div>
        <input type="text" placeholder="Gender" id="gender" value={data.gender} onChange={(e)=> {handle(e)}}></input>
      </div> */}
 <label>Gender</label>

<div>
        <input
          id="gender"
          name="radio-item-1"
          type="radio"
          value="male"
          onChange={(e)=> {handle(e)}}
          checked={data.gender === 'male'}
          
        />
        <label htmlFor="radio-item-1">Male</label>
      </div>
      <div>
        <input
          id="gender"
          name="radio-item-2"
          type="radio"
          value="female"
          onChange={(e)=> {handle(e)}}
          checked={data.gender  === 'female'}
         
        />
        <label htmlFor="radio-item-2">
          Female
        </label>
      </div>
      <label>Department</label><br></br>
       <select 
        onChange={(e) => handle(e)}
        value={data.department} id="department" 
      >
        <option value="Cse">Cse</option>
        <option value="ECE">Ece</option>
        <option value="Civil">Civil</option>
        
      </select>


<button>submit </button>

    </form>
  );
}
export default Form;