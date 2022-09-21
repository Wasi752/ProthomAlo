import { Link } from "react-router-dom";
import { japon } from "./data";

function N3F2R ({image, heading, ptime, id}){
    return(
        <Link to = {"/" + id}>
        <div className="w-full h-[90%] pl-5 ">
            <img src = {image} className="w-full h-[70%]"/>
            <p className="text-2xl font-bold mt-3">{heading}</p>
            <p className="mt-5 text-gray-600">{ptime}</p>
        </div></Link>
    );
}
    const sharadesh2nd = japon
    .filter(x => x.topic === "sharadesh2")
    .map(s => <N3F2R id = {s.id} image = {s.image} heading = {s.heading} ptime = {s.ptime}/>);

function News3rdFage2ndRow() {
    return (
        <div className='w-full h-[40%] flex flex-row p-3 divide-x-2'>
                {sharadesh2nd}
        </div>
    );
}

function N3F1R ({image, heading, ptime, id}){
    return(
    <Link to = {"/" + id}>
        <div className="w-full h-[50%] p-1 ">
            <img src={image} className="w-full h-[70%]" />
            <p className="text-2xl font-bold mt-3">{heading}</p>
            <p className="mt-5 text-gray-600">{ptime}</p>
        </div></Link>  
    );
}
    const sharadesh1st = japon
    .filter(d => d.topic === "sharadesh1")
    .map(b => <N3F1R id = {b.id} image = {b.image} heading = {b.heading} ptime = {b.ptime}/>);

function News3rdFage1stR (){
    return(
        <div className="w-[35%] h-[90%] p-2 pt-8 mt-12 divide-y-2">
            {sharadesh1st}
        </div>
    );
}
function News3rdFage1stNews ({id, image, heading, news, ptime}){
    return(
        <Link to = {"/" + id}>
            <div><img src={image} />
            <p className="text-3xl font-bold mt-3 hover:text-blue-800">{heading}</p>
            <p className="text-xl mt-4">{news}</p>
            <p className="mt-5 text-gray-600">{ptime}</p>
        </div></Link>
    );
}
    const News1st = japon
    .filter(f => f.topic === "sharadesh")
    .map(u => <News3rdFage1stNews id = {u.id} image = {u.image} heading = {u.heading} news = {u.news} ptime = {u.ptime}/>);

function News3rdFage() {
    return (

        <div className="w-[65%] h-[80%]">
            <div className='w-full h-full flex flex-row divide-x-2 p-3'>

                <div className="w-[65%] h-[65%] p-5 divide-y-2">
                    <div className="w-full h-full p-2">
                        <div className="flex"><img src="/prothom-alo-images/download.jpeg" className="w-[4%] h-[4%] mt-3" />
                            <span className="p-1 m-2 text-2xl font-bold hover:text-blue-800 ">সারা দেশ</span>
                        </div>
                        {News1st}
                    </div>
                </div>

                <News3rdFage1stR/>

            </div>
            <News3rdFage2ndRow/>

        </div>
    );
}

export default News3rdFage;