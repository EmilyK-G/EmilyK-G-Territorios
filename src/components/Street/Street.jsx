import React, {useState} from 'react';

function Street(props) {
    const streets_t11 = ["Bedford Ave", "Cedar St", "Mize Ct", "Marshall Ct", "Cooper Ct", "Uniondale Ave", "Hempstead Blvd", "Maple Ave", "Durya Ave", "Fenimore Ave", "Greengrove Ave"];
    
  return (
    <>
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto my-1">
                <label className="mr-sm-2">Street</label>
                <select className="form-control select_street_js" onChange={e => props.setStreet(e.target.value)}>
                    {streets_t11.map((str, i) => {
                        return <option key={i}>{str}</option>
                    })}
                </select>
                </div>
                <div className="col-auto my-1">
                </div>
            </div>
        </form>
    </>
  )
}

export default Street