import React, { forwardRef } from 'react';
import "./TableCartas.css";


const TableCartas = forwardRef((props, cartasRef)=>{
    
    
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
                        <th colSpan={6}>Territorio # {props.terrSelected} -Cartas</th>
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
                    {props.territorio.map((house, i) => rowMaker(house, i))}
                </tbody>
            </table>
        </div>
      )
})

export default TableCartas