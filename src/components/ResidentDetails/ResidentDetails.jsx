import { limit } from 'firebase/firestore';
import React, {useState} from 'react';
import './ResidentDetails.css';
function ResidentDetails(props) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("No name");
  const [disabled, setDisabled] = useState(false)
  // const [phoneAdded, setPhoneAdded] = useState(false);
  const [addResident, setAddResident] = useState(false);
  

  function handleAddPhone() {
    props.setPhoneArray([...props.phoneArray, phone]);
    setPhone("");
  }
  
  
  function handleAddResidentClick() {
    //sending Resident Array to resident state on parent component
    props.setNewResArray(prev => ([...prev, { Name: name, Phone: props.phoneArray}])); 
    setName("No name");
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
            onChange={(e)=> setName(e.target.value)}
            placeholder="Ex. Juan Perez"
            autoFocus
            onKeyPress={(e)=> handleEnterKey(e)}
            onFocus={()=> setAddResident(false)}/>

          <label htmlFor="formPhoneNumber">Phone Number</label>
          <ul className="list-group">{props.phoneArray.map((phos, i)=>{return <li className={"list-group-item"} key={i}>{phos}</li>})}</ul>{/*shows to user the phones added for the specific resident*/}
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control add_phone_js" 
              name="PhoneNumber" 
              value={phone}
              id="formPhoneNumber" 
              onKeyPress={(e)=> handleEnterKey(e)}
              onChange={(e)=> setPhone(e.target.value)}
              placeholder="Ex. 5161234567" 
              disabled={addResident}/>
              <div className="input-group-append">
                <button 
                  className="btn btn-secondary" 
                  type="button" 
                  id="button-addon2"
                  onClick={()=>{handleAddPhone()}}>+</button>
              </div>
          </div>
        </div>
        {addResident ? 
          <div className="alert alert-success">You added a resident!</div> :
            <div className="col-auto my-1">
              <button 
                className="btn btn-primary" 
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