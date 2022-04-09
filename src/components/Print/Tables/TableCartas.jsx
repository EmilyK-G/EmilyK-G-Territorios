import React, { forwardRef, useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db  from '../../../firebase';
import "./TableCartas.css";



const TableCartas = forwardRef((props, cartasRef)=>{
    const [territorio, setTerritorio] = useState([])
    const terrSelected = props.terrSelected;

    useEffect(() => {
        const q = query(collection(db, "Addresses"), where("Territory", "==", `${terrSelected}`));
        onSnapshot(q, (querySnapshot) => {
            const addresses = [];
            querySnapshot.forEach((doc) => {
                addresses.push(doc.data());
            });
            setTerritorio(addresses);
            });
    }, [terrSelected])
    
    function rowMaker(house, i) {
        const residentsName = [];
        house.Resident.map((res)=>(
            residentsName.push(res.Name)
        ))
        const residentsShift = residentsName.shift();
        
        return (
            <>
            <tr key={i}>
                <td rowSpan={residentsName.length === 1 ? residentsName.length : residentsName.length + 1}>{house.Street}</td>
                <td>{residentsName[0] ? residentsShift : ""}</td>
                <td> </td>
            </tr>
            {residentsName.length > 1 ? 
                residentsName.map((res)=>{
                    return <tr>
                        <td>{res}</td>
                        <td> </td>
                    </tr>
                }) : null}
            </>
        )
    }

    return (
        <div>
            <table className="table table-bordered" ref={cartasRef}>
                <thead>
                    <tr>
                        <th colSpan={3}>Territorio # {terrSelected} -Cartas</th>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                        <th>Residente</th>
                        <th>Fecha de envío</th>
                    </tr>
                </thead>
                <tbody>
                    {territorio.map((house, i) => rowMaker(house, i))}
                </tbody>
            </table>
        </div>
      )
})

export default TableCartas