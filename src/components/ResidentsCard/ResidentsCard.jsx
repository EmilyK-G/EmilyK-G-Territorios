import React, { useState } from 'react';
import './ResidentsCard.css';

function ResidentsCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);
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
  return (
    <div className="card text-white bg-info mb-3" key={props.index}>
        <div className="card-header">{name()}</div>
            <div className="class-body">

                <p className="card-title resident_card_address">{props.house} {props.street}</p>
                <p className="phone_card_p">Phone #:</p>
                {phone()}
            <button 
                type="button" 
                className={"btn btn-danger" + (isDeleted ? " disabled" : "")} 
                onClick={() => {setIsDeleted(true); props.newResArray.splice(props.index, 1)}}>
                    {(isDeleted ? "Deleted" : "Delete")}</button>
        </div>
    </div>
  )
}

export default ResidentsCard