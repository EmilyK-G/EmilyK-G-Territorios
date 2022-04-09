import React, {useState, useEffect, forwardRef } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db  from '../../../firebase';


const TableTelefono = forwardRef((props, telefonosRef)=>{
    const [territorio, setTerritorio] = useState([])
    const terrSelected = props.terrSelected;

    useEffect(() => {
        const q = query(collection(db, "Addresses"), where("Territory", "==", `${terrSelected}`));
        onSnapshot(q, (querySnapshot) => {
            const people = [];
            querySnapshot.forEach((doc) => {
                people.push(doc.data().Resident);
            });
            setTerritorio(people);
            });
    }, [terrSelected])
    

    function rowMaker(ppl, i) {
        return <>
        { ppl.length > 0 ?
            ppl.map((per)=>{
                if(per.Phone.length > 0){
                    const phoneShift = per.Phone.shift();
                    return <>
                    <tr key={i}>
                        <td rowSpan={per.Phone.length === 1 ? per.Phone.length : per.Phone.length + 1}>{per.Name}</td>
                        <td>{per.Phone[0] ? phoneShift : ""}</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    {per.Phone.length > 1 ? 
                        per.Phone.map((phn, ii)=>{
                            return <tr key={ii}>
                                <td>{phn}</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        }) : console.log(per.Phone.length)}
                    </>
                } else {return null}
            }) : null
        }
        </>
    }
  return (
    <div>
        <table className="table table-bordered" ref={telefonosRef}>
            <thead>
                <tr>
                    <th colSpan={6}>Territorio # {terrSelected} -Teléfonos</th>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>1ra Llamada</th>
                    <th>2da Llamada</th>
                    <th>3ra Llamada</th>
                    <th>4ta Llamada</th>
                </tr>
            </thead>
            <tbody>
                {territorio.length > 0 && (territorio.map((ppl, i) => rowMaker(ppl, i)))}
            </tbody>
        </table>
    </div>
  )
})

export default TableTelefono