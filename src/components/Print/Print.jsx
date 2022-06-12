import React, { useRef, useEffect, useState } from 'react';
import { query, where, onSnapshot } from "firebase/firestore";
import { colRef } from '../../firebase';
//import { doc, setDoc } from "firebase/firestore"
import ReactToPrint from 'react-to-print';
import "./Print.css";
import TableCartas from './Tables/TableCartas';
import TableTelefono from './Tables/TableTelefono';

function Print(props) {
  const cartasRef = useRef();
  const telefonosRef = useRef();
  const terrSelected = props.terrSelected;
  const [territorio, setTerritorio] = useState([])
  

  useEffect(() => {
      const q = query(colRef, where("Territory", "==", `${terrSelected}`));
      onSnapshot(q, (querySnapshot) => {
          const addresses = [];
          querySnapshot.forEach((doc) => {
              addresses.push(doc.data());
          });
          setTerritorio(addresses);
          });
  }, [terrSelected])

  function mergeDuplicates() {
    const duplicates = [];
    const map = new Map();
    for(let i=0; i<territorio.length; i++){
      const fullAddress = `${territorio[i].House} ${territorio[i].Street}`;
      if(map.has(fullAddress)){
        duplicates.push(fullAddress)
      }
      map.set(fullAddress, i)
    }
    console.log(duplicates)
  }

  return (
    <>
    {terrSelected === "" ? 
      <div>
        <h3> Please Select a Territory </h3>
      </div>
      : 
      <div className="print_bgr d-flex flex-column">
        
          <div className="ml-auto pb-2 d-flex justify-content-end">
            <button className="btn btn-small small btn-secondary" onClick={()=>mergeDuplicates()}>Merge duplicates</button>
          </div>
          <ReactToPrint
            trigger={() => <button className="btn btn-success btn-sm justify-content-end">Print</button>}
            content={() => cartasRef.current}
          />
          <TableCartas ref={cartasRef} terrSelected={terrSelected} territorio={territorio}/>
          <ReactToPrint
            trigger={() => <button className="btn btn-success btn-sm justify-content-end">Print</button>}
            content={() => telefonosRef.current}
          />
          <TableTelefono ref={telefonosRef} terrSelected={terrSelected} territorio={territorio}/>
      </div>}
    
    </>
  ) 
}

export default Print