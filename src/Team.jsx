import { useState } from "react"

export default function Team (){

    const [Team , setTeam] = useState(11);

    const handelAdd  = () =>{
        const NewTeam = Team+1;
        setTeam(NewTeam);
    }
    const handelRemove  = () =>{
        const NewTeam = Team-1;
        setTeam(NewTeam);
    }



    const TeamStyel = {
        border:"2px solid tomato",
        margin:"10px",
        padding:"20px",
        borderRadius:"10px"
    }
    return (
        <div style={TeamStyel}>

            <h3>player:{Team}</h3>
            <button className="buttonStyel"  onClick={handelAdd} >Add</button>
            <button className="buttonStyel" onClick={handelRemove}>Remove</button>

        </div>
    )
}