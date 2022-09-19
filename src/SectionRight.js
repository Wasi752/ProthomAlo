import {sectionRmenu} from "./data"; 

function SectionMenu ({menu}){
    
    return (
        <div className="w-full">
            <span className= "p-1 m-2 text-xl font-bold hover:text-blue-800 ">{menu}</span>
        </div>
    );
}
export const sMenu = sectionRmenu.map (e => <SectionMenu menu = {e}/>);

function SectionRight ({num, heading}){
    
    return (

            <div className="w-[25%] h-[90%] p-5 mt-3 mr-5 divide-y-2 ">
                               
                <div className="w-full m-3">
                    <p className="text-5xl font-bold text-gray-500 mt-4">{num}</p>
                    <p className="text-2xl font-bold mt-4 tracking-tight">{heading}</p>
                </div>
                
            </div>
    );
}
export default SectionRight;