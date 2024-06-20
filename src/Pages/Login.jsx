import axios from 'axios';
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../Base_url/baseUrl';
import { FiLogIn } from "react-icons/fi";
import '../Styles/login.css'
import login_img from '../assets/login_img.png'
const Login = () => {

  const navigate=useNavigate()
  const [showpassword,setShowpassword]=useState(false)
    const togglepassword=()=>{
        setShowpassword(!showpassword)
    }
  const [loginDetails,setLoginDetails]=useState({
    phone:'',
    password:''
  })

  //Login
  const handleLogin=async()=>{
    try {
      const response = await axios.post(`${baseurl}/admin/login`, {
        phone:loginDetails.phone,
        password:loginDetails.password
      })
      console.log(response);
      if(response.data.success === true){
        // alert('Login successful')
      navigate('/dashboard')
      }
      else{
        alert('Invalid details')
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }

  }
  return (
    <div className="container-fluid">
    <div className="login-page-container">
    <div className="row mt-5">
      <div className="col-2"></div>
      <div className="col-lg-8 col-sm-12 login-colum mt-4">
          <h2 className="header">Neuvo Admin</h2>
          <p className='head_paragraph text-center'>All in one admin management Utility Handcrafted by Neuvo  </p>
        <div className="login-box text-center">
          <div className="row w-100 ">
            
            <div className="col-lg-5 col-sm-12  d-flex flex-column align-items-center justify-content-center">
              <img className='login-img mb-3' src={login_img} alt="" />
              {/* <span className='mt-2 mb-5  w-100  d-flex justify-content-center'><LoginGoogle/></span> */}
            </div>
            <div className="col-lg-7 col-sm-12  d-flex flex-column align-items-center justify-content-center">
              <input onChange={(e) => setLoginDetails({ ...loginDetails, phone: e.target.value })} className='form-control mb-1 login_input_fleld ' type="email" placeholder='Phone' />
              <div className="password_container">
              <input onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} className='form-control my-1 login_input_fleld' type={showpassword ? "text" : "password"} placeholder='Password' />
                <span className='eye' onClick={togglepassword}>{showpassword ? <FaEye /> : <FaEyeSlash />}</span>
              </div>
              <div className="login_buttons d-flex flex-column align-items-center justify-content-center  w-100 mb-1">
                <button className='btn btn-outline-dark w-50 btn-lg mt-2 border border-1 border-dark btn-block ms-2 d-flex align-items-center justify-content-center' onClick={handleLogin}><span className='me-1'>Login</span> <FiLogIn /></button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-2"></div>
    </div>

    </div>
  </div>
  )
}

export default Login