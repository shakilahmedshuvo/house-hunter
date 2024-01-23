import { Link, NavLink, Outlet } from "react-router-dom";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open text-black font-bold">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle" />
            <div
                className="drawer-content flex flex-col items-center">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden">
                    Open DashBoard
                </label>
            </div>

            {/* sidebar content are here */}
            <div
                className="drawer-side bg-blue-100 font-bold">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay">
                </label>
                <ul className="p-4 w-80 text-sm">

                    <Link
                        to={"/dashboard/overview"}
                        className="text-2xl mt-4 mb-5">
                        Dashboard
                    </Link>

                    <li>
                        <NavLink
                            to='/dashboard/addNewHouse'
                            className="flex items-center m-2 py-1 text-base mt-3">
                            <MdOutlineAddHomeWork className="mr-4 text-lg" /> Add New House
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/dashboard/allHouse'
                            className="flex items-center m-2 py-1 text-base mt-3">
                            <BsHouses className="mr-4 text-lg" /> All House Owners
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/dashboard/houseBooking'
                            className="flex items-center m-2 py-1 text-base mt-3">
                            <FaListCheck className="mr-4 text-lg" /> List Of All House Renters
                        </NavLink>
                    </li>

                    {/* divider start */}
                    <div
                        className="divider">
                    </div>


                    <li>
                        <NavLink
                            to="/home"
                            className="flex items-center m-2 py-1 text-base mt-3">
                            <IoArrowUndoOutline className="mr-1 text-xl" />  Go toHome
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;