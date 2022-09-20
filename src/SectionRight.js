import {sectionRmenu} from "./data"; 

function SectionMenu ({menu}){
    return (
        <span className= "p-1 m-2 text-xl font-bold hover:text-blue-800 ">{menu}</span>   
    );
}
export const sMenu = sectionRmenu.map (e => <SectionMenu menu = {e}/>);

function SectionRight ({num, heading}){
    return (
        <div className="w-full m-3">
            <p className="text-5xl font-bold text-gray-500 mt-4">{num}</p>
            <p className="text-2xl font-bold mt-4 tracking-tight">{heading}</p>
        </div>      
    );
}
export default SectionRight;