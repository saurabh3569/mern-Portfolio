import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const UpdateAboutMe = () => {

    const [id, setId] = useState('')

    const [data, setData] = useState({ about: '', skills: '', resume: '' })
    const [about, setAbout] = useState('')
    const [resume, setResume] = useState('')
    const [skills, setSkills] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`/about/${id}`, { about, skills, resume })
            toast.success(data)
        } catch (error) {
            toast.error(error.response?.data);
        }
    };



    const getDetails = async () => {
        try {
            const { data } = await axios.get('/about')
            setData(data);
        } catch (error) {
            toast.error(error.response.data)
        }
    }

    const setDetails = () => {
        setAbout(data.about);
        setSkills(data.skills);
        setResume(data.resume);
        setId(data._id);
    }

    useEffect(() => {
        getDetails()
    }, [])

    useEffect(() => {
        if (data) setDetails()
    }, [data])

    return (
        <div className='mainContact'>
            <div className='contactContainer'>
                <div className='mt-5'>
                    <h1 className='text-center bg-info p-2'>Update AboutMe</h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Your Skills  ex: Nodejs,reactjs,expressJs" value={skills} onChange={(e) => setSkills(e.target.value.split(','))} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Resume link" value={resume} onChange={(e) => setResume(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control as="textarea" style={{ height: "100px" }} type="text" placeholder="Enter About You" value={about} onChange={(e) => setAbout(e.target.value)} required />
                        </Form.Group>

                        <Button className='w-100' variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default UpdateAboutMe
