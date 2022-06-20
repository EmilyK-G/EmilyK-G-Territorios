//Use this button "<button className="btn btn-small small btn-secondary" onClick={()=>cleanDuplicates()}>Clean</button>"
function cleanDuplicates() {
    const duplicates = [];
    const map = new Map();
    for(let i=0; i<territorio.length; i++){
      const fullAddress = `${territorio[i].House} ${territorio[i].Street}`;
      if(map.has(fullAddress)){
        duplicates.push(fullAddress)
      }
      map.set(fullAddress, i)
    }
    console.log(duplicates);
  }