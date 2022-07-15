import React from 'react';
import { colRef } from '../../../firebase';
import { addDoc } from 'firebase/firestore';
import { Modal } from 'react-bootstrap';

function LaunchModal(props) {
    const setPreview = props.setPreview;
    const newResArray = props.newResArray;
    const setNewResArray = props.setNewResArray;
    const house = props.house;
    const setHouse = props.setHouse;
    const setAddResident = props.setAddResident;
    const setAddHouseAlert = props.setAddHouseAlert;
    const setModal = props.setModal;
    const modal = props.modal;
    const residents = {
        Street: "",
        Resident: [],
        House: "",
        Territory: ""
    };

    function handleSubmitClick() {
        residents.Street = props.street; //from App.js
        residents.House = document.querySelector('.add_house_js').value;
        residents.Resident = newResArray;
        residents.Territory = props.terrSelected;
        addDoc(colRef, residents)
        .then(() => {
          document.querySelector('.resident_form_js').reset();
          setNewResArray([]);
        })
        .catch(e => console.log(e.message));
        setAddHouseAlert(false);
        setHouse("")
        alert('You added a new house!')
    }
  return (
    <Modal show={modal}>
        <Modal.Header>
            <Modal.Title>
                Think about it...
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Do you want to add</p> 
            <ol>{newResArray.map((res)=><li>{res.Name}</li>)}</ol> 
            <p>to the {house} of {props.street}?</p>
        </Modal.Body>
        <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={()=>setModal(false)}>Wait a sec...</button>
            <button
                className="btn btn-success" 
                type="submit" 
                onClick={(e) => {
                    e.preventDefault()
                    handleSubmitClick()
                    setModal(false)
                    setAddResident(false)
                    setPreview(false)
                }}>Yes!</button>
        </Modal.Footer>
    </Modal>     

  )
}

export default LaunchModal