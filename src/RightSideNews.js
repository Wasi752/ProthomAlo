
function RightSideNews (){
    return (
        <div className='w-3/12 h-full divide-x-2 '>
            <div className="w-full h-[40%] p-3">
                <img src = "/prothom-alo-images/bigga.jpeg" className="w-[90%] h-[90%] "/>
            </div>
            
            <div className="w-full h-[40%] p-3 ">
                <img src = "/prothom-alo-images/895603.webp" className="w-[90%] h-[60%]"/>
                <p className="text-2xl font-bold ">সাবেক সংসদ সদস্যের মাইক্রোফোন কেড়ে নিলেন বর্তমান সংসদ সদস্য</p>
                <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
            </div>

            <div className="w-full h-[40%] p-3 ">
                <div className="w-[90%] h-[35%] flex ">
                    <div className="w-[60%]"><p className="text-2xl font-bold ">বিশ্লেষণ/ প্রাইভেট কার নিয়ে কেন স্কুলে যেতে হয়</p>
                    </div>
                    <div className="w-[40%]"><img src = "/prothom-alo-images/prothomal.webp" className="w-full h-full"/></div>
                </div>
                    <p className="mt-1 text-gray-600">৫ ঘণ্টা আগে</p>

                <div className="w-[90%] h-[35%] flex mt-5 p-3 bg-blue-200">
                    <div className="w-[60%]"><p className="text-2xl font-bold ">ছাপা পত্রিকার এবং ছাপা ম্যাগাজিনের হুবহু প্রতিচ্ছবি</p>
                    </div>
                    <div className="w-[40%]"><img src = "/prothom-alo-images/img.webp" className="w-full h-full"/></div>
                </div>
                    <p className="mt-1 text-gray-600">৫ ঘণ্টা আগে</p>

            </div>

            
            
        </div>
    );
}
export default RightSideNews;