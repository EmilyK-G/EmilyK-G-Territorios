import React, { useEffect, useState } from 'react'
import ResidentDetails from '../ResidentDetails/ResidentDetails';
import PreviewBtn from '../PreviewBtn/PreviewBtn';
import LaunchModal from './LaunchModal/LaunchModal';
import "./Resident.css";

function Resident(props) {
    const [preview, setPreview] = useState(false);
    const [newResArray, setNewResArray] = useState([]);
    const [house, setHouse] = useState("");
    const [addResident, setAddResident] = useState(false);
    const [phoneArray, setPhoneArray] = useState([]); //From Resident Details
    const [addHouseAlert, setAddHouseAlert] = useState(false);
    const [isSpliced, setIsSpliced] = useState(false);
    const [toBeEdited, setToBeEdited] = useState({}); //Name and Phone of the person beign edited. From ResidentsCard to ResidentDetails.
    const [keyPressed, setKeyPressed] = useState(false);
    const [modal, setModal] = useState(false);
    const street = props.street;
    const terrSelected = props.terrSelected;

    useEffect(() => {
      const newResJson = JSON.parse(localStorage.getItem('newResArray'));
      if (newResJson) {
        setNewResArray(newResJson)
      }
    }, [])
    
    useEffect(()=>{
        localStorage.setItem('newResArray', JSON.stringify(newResArray));
     }, [newResArray, isSpliced])
    
    function handleModalLaunch() {
      if(props.strName === ""){
        alert("Oops, your address is missing!")
      } else {
        setModal(true)
      }
    }

    function handleEnterKey(e) {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    }

    function handleKeyDown(e){
      if (e.key === "Delete" || e.key === "Backspace") {
        if (!keyPressed) { 
          e.preventDefault();
          alert("* Remember to save your current house before starting a new one *");
          setKeyPressed(true);
        }
      }
    }

  return (
      <>
        <form className="resident_form_js">
            <div className="form-group popover-dismiss">
              <label htmlFor="formHouseNumber">House Number</label>
              <input 
                type="text" 
                onChange={e => setHouse(e.target.value)} 
                className="form-control add_house_js" 
                name="HouseNumber" 
                id="formHouseNumber" 
                placeholder="Ex.000"
                onKeyPress={(e)=>handleEnterKey(e)}
                onKeyDown={(e)=>handleKeyDown(e)}
                required />
            </div>
            <div className="form-group">
              {addResident ? <ResidentDetails setNewResArray={setNewResArray} setPhoneArray={setPhoneArray} phoneArray={phoneArray} toBeEdited={toBeEdited} setToBeEdited={setToBeEdited} /> : 
                <div className="form-group col-auto my-1">
                  {addHouseAlert ? <p className="add_house_alert">Add a House Number</p> : ""}
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => {(house === "") ? setAddHouseAlert(true) : setAddResident(true)}}>
                      New Resident List
                  </button>
              </div>}  
            </div>
            {preview ? <PreviewBtn newResArray={newResArray} house={house} street={props.street} setIsSpliced={setIsSpliced} setToBeEdited={setToBeEdited} setAddResident={setAddResident} /> : "..." }
            <div className="col-auto my-1">
              <button 
                className={"btn" + (preview ? " btn-secondary" : " btn_preview")} 
                type="button" 
                onClick={(e) => {
                    e.preventDefault()
                    setPreview(!preview);
                }}>
                    {(preview ? "Close preview" : "Preview")}
                </button>
            </div>
            {newResArray.length > 0 && <div className="col-auto my-1">
              <button 
                type="submit"
                id="submitButton"
                className="btn btn-success"
                onClick={(e)=>{e.preventDefault(); handleModalLaunch()}}>Submit</button>
                {/* <!-- Modal --> */}
                <LaunchModal modal={modal} setModal={setModal} setPreview={setPreview} street={street} terrSelected={terrSelected} newResArray={newResArray} setNewResArray={setNewResArray} house={house} setHouse={setHouse} setAddResident={setAddResident} setAddHouseAlert={setAddHouseAlert}/>
            </div>}
        </form>
        <div className="d-flex justify-content-start mt-5">
          <button onClick={()=>props.setIsTerr(false)} className="btn btn-sm btn_back_link">Back to territorio</button>
        </div>
      </>
  )
}

export default Resident