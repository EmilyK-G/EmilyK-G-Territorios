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

  return (
    <div className="card text-white bg-info mb-3" key={props.index}>
        <div className="card-header">{name()}</div>
            <div className="class-body">

                <p className="card-title">{props.house} {props.street}</p>
                <p className="card-text">{props.res.Phone}</p>
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