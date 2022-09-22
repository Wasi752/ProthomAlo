import { Link } from "react-router-dom";
import { japon } from "./data";

const cr = "w-[33%] h-[90%] p-5";
const ccr = "w-[32%] h-[90%] p-5";
const cd = "text-3xl hover:text-blue-600 font-bold";
const ccd = "text-lg text-gray-600 hover:text-black";
const cdr = "mt-20 font-bold text-gray-600";

function MainNews({image, caption, id}){
    return(
        <Link to = {"/" + id} className={cr}>
              <img src = {image} className="w-full h-[70%]"/>
              <p>{caption}</p>
        </Link>
    );
}
    const main2 = japon
    .filter(x => x.topic === "news1stFage2")
    .map(v => <MainNews id = {v.id} image = {v.image} caption = {v.caption}/>);

function News1 ({id, heading, news, ptime}){
    return(
        <Link to = {"/" + id} className={cr}>
              <p className={cd} >{heading}</p>
              <p className={ccd}>{news}</p>
              <p className={cdr}>{ptime}</p>
        </Link>
    );
}
    const main1 = japon
    .filter(x => x.topic === "news1stFage1")
    .map(v => <News1 id = {v.id} heading = {v.heading} news = {v.news} ptime = {v.ptime}/>);

function News2 ({id, news, heading, ptime}){
    return(
        <Link to = {"/" + id} className={cr}>

              <p className={cd} >{heading}</p>
              <p className={ccd}>{news} </p>
              <p className={cdr}>{ptime}</p>
        </Link>
    );
}
    const main3 = japon
    .filter(x => x.topic === "news1stFage3")
    .map(v => <News2 id = {v.id} heading = {v.heading} news = {v.news}/>);

function News2ndRow ({id, heading, news, ptime}){
    return(
        <Link to = {"/" + id} className={ccr}>
                <p className={cd} >{heading}</p>
                <p className="text-lg text-gray-600 hover:text-black mt-1">{news}</p>
                <p className={cdr}>{ptime}</p>
        </Link>
    );
}
    const main4 = japon
    .filter(k => k.topic === "news1stFage4")
    .map(j => <News2ndRow id = {j.id} heading = {j.heading} news = {j.news} ptime = {j.ptime} />);

function News3rdRow ({id, heading, image, ptime}){
    return(
        <Link to = {"/" + id} className={ccr}>
            <div className="w-[60%] p-2"><p className="text-2xl font-bold">{heading}</p>
            <p className={cdr}>{ptime}</p></div>
            <div className="w-[40%] p-2"><img src = {image} className="w-full h-[40%]"/></div>
        </Link>
  );
 }
    const main5 = japon
    .filter(k => k.topic === "news1stFage5")
    .map(j => <News3rdRow id = {j.id} heading = {j.heading} ptime = {j.ptime} image = {j.image} />);

function News4thRow ({id, heading, image, ptime}){
    return(
        <Link to = {"/" + id} className={ccr}>
                <div className="w-[60%] p-2"><p className="text-2xl font-bold">{heading}</p>
                <p className={cdr}>{ptime}</p></div>
                <div className="w-[40%] p-2"><img src = {image} className="w-full h-[70%]"/></div>
        </Link>
  );
 }
    const main6 = japon
    .filter(k => k.topic === "news1stFage6")
    .map(j => <News4thRow id = {j.id} heading = {j.heading} ptime = {j.ptime} image = {j.image} />);

function News1stFage() {
    return ( 
    <div className="w-[65%] h-full mb-10 p-3 divide-y-2 ">
        <div className='w-full h-[40%] flex flex-row divide-x-2'>
          {main1}
          {main2}
          {main3}
        </div>     
        <div className='w-full h-[30%] flex flex-row p-3 divide-x-2'>
            {main4}
        </div> 
        <div className='w-full h-[25%] flex flex-row divide-x-2'>
            {main5}       
        </div>

        <div className='w-full h-[20%] flex flex-row divide-x-2'>
            {main6}
        </div>
    </div>    
    );
}

export default News1stFage;