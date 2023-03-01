import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import Loader from '../components/Loader'
import Btn from '../components/Btn'
import Accounts from '../components/Accounts'

const About = () => {

  const [data, setData] = useState()


  const getDetails = async () => {
    try {
      const { data } = await axios.get('/about')
      setData(data);
    } catch (error) {
      console.log(error.response.data)
    }
  }



  useEffect(() => {
    getDetails()
  }, [data])


  return (
    <div className='aboutMain'>
      {data ? <Container>
        <h1 className='text-center text-light'>About Me</h1>
        <Row className=''>
          <Col>
            <div className="abouth">
              <h5 >{data.about}</h5>

              <Btn cn='w-100' variant='outline-light' link={data.resume} name='See My Resume' />
            </div>
          </Col>
          <Col>
            <h1 className='text-light text-center mt-2'>Skills</h1>
            <div className='skillList'>
              {data.skills.map((data, key) => (
                <li className='skillListData' key={key}>{data}</li>
              ))}
            </div>
          </Col>
        </Row>
        <p className='text-center text-light mt-5'>Follow Me</p>
        <Accounts />
      </Container>
        : <Loader />}
    </div>
  )
}

export default About
