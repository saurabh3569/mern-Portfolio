import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import '../style.css'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/user/login', { email, password })
            localStorage.setItem("token", data.token)
            toast.success(`Login successfully`)
            navigate('/')
        } catch (error) {
            toast.warn(error.response.data);
        }
    };

    return (
        <div className='mainLogin'>
            <div className='loginContainer'>
                <div className='mt-5'>
                    <h1 className='text-center bg-info p-2'>Login</h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>

                        <Button className='w-100' variant="primary" type="submit">
                            Login
                        </Button>
                        <hr className='registerHr' />
                    </Form>
                    <div className='text-center'>
                        <Link className='text-light' to='/'>Not Admin ? Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login