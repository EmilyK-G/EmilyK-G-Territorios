import React, { forwardRef, useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db  from '../../../firebase';
import "./TableCartas.css";


const TableTelefonoTest = forwardRef((props, telefonosRef)=>{
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
        const people = house.Resident;
        return (
            <>
            <tr key={i}><td colSpan={6} className="street_print">{house.House} {house.Street}</td></tr>
            { people.length > 0 ? 
                people.map((per, ii)=>{
                    console.log(per);
                    if(per.Phone.length > 0){
                       
                        return <>
                            <tr key={ii}> 
                                <td rowSpan={per.Phone.length === 1 ? per.Phone.length : per.Phone.length + 1}>{per.Name}</td>
                                {per.Phone.length === 1 ? 
                                    <>
                                    <td>{per.Phone[0]}</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td></> : null}
                            </tr>
                            {per.Phone.length > 1 ? 
                                per.Phone.map((phn, iii)=>{
                                    return <tr key={iii}>
                                        <td>{phn}</td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                            }) : null}
                        </>
                    } else {return null}
                
                }) : null
            }
            </>
        )
    }

    return (
        <div>
            <table className="table table-bordered" ref={telefonosRef}>
                <thead>
                    <tr>
                        <th colSpan={6}>Territorio # {terrSelected} -Teléfono Test</th>
                    </tr>
                    <tr>
                        <th>Residente</th>
                        <th>Número</th>
                        <th>1ra Llamada</th>
                        <th>2ra Llamada</th>
                        <th>3ra Llamada</th>
                        <th>4ra Llamada</th>
                    </tr>
                </thead>
                <tbody>
                    {territorio.map((house, i) => rowMaker(house, i))}
                </tbody>
            </table>
        </div>
      )
})

export default TableTelefonoTest