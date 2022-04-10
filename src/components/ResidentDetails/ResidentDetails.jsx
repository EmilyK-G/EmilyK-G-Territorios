import React, {useState, useEffect} from 'react';
import './ResidentDetails.css';
function ResidentDetails(props) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [addResident, setAddResident] = useState(false);
  
  //From Resident.jsx
  const setPhoneArray = props.setPhoneArray;
  const toBeEdited = props.toBeEdited;
  
  useEffect(() => {
    if(toBeEdited.Name){
      setName(toBeEdited.Name);
      setPhoneArray(toBeEdited.Phone);
      setAddResident(false)
    } else {
      console.log(toBeEdited);
    }
  }, [toBeEdited, setPhoneArray])
  
  
  function handleAddPhone() {
    //From Resident.jsx
    props.setPhoneArray([...props.phoneArray, phone]);
    setPhone("");
  }
  
  
  function handleAddResidentClick() {
    //sending all Name and Phone Arrays to newResArray state on Resident.jsx
    props.setNewResArray(prev => ([...prev, { Name: name, Phone: props.phoneArray}])); 
    setName("");
    setPhone("");
    props.setPhoneArray([]);
  }

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  return (
      <div className="resident_details_bgr mt-4 p-1">
        
        <div className="form-group resident_details_body">
          <label htmlFor="formResidentName">Resident Name</label>
          <input 
            type="text" 
            className="form-control add_name_js" 
            name="ResidentName" 
            id="formResidentName" 
            value={name} 
            //User's Name input displayed on ResidentsCard
            onChange={(e)=> setName(e.target.value)}
            placeholder="Ex. Juan Perez"
            autoFocus
            onKeyPress={(e)=> handleEnterKey(e)}
            onFocus={()=> setAddResident(false)}/>

          <label htmlFor="formPhoneNumber" className="phone_number_label">Phone Number</label>
          <ul className="list-group">{props.phoneArray.map((phos, i)=>{return <li className={"list-group-item"} key={i}>{phos}</li>})}</ul>{/*shows to user the phones added for the specific resident*/}
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control add_phone_js" 
              name="PhoneNumber" 
              value={phone}
              id="formPhoneNumber" 
              onKeyPress={(e)=> handleEnterKey(e)}
              //User's Phone input to phone state --TO BE ENTERED (not dysplayed on ResidentsCard)
              onChange={(e)=> setPhone(e.target.value)}
              placeholder="Ex. 5161234567" 
              disabled={addResident}/>
              <div className="input-group-append">
                <button 
                  className="btn btn-primary" 
                  type="button" 
                  id="button-addon2"
                  //Entering phone to PhoneArray state on  Resident.jsx to be displayed on ResidentsCard
                  onClick={()=>{handleAddPhone()}}>Save</button>
              </div>
          </div>
        </div>
        {addResident ? 
          <div className="alert alert-success">You added a resident!</div> :
            <div className="col-auto my-1">
              <button 
                className="btn btn-outline-light" 
                type="button" onClick={(e) => {
                    e.preventDefault()
                    handleAddResidentClick()
                    setAddResident(true)
                }}>
                    Add Resident
              </button>
            </div> }
        
      </div>
  )
}

export default ResidentDetails