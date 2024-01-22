import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

const AllHouse = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allHouse")
            .then(res => res.json())
            .then(data => {
                setData(data);
                // console.log(data);
            })
    }, []);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head start */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th className="text-center w-fit">
                            Bedrooms & Bathrooms
                        </th>
                        <th className="text-center w-fit">
                            Room Size
                        </th>
                        <th>Price</th>
                        <th className="text-[#00A6ED] text-sm">
                            Update
                        </th>
                        <th className="text-[#E91E63] text-sm">
                            Delete
                        </th>
                    </tr>
                </thead>
                {/* table body start */}
                <tbody>
                    {
                        data?.map((item, index) => (
                            <tr
                                key={item._id}>

                                <th className="text-[11px]">
                                    {index + 1}
                                </th>

                                <td>
                                    {item.name}
                                </td>

                                <td>
                                    {item.city}
                                </td>

                                <td>
                                    {item.address}
                                </td>

                                <td className="text-center w-fit">
                                    {item.bathrooms} - {item.bedrooms}
                                </td>

                                <td className="text-center w-fit">
                                    {item.roomSize}
                                </td>

                                <td>
                                    {item.price}$
                                </td>

                                <Link
                                    to={`/updateHouse/${item._id}`}>
                                    <td
                                        className="font-semibold cursor-pointer">
                                        <p className="w-fit p-2 bg-[#00A6ED] text-white rounded-md">
                                            <TbEdit className="text-2xl" />
                                        </p>
                                    </td>
                                </Link>

                                <td
                                    // onClick={() => handleDelete(item._id)}
                                    className="rounded-md font-semibold cursor-pointer w-fit text-white">
                                    <p className="w-fit bg-[#E91E63] p-2 rounded-lg">
                                        <RiDeleteBinLine className="text-2xl" />
                                    </p>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                {/* table body end */}
            </table>
        </div >
    );
};

export default AllHouse;