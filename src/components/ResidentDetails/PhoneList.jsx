import React, {useState} from 'react'

function PhoneList(props) {
  const [phoneDeleted, setPhoneDeleted] = useState(false);

  function handlePhoneDelete(){
    props.phoneArray.splice(props.idx, 1, "");
    console.log('spliced');
  }

  return (
        <li className={"list-group-item d-flex justify-content-between align-items-center"} key={props.idx}>
          {props.pho}
          <span className={"badge" + (phoneDeleted ? " deleted_badge" : " active_badge")} 
                onClick={()=>{ 
                    setPhoneDeleted(true)
                    handlePhoneDelete(props.idx);
                    }}
                >{phoneDeleted ? "Deleted" : "-"}</span>
        </li>
  )
}

export default PhoneList