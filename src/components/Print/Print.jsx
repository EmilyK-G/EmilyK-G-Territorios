import React from 'react';
import "./Print.css";
import TableCartas from './Tables/TableCartas';
import TableTelefono from './Tables/TableTelefono';

function Print() {
  return (
    <div className="print_bgr">
        <TableCartas/>
        <TableTelefono/>
    </div>
  )
}

export default Print