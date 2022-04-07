import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db  from '../../../firebase';
import "./TableCartas.css";

function TableCartas() {
    const [territorio, setTerritorio] = useState([])
    

    useEffect(() => {
        const q = query(collection(db, "Addresses"), where("Territory", "==", "2"));
        onSnapshot(q, (querySnapshot) => {
            const addresses = [];
            querySnapshot.forEach((doc) => {
                addresses.push(doc.data());
            });
            setTerritorio(addresses);
            });
    }, [])
    
    function rowMaker(house, i) {
        const residentsName = [];
        house.Resident.map((res)=>(
            residentsName.push(res.Name)
        ))
        
        return (
            <>
            <tr key={i}>
                <td rowSpan={residentsName.length === 1 ? residentsName.length : residentsName.length + 1}>{house.Street}</td>
                <td>{residentsName[0] ? residentsName[0] : ""}</td>
                <td> </td>
            </tr>
            {residentsName.length > 1 ? 
                residentsName.map((res, i)=>{
                    return <tr key={i}>
                        <td>{res}</td>
                        <td> </td>
                    </tr>
                }) : null}
            </>
        )
    }

  return (
    <div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th colSpan={3}>Territorio # 11 -Cartas</th>
                </tr>
                <tr>
                    <th>Dirección</th>
                    <th>Residente</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {territorio.map((house, i) => rowMaker(house, i))}
            </tbody>
        </table>
    </div>
  )
}

export default TableCartas