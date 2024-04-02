import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';



const Reg = () => {



  const {createUser} = useContext(AuthContext);

    const handleReg = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);

        // create user in firebase
        createUser (email, password)
        .then (result => {
          console.log(result.user)
        })
        .catch( error => {
          console.log(error)
        })
      
      
      }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleReg} >
            
            <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name='name' required placeholder="Your name" className="input input-bordered" required />
        </div>

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
      
           
            </form>
      
            <p>Account ace age thekei? Please <Link to="/login"> <button className='btn btn-link text-sm rounded-full '>Login</button></Link></p>
      
          </div>
        </div>
      </div>
    );
};

export default Reg;