import React from 'react'

function ResidentDetails(props) {
  
  function handleAddResidentClick() {
    const name = document.querySelector('.add_name_js').value;
    const phone = document.querySelector('.add_phone_js').value;
    
    //sending Resident Array to resident state on parent component
    props.newResArray.push({Name: name, Phone: phone});
  }
  return (
      <>
        <div>ResidentDetails</div>
        
        <div className="form-group">
          <label htmlFor="formResidentName">Resident Name</label>
          <input 
            type="text" 
            //value={residents.Name} 
            //onChange={e => setResArray({...resArray, Name: e.target.value})} 
            className="form-control add_name_js" 
            name="ResidentName" 
            id="formResidentName" 
            placeholder="Ex. Juan Perez"/>
        </div>
        <div className="form-group">
          <label htmlFor="formPhoneNumber">Phone Number</label>
          <input 
            type="text" 
            //value={residents.Resident.Phone[1]}
            //onChange={e => setResArray({...resArray, Phone: e.target.value})}
            className="form-control add_phone_js" 
            name="PhoneNumber" 
            id="formPhoneNumber" 
            placeholder="Ex. 5162222222"/>
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
      </>
  )
}

export default ResidentDetails