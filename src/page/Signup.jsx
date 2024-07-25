import React, { useState } from 'react'
const Signup = () => {
   let arr=JSON.parse(localStorage.getItem('register'))||[]

  const [details, setdetails] = useState({
    name:'',
    email:'',
    password:''
  });
  const handleChange=(e)=>{
    let value=e.target.value;
    console.log(value)
    setdetails({...details,[e.target.name]:e.target.value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(details)
    let existUser=arr.find((ele)=>ele.email===details.email)
    if (!existUser){
      arr.push(details)
      localStorage.setItem('register',JSON.stringify(arr))
    }

  }
  return (
    <div className='authPage'>
   <form  className="col-md-6 m-auto  p-5 rounded mt-5">
   <div className='mb-3'>
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input name='name' onChange={handleChange} type="text" className="form-control" aria-describedby="Name" />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button onClick={handlesubmit} type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Signup
  