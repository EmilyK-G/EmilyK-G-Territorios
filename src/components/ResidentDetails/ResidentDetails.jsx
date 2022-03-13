import React from 'react';
import './ResidentDetails.css';
function ResidentDetails(props) {
  
  function handleAddResidentClick() {
    const name = document.querySelector('.add_name_js').value;
    const phone = document.querySelector('.add_phone_js').value;
    
    //sending Resident Array to resident state on parent component
    props.setNewResArray(prev => ([...prev, { Name: name, Phone: phone}]));
    document.querySelector('.add_name_js').value = "";
    document.querySelector('.add_phone_js').value = "";
  }
  return (
      <div className="resident_details_bgr mt-4 p-1">
        <div className="resident_details_title">Resident Details</div>
        
        <div className="form-group resident_details_body">
          <label htmlFor="formResidentName">Resident Name</label>
          <input 
            type="text" 
            className="form-control add_name_js" 
            name="ResidentName" 
            id="formResidentName" 
            placeholder="Ex. Juan Perez"
            autoFocus/>

          <label htmlFor="formPhoneNumber">Phone Number</label>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control add_phone_js" 
              name="PhoneNumber" 
              id="formPhoneNumber" 
              placeholder="Ex. 5161234567"/>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button" id="button-addon2">+</button>
              </div>
          </div>
        </div>

        <div className="col-auto my-1">
          <button 
            className="btn btn-primary" 
            type="button" onClick={(e) => {
                e.preventDefault()
                handleAddResidentClick()
            }}>
                Add Resident
            </button>
        </div>
      </div>
  )
}

export default ResidentDetails