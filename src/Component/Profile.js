import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    let[profile,setprofile]=useState( JSON.parse(localStorage.getItem('activeuser')) || [])
    let navigate=useNavigate()

    console.log(profile.length)
    console.log(typeof(profile))
    const logout=()=>{
        localStorage.removeItem('activeuser')
        setprofile([])
    }   
 
  
  return <>
  
  {
    profile.length==0?(<><h5 className="text-center text-muted mt-5">You are not login.</h5> 
    <div className='text-center'> <button onClick={()=>navigate('/login')} >Click to Login</button></div>
    </> ):(<div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center">Profile</h1>
            </div>
            <div className="col-md-12 d-flex">
            <div className="col-md-4">
                UserName:
            </div>
            <div className="col-md-4">
               {profile.username}
            </div>
            </div>
            <div className="col-md-12 d-flex">
            <div className="col-md-4">
                Mobile:
            </div>
            <div className="col-md-4">
               {profile.mobile}
            </div>
            </div>
            <div className="col-md-12 d-flex">
            <div className="col-md-4">
                Email:
            </div>
            <div className="col-md-4">
               {profile.email}
            </div>
            </div>
            
            <div>
                <button onClick={logout} className='bg-danger'>Logout</button>
            </div>
        
        </div>
      </div>)
  }
  </>
}
