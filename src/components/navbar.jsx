import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {UserAuth} from '../context/authContext'
const Navbar = () => {
  const navigate=useNavigate()
  const {user,logOut}=UserAuth()
  console.log(user);
  const handleLogOut = async()=>{
    try{
      await logOut()
      navigate('/')
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="absolute flex items-center justify-between p-4 z-[200] w-full ab ">
      <Link to='/'>
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      </Link>
     
     {user?.email ?  
      <div>
        <Link to='/account'>
        <button className="px-4 px-2 cursor text-white">Account</button>
        </Link>
      
        <button onClick={handleLogOut} className="rounded px-4 px-2 cursor bg-red-600 text-white ">
        Logout
        </button>
      </div> :
       
       <div>
       <Link to='/login'>
       <button className="px-4 px-2 cursor text-white">sign In</button>
       </Link>
       <Link to='/signup'>
       <button className="rounded px-4 px-2 cursor bg-red-600 text-white ">
       signUp
       </button>
       </Link>
     </div>
      }

    </div>
  );
};
export default Navbar;
