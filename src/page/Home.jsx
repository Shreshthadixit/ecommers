import React ,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Home = (props) => {
  const [allproducts,setallproducts]=useState([]);
  console.log(allproducts)
  let getData=async ()=>{
    let items= await fetch('https://dummyjson.com/products')
    let data=await items.json()
    console.log(data.products)
    setallproducts(data.products)
  }
  useEffect(()=>{
    getData();
  },[])
  const handleAdd=(ans)=>{
    console.log(ans)
    props.getCartItems(ans)
  }
  return (
    <div className='row  d-flex justify-content-center gap-3'>
      homepage
      <div className="product">Showproduct</div>
      {
        allproducts.map((ele,index)=>{
          return <div key={index}  className='card' style={{width:'18rem'}}>
          <img src={ele.thumbnail}className='card-img-top'alt=''/>
          <div className="card-body">
            <h5 style={{height:"50px"}} className='card-title'>{ele.title}</h5>
             <p className='="card-text'>Price:{ele.price}</p>
             <Link to="/Single" state={ele} className="btn btn-primary">view detail</Link>
             <button onClick={()=>handleAdd(ele)}className='btn btn-success  ms-1'>Add to cart</button>
          </div>
          </div>
        })
      }
    </div>
  )
}

export default Home
