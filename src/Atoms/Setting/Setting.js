import React from 'react'
import './Setting.css';
import { Accordion, ListGroup } from 'react-bootstrap';
import { RxPerson } from 'react-icons/rx';
import { BiMoon } from 'react-icons/bi';
import { TbLanguage } from 'react-icons/tb';
import { TfiWorld } from 'react-icons/tfi';
import { FaRegKeyboard } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import {FiHelpCircle} from 'react-icons/fi';
import { MdOutlineFeedback } from 'react-icons/md';
import { MdOutlineRemoveModerator } from 'react-icons/md';

const Setting = () => {
  return (
    <ul className='setting m-0 p-0'>
        <ListGroup>
      <ListGroup.Item>
          <span>
            <RxPerson />
          </span>
          <span>
          Your data in YouTube
          </span>
      </ListGroup.Item>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span>
          <BiMoon />
          </span>
          <span>
          Appearance: Device theme
          </span>
          </Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span>
            <TbLanguage />
          </span>
          <span>
          Language: English
          </span>
          </Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span>
          <MdOutlineRemoveModerator />
          </span>
          <span>
          Restricted Mode: Off
          </span>
          </Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <span>
            <TfiWorld />
          </span>
          <span>
          Location: Egypt
          </span>
          </Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <ListGroup.Item className='keyboard'>
          <span>
            <FaRegKeyboard />
          </span>
          <span>
            Keyboard
          </span>
      </ListGroup.Item>
    <ListGroup.Item className='item-setting'>
          <span>
            <AiOutlineSetting />
          </span>
          <span>
            Settings
          </span>
      </ListGroup.Item>
      <ListGroup.Item>
          <span>
            <FiHelpCircle />
          </span>
          <span>
            Help
          </span>
      </ListGroup.Item>
      <ListGroup.Item>
          <span>
            <MdOutlineFeedback />
          </span>
          <span>
            Send feedback
          </span>
      </ListGroup.Item>
      </ListGroup>
    </ul>
  )
}

export default Setting