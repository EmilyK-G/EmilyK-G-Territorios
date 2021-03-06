import React from 'react';
import ResidentsCard from '../ResidentsCard/ResidentsCard';
import './PreviewBtn.css';

function PreviewBtn(props) {
  //Handles ResArray and map through every resident object containing their name and phone #'s
  return (
    <div className="form-goup preview_div_js">
        {(props.newResArray.length >= 1 ? <p className="previewBtn_description_p">Residents of {props.house} {props.street}</p> : `No new residents`)}
        {props.newResArray.map((res, i)=>(
          <ResidentsCard 
            res={res} 
            house={props.house} 
            street={props.street} 
            index={i} 
            newResArray={props.newResArray} 
            setIsSpliced={props.setIsSpliced} 
            setToBeEdited={props.setToBeEdited}
            setAddResident={props.setAddResident}/>
        ))}
    </div>
  )
}

export default PreviewBtn