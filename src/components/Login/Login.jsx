import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate= useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
      
        signInUser(email, password)
        .then (result => {
          console.log(result.user)
          e.target.reset();
          navigate('/')
        })
        .catch( error => {
          console.log(error)
        })
      

      }

       



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} >

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
      

      <p>New to this website? Please <Link to="/reg"> <button className='btn btn-link text-sm rounded-full '>Register</button></Link></p>
        <button className='btn btn-link ' >
          Google
        </button>
    </div>
  </div>
</div>
    );
};

export default Login;