import { japon } from "./data";

function rightSBigg ({id, image}){
    return(
        <div className="w-full h-[40%] p-3">
                <img src = {image} className="w-full h-full "/>
        </div>
    );
}
    const biggapon = japon
    .filter(x => x.topic === "rightsidebigga")
    .map(l => <rightSBigg id = {l.id} image = {l.image}/>); 

function rightsNews1 ({id, image, heading, news, ptime}){
    return(
        <div className="w-full h-[40%] p-3 ">
            <img src = {image} className="w-full h-[70%]"/>
            <p className="text-2xl font-bold ">{heading}</p>
            <p className="mt-5 text-gray-600">{ptime}</p>
        </div> 
    );
}
    const news1 = japon
    .filter(y => y.topic === "rightside1st1")
    .map(m => <rightsNews1 id = {m.id} image = {m.image} heading = {m.heading} ptime = {m.ptime}/>); 

function rightsNews2 ({id, image, news, heading, ptime}){
    return(
        <div>
                <div className="w-full h-[35%] flex ">
                    <div className="w-[60%]"><p className="text-2xl font-bold ">{heading}</p>
                    </div>
                    <div className="w-[40%]"><img src = {image} className="w-full h-full"/></div>
                </div>
                    <p className="mt-1 text-gray-600">{ptime}</p>

        </div>
    );
}
    const news2 = japon
        .filter(z => z.topic === "rightside1st2")
        .map(n => <rightsNews2 id = {n.id} image = {n.image} heading = {n.heading} ptime = {n.ptime}/>); 

function rightsNews3 ({id, image, heading, news, ptime}){
    return(
        <div>
                <div className="w-full h-[35%] flex mt-5 p-3 bg-blue-200">
                    <div className="w-[60%]"><p className="text-2xl font-bold ">{heading}</p>
                    </div>
                    <div className="w-[40%]"><img src = {image} className="w-full h-full"/></div>
                </div>
                    <p className="mt-1 text-gray-600">{ptime}</p>

        </div>
    );
}
    const news3 = japon
    .filter(u => u.topic === "rightside1st3")
    .map(g => <rightsNews3 id = {g.id} image = {g.image} heading = {g.heading} ptime = {g.ptime}/>); 

function RightSideNews (){
    return (
        <div className='w-3/12 h-full divide-x-2 divide-y-2'>
            {biggapon}
            
            {news1}

            <div className="w-full h-[40%] p-3 divide-y-2">
                {news2}

                {news3}

            </div>

            
            
        </div>
    );
}
export default RightSideNews;