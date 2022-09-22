import { Link } from "react-router-dom";
import {japon} from "./data";

function Jibon ({image, heading, news, fnews, ptime, ftime, id}){
    
    return (
        <Link to = {"/" + id} className="w-[25%] h-full p-5">

                <img src = {image} className="w-full h-full"/>
                <p className="text-2xl font-bold mt-2">{heading}</p>                       
                <p className="text-lg mt-3">{news}</p>
                <p className="mt-1 text-gray-600">{ptime}</p>

                       
        </Link>
    );
}

function JibonJapon (){
    const jibon_japon = japon
    .filter(r => r.topic === "japon")
    .map(t => <Jibon id={t.id} image ={t.image} heading ={t.heading} news = {t.news} fnews = {t.fnews} ptime = {t.ptime} ftime = {t.ftime}/>);
    return (
        
        <div className="w-full h-full mt-1 ">
                    <div className="flex ml-12 pl-20 "><img src="/prothom-alo-images/download.jpeg" className="w-[1.5%] h-[1%] mt-12"/>
                        <span className= "pl-3 text-2xl font-bold hover:text-blue-800 mt-12">জীবনযাপন</span>
                    </div>

                <div className='w-[90%] h-[50%] flex  divide-x-2 ml-12 pl-12'>

                    {jibon_japon}

                </div> 
        </div>
    );
} 
export default JibonJapon;