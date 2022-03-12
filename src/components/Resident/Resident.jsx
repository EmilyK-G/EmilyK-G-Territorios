import React, { useEffect, useState } from 'react'
import { colRef } from '../../firebase';
import { 
    getDocs,
    addDoc
} from "firebase/firestore";
import ResidentDetails from '../ResidentDetails/ResidentDetails';
import PreviewBtn from '../PreviewBtn/PreviewBtn';

function Resident() {
    const [preview, setPreview] = useState(false);
    const [newResObj, setNewResObj] = useState({});
    const [newResArray, setNewResArray] = useState([])
    const [street, setStreet] = useState("New St");
    const [house, setHouse] = useState("");
    const [addResident, setAddResident] = useState(false);
    const residents = {
        Street: "Cedar St",
        Resident: [],
        House: "",
    };
    
    useEffect(()=>{
         //get collection data
         getDocs(colRef).then( (snapshot) => {
         let addresses = []
         snapshot.docs.forEach((doc)=> {
             addresses.push({ ...doc.data(), id: doc.id })
         })
         console.log(addresses)
         })
         .catch(err => {
            console.log(err.message)
         })
     }, [])
    
    function handleSubmitClick() {
      residents.House = document.querySelector('.add_house_js').value;
      residents.Resident = newResArray;
      addDoc(colRef, residents)
    }

  return (
      <>
        <form>
            <div className="form-group">
              <label htmlFor="formHouseNumber">House Number</label>
              <input 
                type="text" 
                //value={residents.House} 
                onChange={e => setHouse(e.target.value)} 
                className="form-control add_house_js" 
                name="HouseNumber" 
                id="formHouseNumber" 
                placeholder="Ex. 144"/>
            </div>
            <div className="form-group">
              {addResident ? <ResidentDetails setNewResArray={setNewResArray}/> : 
                <div className="form-group col-auto my-1">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => setAddResident(true)}>
                      Click to add Resident
                  </button>
              </div>}  
            </div>
            {preview ? <PreviewBtn newResArray={newResArray} house={house} street={street}/> : "..." }
            <div className="col-auto my-1">
              <button 
                className="btn btn-info" 
                type="button" 
                onClick={(e) => {
                    e.preventDefault()
                    setPreview(!preview);
                }}>
                    Preview
                </button>
            </div>
            <div className="col-auto my-1">
              <button 
                className="btn btn-success" 
                type="submit" 
                onClick={(e) => {
                    e.preventDefault()
                    handleSubmitClick()
                }}>
                    Submit form
                </button>
            </div>
        </form>
      </>
  )
}

export default Resident