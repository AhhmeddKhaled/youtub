import React from 'react';
import './Header.css';
import { Row, Col, Form } from 'react-bootstrap'
import {
  FaYoutube,
  FaMicrophone
} from 'react-icons/fa';
  import { FcMenu } from 'react-icons/fc'
  import { FiMoreVertical } from 'react-icons/fi'
import SignIn from '../../Atoms/SignIn/SignIn';
import { BsSearch } from 'react-icons/bs';
import Setting from '../../Atoms/Setting/Setting';
const Header = () => {
  return (
    <header className='mw-100'>
      <Row className=' justify-content-between '>
        <Col xs={2} className='header-menu d-flex align-items-center'>
          <button className='menu hover'>
            <FcMenu />
          </button>
          <button className='tub'>
            <FaYoutube />
          </button>
          <h2>
            YouTube <sup> EG </sup>
          </h2>
        </Col>
        <Col xs={6} className='search d-flex align-items-center'> 
          <div className='flex-grow-1'>
          <Form.Group xs={10} className="flex-grow-1" controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Search" />
          </Form.Group>
          <button>
            <BsSearch />
          </button>
          </div>
          <button xs={2} className='microphone hover'>
            <FaMicrophone />
          </button>
        </Col>
        <Col xs={2} className='more d-flex align-items-center justify-content-end'>
          <div>
          <button>
            <FiMoreVertical />
          </button>
          <Setting />
          </div>
          <SignIn />
        </Col>
      </Row>
    </header>
  )
}

export default Header