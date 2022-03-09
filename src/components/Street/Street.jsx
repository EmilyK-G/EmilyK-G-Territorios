import React from 'react';
import { useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import db from '../../firebase';

function Street() {
    useEffect(()=>{
        // collection ref

        const colRef = collection(db, 'Addresses')

        //get collection data
        getDocs(colRef).then( (snapshot) => {
        let streets = []
        snapshot.docs.forEach((doc)=> {
            streets.push({ ...doc.data(), id: doc.id })
        })
        console.log(streets)
        }).catch(err => {
        console.log(err.message)
        })
    }, [])
  return (
    <>
            <div>Street</div>
            <form>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                    <label className="mr-sm-2">Preference</label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option defaultValue>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className="col-auto my-1">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                        <label className="custom-control-label">Remember my preference</label>
                    </div>
                    </div>
                    <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
  )
}

export default Street