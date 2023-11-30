import React,{useEffect, useState} from 'react';
import '../shared/create.css';
import { useParams ,useNavigate} from 'react-router-dom';

const Update = () => {


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState(0);
  const [phone, setPhone] = useState(+91);

  const [error,setError] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  const getSingleUser = async()=>{
    const response = await fetch(`http://localhost:8000/${id}`);

    const result = await response.json(); 

    if(!response.ok)
    {
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok)
    {
      setError("");
      console.log("Updated user",response);
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
      setPhone(result.phone);
    }

  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age, phone };
    console.log(updatedUser);
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("updated result..", result);
      setError("");
      navigate("/all");
    }
    if (!response.ok) {
      console.log(response.error);
      setError(response.error);
    }
  };






  useEffect(()=>{
    getSingleUser()
  },[])
  
  return (
    <div className='one'>
       {error && <div class="alert alert-danger">{error}</div>}
       <h2>Edit the data</h2>
      <form onSubmit={handleUpdate}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
     </div>
      <div class="mb-3">
       <label className="form-label">Email</label>
       <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       </div>
      <div class="mb-3">
       <label className="form-label">Age</label>
       <input type="number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div class="mb-3">
       <label className="form-label">Phone</label>
       <input type="number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <input type="submit" value="Submit"></input>
     </form>
    </div>
  )
}

export default Update;