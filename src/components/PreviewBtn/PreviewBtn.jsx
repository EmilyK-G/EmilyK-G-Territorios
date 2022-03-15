import React from 'react';
import ResidentsCard from '../ResidentsCard/ResidentsCard';
import './PreviewBtn.css';

function PreviewBtn(props) {
  
  return (
    <div className="form-goup preview_div_js">
        {(props.newResArray.length >= 1 ? <p>Residents of {props.house} {props.street}</p> : `No new residents`)}
        {props.newResArray.map((res, i)=>(
          <ResidentsCard res={res} house={props.house} street={props.street} index={i} newResArray={props.newResArray} phoneArray={props.phoneArray}/>
        ))}
    </div>
  )
}

export default PreviewBtn