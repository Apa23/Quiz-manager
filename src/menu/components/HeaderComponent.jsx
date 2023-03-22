import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import '../../styles/header.css'

export const HeaderComponent = () => {
  const info = useSelector((state) => state.auth);

  return (
    <Row className='header'>
      <Row className='header-content'>
        <Col className='header-title'>
          <h1>Quiz Manager System</h1>
        </Col>
        <Col className='header-user'>
          <h2>Welcome, <b>{info.name}</b></h2>
          <FontAwesomeIcon
            icon={faBars}
            className={"user-menu"}
          />
        </Col>
      </Row>
      <Row className='header-margin'></Row>
    </Row>
  )
}
