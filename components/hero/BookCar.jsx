export default function BookCar(){
    return(
        <main id="bookAcar">
            <div className="flex flex-col bg-[#FFEDEA] p-8 shadow-md shadow-slate-800 rounded-md" >
                <div>
                    {/* heading */}
                    <h2 className="font-bold text-2xl py-2 mb-2">Book a car</h2>
                </div>

                <div className="flex flex-col">
                    {/* inputs */}
                    <div className="flex flex-col md:flex-row gap-6 xl:gap-16 items-center justify-between">
                        {/* car types */}
                        <div>
                            <h4 className="font-semibold">Select Your Car Type*</h4>
                            <input 
                            className="pl-6 py-2 mt-2"
                            placeholder="Select Your Car Type" type="text"  />
                        </div>

                        <div>
                            <h4 className="font-semibold">Pick-up*</h4>
                            <input 
                            className="pl-6 py-2 mt-2"
                            placeholder="Select pick up location" type="text" />
                        </div>

                        <div>
                            <h4 className="font-semibold">Drop-of*</h4>
                            <input 
                            className="pl-6 py-2 mt-2"
                            placeholder="Select drop off location" type="text" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 xl:gap-16 items-center justify-between mt-2 pb-6">
                        {/* dates buttons */}
                        <div>
                            <h4 className="font-semibold">Pick-up *</h4>
                            <input 
                            className="pl-6 py-2 mt-2"
                            placeholder="dd-mm-yyy" type="text" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Drop-of *</h4>
                            <input 
                            className="pl-6 py-2 mt-2"
                            placeholder="dd-mm-yyy" type="text" />
                        </div>
                        <div className="mt-4 mx-1">
                            <button className="bg-[#FD4C31] font-bold text-xl px-20 py-3 text-white">Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}