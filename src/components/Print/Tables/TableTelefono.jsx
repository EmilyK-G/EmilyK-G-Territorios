import React, { forwardRef } from 'react';
import "./TableCartas.css";


const TableTelefono = forwardRef((props, telefonosRef)=>{
    
    
    function rowMaker(house, i) {
        const people = house.Resident;
        return (
            <>
            <tr key={i}><td colSpan={6} className="street_print">{house.House} {house.Street}</td></tr>
            { people.length > 0 ? 
                people.map((per, ii)=>{
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
                        <th colSpan={6}>Territorio # {props.terrSelected} -Teléfono</th>
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
                    {props.territorio.map((house, i) => rowMaker(house, i))}
                </tbody>
            </table>
        </div>
      )
})

export default TableTelefono