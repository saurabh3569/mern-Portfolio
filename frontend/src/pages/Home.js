import axios from 'axios'
import React, { useEffect } from 'react'
import Accounts from '../components/Accounts'
import './style.css'

const Home = () => {

  const token = localStorage.getItem('token')

  const generateToken = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const { data } = await axios.get('/user/islogin', config)
      sessionStorage.setItem("id", data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    if (token) generateToken()
  }, [])

  return (
    <div className='mainHome text-center p-5'>
      <div className='secondHome'>
        <h5>I'm</h5>
        <h1>Saurabh Mishra</h1>
        <h5>A Full Stack Developer</h5>
      </div>
      <p className='text-center text-light mt-5'>Follow Me</p>
      <Accounts />
    </div>
  )
}

export default Home
