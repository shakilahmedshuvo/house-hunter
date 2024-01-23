import { MdOutlineAddHomeWork } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";


const DashboardOverview = () => {
    return (
        <div>
            <h2 className="text-4xl text-[#4070F4] mt-8 text-center">
                Dashboard Overview
            </h2>

            <div className="grid grid-cols-3 w-full mt-10">

                <Link
                    to='/dashboard/addNewHouse'
                    className="bg-[#4070F4] text-white border-[3px] flex items-center justify-center px-20 py-5 rounded-xl mx-5 text-lg">
                    <MdOutlineAddHomeWork className="mr-4 text-lg" /> Add New House
                </Link>
                <Link
                    to='/dashboard/allHouse'
                    className="bg-[#4070F4] text-white border-[3px] flex items-center justify-center px-20 py-5 rounded-xl mx-5 text-lg">
                    <BsHouses className="mr-4 text-lg" /> All House Owners
                </Link>
                <Link
                    to='/dashboard/houseBooking'
                    className="bg-[#4070F4] text-white border-[3px] flex items-center justify-center px-20 py-5 rounded-xl mx-5 text-lg">
                    <FaListCheck className="mr-4 text-lg" /> List Of All House Renters
                </Link>
            </div>
        </div>
    );
};

export default DashboardOverview;