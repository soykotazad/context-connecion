import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then (() => console.log("user logged out"))
    .catch (error => console.log(error))
  }


    const links = <>
    <li> <NavLink to="/" > Home </NavLink> </li>
    <li> <NavLink to="/login" > Login </NavLink> </li>
    <li> <NavLink to="/reg" > Register </NavLink> </li>
    <li> <NavLink to="/orders" > Orders </NavLink> </li>
 {
  user &&   <div>

<li> <NavLink to="/profile" > profile </NavLink> </li>
    <li> <NavLink to="/dashboard" > Dashboard </NavLink> </li>
  </div>
 }
    
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Email Auth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}

          </ul>
        </div>

        <div className=' navbar-end' >
          {
            user ? <>
             <span> <button className='btn btn-ghost'> {user.email}</button> </span>

             
          <a onClick={handleLogOut} className='btn btn-sm btn-error' href="">sign out</a>
          
            </> : <Link to="/login"> <button className='btn btn-success'> Login </button></Link>
          }

        </div>
        
      </div>
    );
};

export default Header;