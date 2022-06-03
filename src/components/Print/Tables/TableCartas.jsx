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
        
        return (
            <>
            <tr key={i}>
                <td rowSpan={residentsName.length === 1 ? residentsName.length : residentsName.length + 1}>{house.House} {house.Street}</td>
                {residentsName.length === 1 ?
                <><td>{residentsName[0]}</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td></> : null}
            </tr>
            {residentsName.length > 1 ? 
                residentsName.map((res, ii)=>{
                    return <tr key={ii}>
                        <td>{res}</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
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
                        <th colSpan={6}>Territorio # {terrSelected} -Cartas</th>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                        <th>Residente</th>
                        <th>1ra Carta</th>
                        <th>2ra Carta</th>
                        <th>3ra Carta</th>
                        <th>4ta Carta</th>
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