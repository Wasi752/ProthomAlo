
import { Link } from "react-router-dom";
import { japon } from "./data";

function FullPageRightSide({ heading, news, image, ptime, id }) {
    return (



        <Link to={"/" + id}>
            <p className="text-2xl font-bold mt-10">{heading}</p>
            <div className="w-full h-[35%] flex ">
                <div className="w-[60%] mt-5"><p className="text-xl ">{news}</p></div>
                <div className="w-[40%] mt-5"><img src={image} className="w-full h-[50%]" /></div>

            </div>
            <p className="mt-1 text-gray-600">{ptime}</p>
        </Link>




    );
}

function RightSideFullPage() {
    const rightSFpage = japon
        .filter(k => k.topic === "rightsidefullpage")
        .map(z => <FullPageRightSide id={z.id} heading={z.heading} news={z.news} image={z.image} ptime={z.ptime} />);

    return (
        <div className="w-full h-full p-3">
            <p className="text-lg font-bold underline underline-offset-1">ভ্লাদিমির পুতিন নিয়ে আরও পড়ুন</p>
            {rightSFpage}

        </div>
    );
}

export default RightSideFullPage;