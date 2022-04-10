import React, { useState } from 'react';
import './ResidentsCard.css';

function ResidentsCard(props) {
  const[isDeleted, setIsDeleted] = useState(false);
  const[editing, setEditing] = useState(false);
  const name = () => {
    if (props.res.Name) {
      return props.res.Name;
    } else {
      return "--no-name--";
    }
  }
  const phone = () => {
    if (props.res.Phone) {
      const phones = props.res.Phone.map((pho, i)=>{
        return <li className="list-group-item" key={i}>{pho}</li>
      });
      return <ul className="list-group">{phones}</ul>
    } else {
      return <p className="card-text">--no-phone--</p>;
    }
  }

  function handleEditClick() {
    props.newResArray.splice(props.index, 1);
    setEditing(true)
  }
  return (
    <div className="card card_bgr mb-3" key={props.index}>
        <div className="card-header">{name()}</div>
            <div className="class-body">

                <p className="card-title resident_card_address">{props.house} {props.street}</p>
                <p className="phone_card_p">Phone #:</p>
                {phone()}
            <div className="d-flex justify-content-between">
              <button 
                  type="button" 
                  className={"btn btn-danger m-2" + (isDeleted ? " disabled" : "")} 
                  onClick={() => {
                    setIsDeleted(true); 
                    props.newResArray.splice(props.index, 1); 
                    props.setIsSpliced(true)}
                  }>
                      {(isDeleted ? "Deleted" : "Delete")}
              </button>
              <button 
                  type="button" 
                  className="btn btn-secondary m-2"
                  onClick={()=>{handleEditClick(); 
                                props.setToBeEdited({
                                  Name: props.res.Name, 
                                  Phone: props.res.Phone
                                })
                              }}>
                    Edit
              </button>
            </div>
        </div>
    </div>
  )
}

export default ResidentsCard