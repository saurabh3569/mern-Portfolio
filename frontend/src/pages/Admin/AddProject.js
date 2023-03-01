import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';
import '../style.css'

const AddProject = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState("");
    const token = localStorage.getItem("token")

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [live, setLive] = useState("");
    const [github, setGithub] = useState("");
    const [about, setAbout] = useState("");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!id) {
                const { data } = await axios.post('/projects', { title, image, live, github, about }, config)
                toast.success(data)
                navigate('/projects')
            } else {
                const { data } = await axios.put(`/projects/${id}`, { title, image, live, github, about }, config)
                toast.success(data)
                navigate('/projects')
            }
        } catch (error) {
            toast.error(error.response.data);
        }
    };

    const getProjectDetails = async () => {
        try {
            const { data } = await axios.get(`/projects/${id}`, config)
            setProject(data);
        } catch (error) {
            toast.error(error.response.data);
        }
    }

    const setProjectValues = () => {
        setTitle(project.title);
        setImage(project.image);
        setLive(project.live);
        setGithub(project.github);
        setAbout(project.about);
    }

    useEffect(() => {
        if (id) {
            getProjectDetails()
        }
    }, [])

    useEffect(() => {
        if (project) {
            setProjectValues();
        }
    }, [project]);

    return (
        <div className='mainContact'>
            <div className='contactContainer'>
                <div className='mt-5'>
                    <h1 className='text-center bg-info p-2'>{id ? 'Edit' : 'Add'} Project</h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter image link" value={image} onChange={(e) => setImage(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter live link" value={live} onChange={(e) => setLive(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter github link" value={github} onChange={(e) => setGithub(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control as="textarea" style={{ height: "100px" }} type="text" placeholder="Enter about the project" value={about} onChange={(e) => setAbout(e.target.value)} required />
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

export default AddProject
