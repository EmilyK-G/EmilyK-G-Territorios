import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import "./Print.css";
import TableCartas from './Tables/TableCartas';
import TableTelefono from './Tables/TableTelefono';

function Print(props) {
  const cartasRef = useRef();
  const telefonosRef = useRef();
  const terrSelected = props.terrSelected;
  return (
    <>
    {terrSelected === "" ? 
      <div>
        <h3> Please Select a Territory </h3>
      </div>
      : 
      <div className="print_bgr d-flex flex-column">
          <ReactToPrint
            trigger={() => <button className="btn btn-dark btn-sm justify-content-end">Print</button>}
            content={() => cartasRef.current}
          />
          <TableCartas ref={cartasRef} terrSelected={terrSelected}/>
          <ReactToPrint
            trigger={() => <button className="btn btn-dark btn-sm justify-content-end">Print</button>}
            content={() => telefonosRef.current}
          />
          <TableTelefono ref={telefonosRef} terrSelected={terrSelected}/>
      </div>}
    
    </>
  ) 
}

export default Print