import React from 'react';
import "./Territorios.css";


function Territorios(props) {
    //use a useRef(?) to store all the streets
    const terrObj = {
        T1:  ["Walton Ave", "Gilroy Ave", "Pembrooke St", "Cambria St", "Menard St", "Lyndy Pl", "Cuninham Ave", "Pem"],
        T2:  ["Uniondale Ave", "Baldwin Ct", "Gerald St", "Myron St", "Merillon St", "McKenna Pl", "Manor Pkwy", "Pembroke St", "Ruxton St", "Cornelius Ct", "Marvin Ave"],
        T3:  ["Uniondale Ave", "Newport Rd", "Maple Ave", "Greengrove Ave", "Fenimore Ave", "Lenox Ave", "California Ave", "Bedford Ct", "Bedford Ave", "Front St", "Braxton St"],
        T4:  ["Compass St", "Anchor Way", "Larboard Ct", "Narrows", "Galley St", "Admiral Ln", "Comodore Rd", "Front St","Warwick St", "Laclede Ave", "Arcadia Ave", "Pamlico Ave"],
        T5:  ["Tulsa St", "Ardwick Pl", "Manor Pkwy", "Braxton St", "Midland St", "Ruxton Pl", "New Jersey Ave", "New York Ave", "Fayette St", "Alcyon Pl", "Valcour Ave"],
        T6:  ["Pemaco Ln", "Leslie Ln", "Birch St", "Walnut St", "Compass St", "Henry St", "Maplegrove Ave", "Willow St", "Charles Pl", "Chester St"],
        T7:  ["Uniondale Ave", "Henry St", "Walter St", "First Pl", "Second Pl", "Emerson Pl", "Lowell Rd", "Salem Rd", "Lynn Ct", "Armond St"],
        T8:  ["Berkley St", "Chester St", "Woodbine St", "Sterling St", "Goodrich St", "Hempstead Blvd", "Locust St"],
        T9:  ["Uniondale Ave", "Clark Pl", "Jerusalem Ave", "Windsor Rd", "Liberty St", "Emerson St", "Ash Ct", "Tulip Ct", "Decatur St"],
        T10: ["Goodrich St", "Lafayette Ave", "Hmepstead Blvd", "Beck St", "Armond St", "Front St", "Newport Rd", "Terrel Pl", "Waverly PL", "Maple Ave", "Greengrove Ave", "Midwood St", "Webster Ave"],
        T11: ["Bedford Ave", "Cedar St", "Mize Ct", "Marshall Ct", "Cooper Ct", "Uniondale Ave", "Hempstead Blvd", "Maple Ave", "Durya Ave", "Fenimore Ave", "Greengrove Ave"],
        T12: ["Front St", "Fenimore Ave", "Midwood Ave", "Webster Ave", "Lenox Ave", "California Ave", "Bedford Ave", "Hawthorne Ave", "Clarendon Rd", "Cedar St", "Midwood St", "Webster Ave"],
        T13: ["Oak St", "Longman Pl", "Warren St", "Lawrence St", "Rhodes Ave", "Gertrude St", "Thomas St", "Shady St", "Westbury Blvd", "Hempstead Tpk", "Firview Blvd", "Surrey Ln", "Tower Ct", "Brickston Ct", "Witley Ct", "Ravere Ct", "Turnwood Ct", "Fulton Ave"],
        T14: ["Front St", "Cameron Ave", "Cornwall Ln", "Truro Ln", "Devon Rd", "Hendrickson Ave", "Elizabeth Ct", "Fulton Ave"],
        T15: ["Manor Ave", "Manor Ct", "Greenlawn Ct", "Mitchell Ct", "Lexington Cir", "Harriet Ave", "Myrtle Ave", "Westbury Blvd", "Fulton Ave", "Saratoga Cir", "Harvard St", "Meadowbrook Rd", "Kernochan Ave", "Courtenay Rd"],
        T16: ["Hamilton Rd", "Jane St", "Hope St", "Roger St", "Butler Pl", "Broadfield Rd", "Duncan Rd", "Primrose Ln", "Cherry Ln", "Rutland Rd", "Brower Ln", "Valentine Pl", "Beverly Rd", "Webster Ave", "Perry St"],
        T17: ["Holly Ave", "Carman St", "Spencer Pl", "Lucille St", "Cedar St", "Clermont Ave", "Lewis PL", "Ingreham Blvd", "Dikeman St", "Mitchell St", "St.Agnes Rd", "Winthrop Dr"],
        T18: ["Berenice Dr", "Marie Ct", "Granz Ct", "Ernest Ct", "Cameo Ct", "Concort Dr", "Sheila Ct", "Lorraine Gate", "Douglas Dr", "Douglas Ct", "1st Ave", "Earl Pl N.", "Earl Pl W.", "Earl Pl E.", "Earl Pl", "Taylor Ave", "Cedar St", "Fairview Ave", "Newbridge Rd", "Bush St", "Bellmore Rd", "Pine St", "Diamond Ave", "Beach St", "Roosevelt Ave", "1st St", "1st Ave", "2nd St", "2nd Ave", "Prospect Ave", "Post St", "Mc Arthur St", "Mc Clellan St", "Manor Ct", "Bright Ave", "Harding Ct", "Jefferson Ct", "Jefferson St", "Mckay Ct", "Newbridge Rd", "3rd St", "4th St", "5th St", "6th St", "7th St", "8th St", "Front St", "Prospect Ave", "DeWolfe Pl", "Madison Dr", "Cooper Dr", "Stuart Ln", "Marshall Dr", "Putman Dr", "Randall Ave", "Wilson Ln", "Lincoln Ave"],
        T19: ["2nd Ave", "3th Ave", "4th Ave", "5th Ave", "6th Ave", "7th Ave", "Andrew Ave", "Arleigh Rd", "Kensington Rd", "Park Cir", "Park Ter N", "Park Ter S", "Lexington Ave", "Susan Dr", "Cayuga Ave", "Oltmann Rd", "Stanley Rd", "Star St", "Alder Ave", "Lawn Dr", "Fir Ct", "Dogwood Ave", "Balsam Ave", "Argyle Rd", "Wellington Rd", "Warwick Rd", "Sussex Rd", "Rowehl Dr", "Forest Ave", "Sterling Pl", "Woods Ave", "Hilda St", "Cypress Ave", "Falcon St", "Inglewood St", "Ramona St", "Tonquin St", "Poppy St", "Hysler St", "Jerusalem Rd", "Roxboro Ct", "Miduale Ave", "Tabor Pl", "Dinne Ct", "Rudwick Pl", "Evelin Ave", "Kingstone Ave", "Vernon Ave", "Sherman Ave", "Nira Ave", "Grove Ave", "Birch Ave", "Hoover St", "Oxford Pl", "Firma Ln", "Grayson Dr", "Dee Ct", "Benton Rd", "Pontiat Rd", "Wagstaff Dr", "Wingate Dr", "Marin Ln", "Burro Ln", "Silver Ct", "Marion Dr", "Berfond Pl", "Newbridge Rd", "Lenox Ave", "Roslyn Pl", "Robyn Pl", "Avalon Pl", "Abington Pl", "Marlboro St", "Amherst St", "Kenmore St", "Hudson St", "Pendroy St", "Oakdale St", "East Meadow Ave", "Noble St", "Everett Pl", "Lincoln Ave", "8th Ave", "5th St", "6th St", "7th St"],
        T20: [],
        T21: [],
        T22: [],
        T23: []
    }
 
  function callTerritorio(terr) {
    if(terr === "1"){
        props.setTerritorio(terrObj.T1)
    } if(terr === "2"){
        props.setTerritorio(terrObj.T2)
    }
    if(terr === "3"){
        props.setTerritorio(terrObj.T3)
    }
    if(terr === "4"){
        props.setTerritorio(terrObj.T4)
    }
    if(terr === "5"){
        props.setTerritorio(terrObj.T5)
    }
    if(terr === "6"){
        props.setTerritorio(terrObj.T6)
    } if(terr === "7"){
        props.setTerritorio(terrObj.T7)
    }
    if(terr === "8"){
        props.setTerritorio(terrObj.T8)
    }
    if(terr === "9"){
        props.setTerritorio(terrObj.T9)
    }
    if(terr === "10"){
        props.setTerritorio(terrObj.T10)
    }
    if(terr === "11"){
        props.setTerritorio(terrObj.T11)
    } if(terr === "12"){
        props.setTerritorio(terrObj.T12)
    }
    if(terr === "13"){
        props.setTerritorio(terrObj.T13)
    }
    if(terr === "14"){
        props.setTerritorio(terrObj.T14)
    }
    if(terr === "15"){
        props.setTerritorio(terrObj.T15)
    }
    if(terr === "16"){
        props.setTerritorio(terrObj.T16)
    } if(terr === "17"){
        props.setTerritorio(terrObj.T17)
    }
    if(terr === "18"){
        props.setTerritorio(terrObj.T18)
    }
    if(terr === "19"){
        props.setTerritorio(terrObj.T19)
    }
    if(terr === "20"){
        props.setTerritorio(terrObj.T20)
    }
    if(terr === "21"){
        props.setTerritorio(terrObj.T21)
    }
    if(terr === "22"){
        props.setTerritorio(terrObj.T22)
    }
    if(terr === "23"){
        props.setTerritorio(terrObj.T23)
    }
  }
  
  return (
    <form>
        <h1 className="territorio_title">Territorio #</h1>
        <select className="form-control" 
        onChange={(e)=>callTerritorio(e.target.value)}>
            <option>Select a number</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
        </select>
        <button 
            className="btn btn-primary" 
            type="button" 
            onClick={(e) => {
                e.preventDefault();
                props.setIsTerr(true)
            }}>
                    Start
        </button>
    </form>
  )
}

export default Territorios