import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'
import { toast } from 'react-toastify'
import './style.css'

const Contact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/contact', { email, name, message })
            toast.success(data)
            setEmail("")
            setName("")
            setMessage("")
        } catch (error) {
            toast.error(error.response.data);
        }
    };


    return (
        <div className='mainContact'>
            <div className='contactContainer'>
                <div className='mt-5'>
                    <h1 className='text-center bg-info p-2'>Contact Me</h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control as="textarea" style={{ height: "100px" }} type="text" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </Form.Group>

                        <Button className='w-100' variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact
