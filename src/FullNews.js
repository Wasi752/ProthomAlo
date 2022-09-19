import {japon} from "./data";
import { useParams } from "react-router-dom";
import RightSideFullPage from "./RightSideFullpage";

function FullNews (){
    const {id} = useParams();
    const {heading, image, news, fnews, ptime, ftime} = japon.find(x =>x.id === parseInt(id));
    return (
        <div className="w-full h-full flex ">
                
            <div className="w-1/12 h-full"></div>
                    
            <div className="w-7/12 h-full">
                        <div className="flex mt-10 "><span className= "text-2xl font-bold text-blue-800 hover:text-red-800 mb-5 underline underline-offset-1">জীবনযাপন</span>
                        </div>
                        <div><p className="text-5xl font-bold mt-3">{heading}</p></div>
                        <p className="mt-5 text-xl font-bold"> প্রথম আলো ডেস্ক</p>
                        <p className="text-lg mt-5 text-gray-800">{ftime}</p>
                        <div className="mt-10 ml-40 w-full h-[50%]"><img src={image} className="w-[70%] h-full  "/>
                        <p>উজবেকিস্তানের সমরখন্দে চলমান এসসিও আঞ্চলিক সম্মেলনের ফাঁকে মোদি ও পুতিন বৈঠক করেন| ছবি: রয়টার্স</p></div>
                        <div className="w-full h-full mt-10 ml-40"><p className=" w-[70%] h-full text-xl">{fnews}</p></div>


            </div>

            <div className="w-3/12 h-[80%] p-3 m-10">
                <div className="w-full h-[40%] p-3"><img src = "/prothom-alo-images/bigga.jpeg" className="w-[80%] h-[80%] "/>
                </div>
                
                <RightSideFullPage/>

            </div>
                    
            

            <div className="w-1/12 h-full"></div>                
        </div>
    )
}
export default FullNews;