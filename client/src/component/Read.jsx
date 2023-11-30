import React, { useEffect, useState } from 'react';
import '../shared/Read.css';
import { Link } from 'react-router-dom';

const Read = () => {

  const [data, setData] = useState();
  const [error, setError] = useState("");

  const getData = async()=>{
    const response = await fetch("http://localhost:8000");

    const result = await response.json();
    if(!response.ok)
    {
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok)
    {
      setData(result);
    }
  }


  const handleDelete = async(id)=>{
    const response = await fetch(`http://localhost:8000/${id}`,{
      method: "DELETE",
    });
    const result = await response.json();
    if(!response.ok)
    {
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok)
    {
      setError("Deleted successfully");
      setTimeout(() => {
        setError("");
        getData();
        
      }, 1000);
    }

  }




  useEffect(()=>{
    getData();

  },[])
  console.log(data);


  return (
    <div className='container my-2'>
      {error && <div class="alert alert-danger">{error}</div>}
      <h2 className='text-center'>All Data</h2>
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{ele.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p class="card-text">{ele.phone}</p>
                <p class="card-text">{ele.age}</p>
                <Link to={`${ele._id}`} class="card-link" style={{color:'#00ff00'}}>Edit</Link>
                <span class="card-link" style={{color:'#fc0339'}}  onClick={()=>handleDelete(ele._id)}>Delete</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Read;