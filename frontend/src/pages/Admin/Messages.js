import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import '../style.css'

const Messages = () => {

    const [messages, setMessages] = useState()
    const token = localStorage.getItem('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const getMessages = async () => {
        
        try {
            const { data } = await axios.get('/contact', config)
            setMessages(data);
        } catch (error) {

        }
    }

    const handleDelete = async(id) => {
        try {
            const {data} = await axios.delete(`/contact/${id}`,config)
            toast.success(data)
        } catch (error) {
            toast.error(error.response.data)
        }
    }


    useEffect(() => {
        getMessages()
    }, [messages])

    return (
        <div className="messageMain">
            <h1 className='text-center text-white'>Messages</h1>
            <Container>
                {messages ? <Table responsive bordered size="sm">
                    <thead>
                        <tr className='text-warning'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((data, key) => (
                            <tr key={key} className='text-white'>
                                <td>{key + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.message}</td>
                                <td className='bg-danger' onClick={()=>handleDelete(data._id)}>DELETE</td>
                            </tr>))}
                    </tbody>
                </Table>
                :<Loader />}
            </Container>
        </div>
    )
}

export default Messages
