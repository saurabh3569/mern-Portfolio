import axios from 'axios'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Btn from './Btn'

const ProjectCard = ({ data }) => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handleDelete = async (id) => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios.delete(`/projects/${id}`, config)
            toast.success(data)
        } catch (error) {
            toast.warn(error.response.data)
        }
    }

    const handleEdit = async (id) => {
        navigate(`/editproject/${id}`)
    }

    return (
        <Card className='m-2' style={{ width: '18rem' }} key={data._id}>
            {token &&
                <Row className='justify-content-between'>
                    <Button variant="light" className='w-25' onClick={() => handleDelete(data._id)}><i className="fa-solid fa-trash text-danger"></i></Button>
                    <Button variant="light" className='w-25' onClick={() => handleEdit(data._id)}><i className="fa-solid fa-pen-to-square text-primary"></i></Button>
                </Row>}
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.about}
                </Card.Text>
                <Row className='d-flex justify-content-around'>
                    {data.live &&
                        <Col>
                            <Btn variant='outline-primary' link={data.live} name='Live' />
                        </Col>}
                    <Col>
                        <Btn variant='outline-primary' link={data.github} name='Github' />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
