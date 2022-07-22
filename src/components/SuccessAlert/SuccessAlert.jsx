import React from 'react';
import { Alert } from 'react-bootstrap';

function SuccessAlert(props) {
  const showAlert = props.showAlert;

  return (
    <Alert show={showAlert} variant='success'>You added a new house!</Alert>
  )
}

export default SuccessAlert