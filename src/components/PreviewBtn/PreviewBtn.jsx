import React from 'react'

function PreviewBtn(props) {
   
  return (
    <div className="form-goup preview_div_js">
        <p>Button pressed</p>
        {console.log(props.newResArray)}
        { props.newResArray.map((res, i)=>{
          return (
            <div className="card text-white bg-info mb-3">
                <div className="card-header">{res.Name}</div>
                <div className="class-body">
                    <h5 className="card-title">{props.house} {props.street}</h5>
                    <p className="card-text" key={i}>{res.Name}</p>
                    <p className="card-text" key={i}>{res.Phone}</p>
                <button type="button" className="btn btn-danger">Delete</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PreviewBtn