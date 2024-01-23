import { useEffect, useState, useRef } from "react";
import { MdOutlinePhone } from "react-icons/md";
import ShowModal from "../ShowModal/ShowModal"
import { FiSearch } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HouseCard = () => {
    const search = useRef(null);
    const [searching, setSearching] = useState("");
    const [acs, setAcs] = useState(true);
    const [house, setHouse] = useState([]);
    const handleSearch = () => {
        setSearching(search.current.value)
    };

    // get the data 
    useEffect(() => {
        fetch(`https://house-hunter-server-production-10e7.up.railway.app/allHouseSearch?search=${searching}&sort=${acs ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => {
                setHouse(data)
            })
    }, [acs, searching]);


    return (
        <div>
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold my-5 text-[#4070F4]">
                    House Hunter
                </h2>

                <div className="grid grid-cols-12 mt-12 mx-10">
                    {/* input field section start */}
                    <div
                        className="col-span-5 flex items-center">
                        <input
                            type="text"
                            ref={search}
                            placeholder="Search by house names"
                            className="input input-bordered w-full" />

                        <button
                            onClick={handleSearch}
                            className="border-2 border-[#4070F4] text-[#4070F4] py-3 px-5 ms-2 rounded-xl font-bold flex items-center">
                            <FiSearch className="text-xl mr-1" />
                        </button>
                    </div>
                    {/* input field section end  */}


                    <div className="col-span-7 flex items-center justify-end">

                        {/* shorting btn start */}
                        <div>
                            <button
                                onClick={() => setAcs(!acs)}
                                className="flex items-center text-sm font-semibold text-white bg-[#4070F4] border-2 border-[#7699fb] px-5 py-2 rounded-xl cursor-pointer hover:bg-[#5a83f5] duration-300 mr-3">
                                {
                                    acs ?
                                        "Filter Price: Low to High"
                                        :
                                        "Filter Price: High to Low"
                                }
                            </button>
                        </div>
                        {/* shorting btn end */}

                        <Link
                            to={"/dashboard/overview"}
                            className="flex items-center text-sm font-semibold text-[#4070F4] border-2 border-[#4070F4] px-5 py-2 rounded-xl cursor-pointer hover:bg-[#4070F4] hover:text-white duration-300">
                            Go To You Dashboard <IoMdArrowRoundForward className="text-xl" />
                        </Link>

                    </div>
                </div>

            </div>
            <div className="container mx-auto grid lg:grid-cols-3 pt-12">

                {/* map section start */}
                {
                    house?.map((item) => (
                        <div
                            className="border m-3"
                            key={item._id}>
                            <div>

                                <div className="relative">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="w-[95%] rounded-xl"
                                            src={item?.picture}
                                            alt="" />
                                    </div>

                                    <div className="absolute top-5 right-0 mr-5 bg-black text-white text-center px-6 py-1 rounded-full font-semibold text-sm bg-opacity-95">
                                        Price: {item?.price}$
                                    </div>
                                </div>

                                <div className="mx-5 mt-3">
                                    <p className="font-medium text-gray-600">
                                        House Owner Name:
                                    </p>

                                    <h2 className="font-bold text-2xl">
                                        {item?.name}
                                    </h2>

                                    <p className="text-sm text-gray-600 flex items-center mt-1">
                                        <MdOutlinePhone className="text-base mr-1" /> House Owner Phone Number: {item?.phone}
                                    </p>

                                    <h2 className="text-xl font-semibold mt-3 mb-1">
                                        House Details:
                                    </h2>

                                    <h2 className="font-medium text-gray-600">
                                        House Address: {item?.address}
                                    </h2>
                                    <h2 className="font-medium text-gray-600">
                                        House City: {item?.city}
                                    </h2>
                                    <h2 className="font-medium text-gray-600">
                                        House Bedrooms & Bedrooms: {item?.bedrooms} & {item?.bathrooms}
                                    </h2>

                                    <button
                                        onClick={() => document.getElementById('my_modal_1').showModal()}
                                        className="w-full bg-black text-white py-4 font-semibold rounded-md mt-6 mb-4">
                                        Book This House
                                    </button>
                                    <ShowModal />
                                </div>

                            </div>
                        </div>
                    ))
                }
                {/* map section end */}

            </div>
        </div>
    );
};

export default HouseCard;