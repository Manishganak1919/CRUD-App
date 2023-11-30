import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../shared/create.css';
const Create = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState(0);
  const [phone, setPhone] = useState(+91);

  const [error,setError] = useState("");
  console.log(name,age,email,phone);

  const navigate = useNavigate();

  /**ye likhnae se backend mein data save ho jayega */
  const handleSubmit = async(e)=>{
    e.preventDefault();

    const addUser = {name,email,age,phone};

    const response = await fetch("http://localhost:8000",{
      method:"POST",
      body:JSON.stringify(addUser),
      headers:{
        "content-type": "application/json"
      },
    });

    const result = await response.json();

    if(!response.ok)
    {
      console.log(result.errors);
      setError(result.error);
    }
    if(response.ok)
    {
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge(0);
      setPhone(91);
      navigate("/all");
    }
  }


  return (
    <div className='one'>
       {error && <div class="alert alert-danger">{error}</div>}
       <h2>Enter the data</h2>
      <form onSubmit={handleSubmit}>
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

export default Create;