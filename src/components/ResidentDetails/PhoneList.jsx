import React, {useState} from 'react'

function PhoneList(props) {
  const [phoneDeleted, setPhoneDeleted] = useState(false);

  function handlePhoneDelete(){
    props.phoneArray.splice(props.idx, 1, "")
  }

  return (
        <li className={"list-group-item d-flex justify-content-between align-items-center"} key={props.idx}>
          {props.pho}
          <span className={"badge" + (phoneDeleted ? " deleted_badge" : " active_badge")} 
                onClick={()=>{ 
                    setPhoneDeleted(true)
                    handlePhoneDelete();
                    }}
                >{phoneDeleted ? "Deleted" : "-"}</span>
        </li>
  )
}

export default PhoneList