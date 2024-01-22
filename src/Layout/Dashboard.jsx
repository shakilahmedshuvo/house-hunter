import { NavLink, Outlet } from "react-router-dom";
import { FaPlusMinus } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open text-black font-bold">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle" />
            <div
                className="drawer-content flex flex-col items-center justify-center">
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

                    <h2 className="text-2xl mt-4 mb-4">
                        Dashboard
                    </h2>

                    <li>
                        <NavLink
                            to='/dashboard/addNewHouse'
                            className="flex items-center m-2 py-1">
                            <FaPlusMinus className="mr-2" /> Add New House
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink
                            to='/dashboard/allHouse'
                            className="flex items-center m-2 py-1">
                            <FaPlusMinus className="mr-2" /> All House & Owners
                        </NavLink>
                    </li>


                    {/* divider start */}
                    <div
                        className="divider">
                    </div>


                    <li>
                        <NavLink
                            to="/">
                            Home
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;