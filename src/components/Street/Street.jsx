import React, {useState, useEffect, useMemo} from 'react';
import "./Street.css";

function Street(props) {
    const [city, setCity] = useState("");

    const strName = props.strName;
    const setStreet = props.setStreet;
    const cities = useMemo(()=>{
        return ["Uniondale, NY 11553", "Hempstead, NY 11550", "East Meadow, NY 11554", "Merrick, NY 11566", "Bellmore, NY 11710"]; 
    }, [])
    
    useEffect(()=>{
        setStreet(`${strName}. ${cities[city]}`)
    },[strName, city, cities, setStreet])
  return (
    <>
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto my-1">
                <label htmlFor="street" className="mr-sm-2">Street</label>
                <select className="form-control select_street_js" onChange={e => props.setStrName(e.target.value)}>
                    <option value="Select street" defaultValue >Select Street</option>
                    {props.territorio.map((str, i) => {
                        return <option value={str} key={i}>{str}</option>
                    })}
                </select>
                <label htmlFor="city" className="mr-sm-2">City</label>
                <select className="form-control" onChange={e => setCity(e.target.value)}>
                    <option defaultValue >Select City</option>
                    {cities.map((cty, i)=>{
                        return <option value={i} key={i}>{cty}</option>
                    })}
                </select>
                </div>
            </div>
        </form>
    </>
  )
}

export default Street