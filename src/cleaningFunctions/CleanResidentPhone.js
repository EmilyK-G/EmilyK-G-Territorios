//Use this button "<button className="btn btn-small small btn-secondary" onClick={()=>cleanResidentPhone()}>Clean</button>"
function cleanResidentPhone() {
    const q = query(colRef, where("Territory", "==", `14`))
    onSnapshot(q, (querySnapshot) => {
      const addresses = [];
      querySnapshot.forEach((doc) => {
          addresses.push(doc.data().Resident);
      });
      
      addresses.forEach(per => per.forEach(ppl => {
        if(ppl.Phone === '5163032787'){
          console.log(`${ppl.Phone} belongs to ${ppl.Name}`)
      } }
      ))
      //Look for "5163032787 belongs to Julio Sarmiento"
      });
     
  }