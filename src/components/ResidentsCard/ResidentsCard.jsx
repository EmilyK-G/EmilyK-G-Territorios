import React, { useState } from 'react';
import './ResidentsCard.css';

function ResidentsCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <div className="card text-white bg-info mb-3" key={props.index}>
        <div className="card-header">{props.res.Name}</div>
            <div className="class-body">
                <h5 className="card-title">{props.house} {props.street}</h5>
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