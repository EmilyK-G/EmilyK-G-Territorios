import React from 'react';
import { Alert } from 'react-bootstrap';
import './SuccessAlert.css'

function SuccessAlert(props) {
  const showAlert = props.showAlert;

  return (
    <Alert show={showAlert} variant='success'>New house created!</Alert>
  )
}

export default SuccessAlert