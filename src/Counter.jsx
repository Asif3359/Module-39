import { useState } from "react"

export default function Counter (){
    const [count, setCount ] = useState(0);  
    const handelAdd = () =>{
        const newCount = count+1;
        setCount(newCount);
    }
    const handelReduce = () =>{
        const newCount = count-1;
        setCount(newCount);
    }


    return (
        <div
            style={{
                border:"2px solid tomato",
                padding:"20px",
                margin:"10px",
                borderRadius:"10px"
            }}>
        <h3>Counter: {count} </h3>
        <button 
                style={{
                    backgroundColor:"green",
                    color:"white",
                    marginLeft:"8px"
                }}
                onClick={handelAdd}>
            Add
        </button>
        <button 
                style={{
                    backgroundColor:"green",
                    color:"white",
                    marginLeft:"8px"
                }}
                onClick={handelReduce}>
            Reduce
        </button>
        </div>
    )
}