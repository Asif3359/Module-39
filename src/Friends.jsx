import Friend from "./Friend"
import { useEffect, useState } from "react"


export default function Friends (){

    const [Friends , setFriends]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className="compStyle">
            <h3> Friends : {Friends.length}</h3>
            {
                Friends.map (friend => <Friend friend={friend}></Friend> )
            }
        </div>
    )
}