import React from 'react';
import "./Street.css";

function Street(props) {

    // useEffect(()=>{
    //     console.log(props.territorio)
    // },[props.territorio])

  return (
    <>
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto my-1">
                <label className="mr-sm-2">Street</label>
                <select className="form-control select_street_js" onChange={e => props.setStreet(e.target.value)}>
                    <option value="Select street" defaultValue >Select Street</option>
                    {props.territorio.map((str, i) => {
                        return <option value={`${str}. Uniondale, NY 11550`} key={i}>{str}</option>
                    })}
                </select>
                </div>
            </div>
        </form>
    </>
  )
}

export default Street