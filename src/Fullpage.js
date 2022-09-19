import SectionRight from "./SectionRight";
import {sectionRnews, sectionRmenu} from "./data";
import {sMenu} from "./SectionRight";

const rightSide = sectionRnews.map(r => <SectionRight num = {r.num} heading = {r.heading}/> );

function FullPage (){
    return (
    <div className="w-full h-full mb-10 ">
        <div className='w-full h-full flex flex-row divide-x-2 p-10 ml-10'>
          
            
          
            <div className="w-[50%] h-[65%] p-5 divide-y-2">
                <div className="w-full h-full p-2">
                    <div className="flex"><img src="/prothom-alo-images/download.jpeg" className="w-[4%] h-[4%] mt-3"/>
                    <span className= "p-1 m-2 text-3xl font-bold text-red-700 hover:text-blue-800 ">রাজনীতি</span></div>
                    <div><img src = "/prothom-alo-images/01_02.webp" className="w-full h-[70%]"/>
                    <p className="text-xl">আজ টিভিতে যা দেখবেন (১৩ সেপ্টেম্বর ২০২২)</p></div>

                </div>
                <div className="w-full h-2/12 p-1 flex divide-x-2 ">
                    <div className="w-[50%] h-[50%] p-2">
                        <img src = "/prothom-alo-images/pdates.webp" className="w-full h-[70%]"/>
                        <p className="text-2xl font-bold mt-3">ইংলিশ প্রিমিয়ার লিগ/চেলসি-লিভারপুল, ইউনাইটেড-লিডস ম্যাচ স্থগিত</p>
                        <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                    <div className="w-[50%] h-[50%] p-2">
                        <img src = "/prothom-alo-images/Mark_Boucher_AFP.webp" className="w-full h-[70%]"/>
                        <p className="text-2xl font-bold mt-3">বিশ্বকাপের পর সরে দাঁড়াবেন বাউচার</p>
                        <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                
                </div> 
            </div>


            <div className='w-3/12 h-full divide-y-2'>
                <div className="w-full h-[40%] p-5">
                <img src = "/prothom-alo-images/78873.gif" className="w-full h-full"/>
                </div>
            

                    <div className="w-full h-[40%] p-5 divide-x-2 divide-x-2">
                
                        <div className="w-full h-[35%] flex p-2">
                            <div className="w-[60%]"><p className="text-2xl font-bold mt-2">ফটো ফিচার/ নিউইয়র্ক, দুবাই ও লন্ডনে তাঁদের উদ্‌যাপনের রাত</p>
                            </div>
                            <div className="w-[40%]"><img src = "/prothom-alo-images/photo_feature.webp" className="w-full h-full"/></div>
                        </div>
                        <p className="mt-1 text-gray-600">৫ ঘণ্টা আগে</p>

                        <div className="w-full h-[35%] flex p-2">
                            <div className="w-[60%]"><p className="text-2xl font-bold mt-2">চাকরি হারিয়ে ভেঙেচুরে গেছেন টুখেল</p>
                            </div>
                            <div className="w-[40%]"><img src = "/prothom-alo-images/87f42.webp" className="w-full h-full"/></div>
                        </div>
                        <p className="mt-1 text-gray-600">৫ ঘণ্টা আগে</p>

                        <div className="w-full h-[35%] flex mt-5 p-2">
                            <div className="w-[60%]"><p className="text-2xl font-bold ">বলছেন খালেদ মাহমুদ/ মাহমুদউল্লাহর মতো ছেলেকে হঠাৎ ‘নো’ বলা যায় না</p>
                            </div>
                            <div className="w-[40%]"><img src = "/prothom-alo-images/Mirpur_ground_2.webp" className="w-full h-full"/></div>
                        </div>
                        <p className="mt-5 text-gray-600 p-2">৫ ঘণ্টা আগে</p>

                    </div>

            
            
            </div>
            <div className="w-[25%] h-[90%] p-5 mt-3 mr-5 divide-y-2 ">
                {sMenu}
                {rightSide}
            </div>
        </div>     

    </div> 
    );
}
export default FullPage;