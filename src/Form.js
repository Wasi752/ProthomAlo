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
        <div className=" w-full h-full mt-12">
            <div className="w-full h-full flex justify-center">
               <p className="text-2xl font-bold p-3">Title/Heading</p>
                <input type="text" className="w-[50%] p-3 h-2/12 border" value={heading} onChange={keyPress}/>
                <button className="text-2xl font-bold p-3 border hover:bg-blue-500" onClick={submit}>Submit</button>
            </div>
            {titles}
        </div>
    );
}
export default Form;