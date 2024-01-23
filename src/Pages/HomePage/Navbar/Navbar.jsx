import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [acs, setAcs] = useState();

    // get the data 
    const [house, setHouse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allHouse')
            .then(res => res.json())
            .then(data => {
                setHouse(data)
            })
    }, []);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold my-5 text-[#4070F4]">
                House Hunter
            </h2>

            <div className="grid grid-cols-12 mt-12 mx-10">
                {/* input field section start */}
                <form
                    className="col-span-5 flex items-center">
                    <input
                        type="text"
                        placeholder="Search by house names"
                        className="input input-bordered w-full" />

                    <button className="bg-[#4070F4] text-white py-3 px-10 ms-2 rounded-xl font-bold flex items-center">
                        <FiSearch className="text-lg mr-1" />Search
                    </button>
                </form>
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
                        to={"/dashboard"}
                        className="flex items-center text-sm font-semibold text-[#4070F4] border-2 border-[#4070F4] px-5 py-2 rounded-xl cursor-pointer hover:bg-[#4070F4] hover:text-white duration-300">
                        Go To You Dashboard <IoMdArrowRoundForward className="text-xl" />
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Navbar;