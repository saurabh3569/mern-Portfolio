import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Btn from '../components/Btn'
import Loader from '../components/Loader'
import ProjectCard from '../components/ProjectCard'
import './style.css'

const Project = () => {

  const [projects, setProjects] = useState()

  const getallProjects = async () => {
    try {
      const { data } = await axios.get('/projects')
      setProjects(data)
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getallProjects()
  }, [projects])


  return (
    <div className='mainProject'>
      <h1 className='text-center text-white'>Projects</h1>
      <div className='text-center'>
        <Btn variant='outline-warning' link='https://github.com/saurabh3569?tab=repositories' name='More Projects' />
      </div>
      {projects ? <Container className='p-2'>
        <Row className='justify-content-center '>
          {projects?.map((data) => (
            <ProjectCard key={data._id} data={data} />
          ))}
        </Row>
      </ Container>
        : <Loader />}
    </div>
  )
}

export default Project
