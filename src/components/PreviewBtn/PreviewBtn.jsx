import React, { useEffect, useState } from 'react';
import ResidentsCard from '../ResidentsCard/ResidentsCard';
import './PreviewBtn.css';

function PreviewBtn(props) {
  
  return (
    <div className="form-goup preview_div_js">
        {(props.newResArray.length >= 1 ? `Residents of ${props.house} ${props.street}` : `Add new resident`)}
        {props.newResArray.map((res, i)=>(
          <ResidentsCard res={res} house={props.house} street={props.street} index={i} newResArray={props.newResArray}/>
        ))}
    </div>
  )
}

export default PreviewBtn