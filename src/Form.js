import { useState } from "react";
import { japon } from "./data";

function Form (){
    const [heading, setHeading]= useState();
    const titles = japon.map(k => <p>{k.heading}</p>)
    const submit = () => {
        japon.push ({heading:heading})
        setHeading("")
    }
    const keyPress = e=>{
        setHeading(e.target.value)
    }
    return (
        <div className=" w-full h-full">
            <div className="w-full h-full flex justify-center">
               <p>Title/Heading</p>
            <input type="text" className="w-[40%] h-full border" value={heading} onChange={keyPress}/>
            <button className="border bg-blue-500" onClick={submit}>Submit</button>
            </div>
            {titles}
        </div>
    );
}
export default Form;