import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import "./Print.css";
import TableCartas from './Tables/TableCartas';
import TableTelefono from './Tables/TableTelefono';

function Print() {
  const cartasRef = useRef();
  const telefonosRef = useRef();

  return (
    <div className="print_bgr">
        <ReactToPrint
          trigger={() => <button className="btn btn-outline-primary btn-sm">Print</button>}
          content={() => cartasRef.current}
        />
        <TableCartas ref={cartasRef}/>
        <ReactToPrint
          trigger={() => <button className="btn btn-outline-primary btn-sm">Print</button>}
          content={() => telefonosRef.current}
        />
        <TableTelefono ref={telefonosRef}/>
    </div>
  ) 
}

export default Print