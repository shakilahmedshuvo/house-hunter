import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";

const AllHouse = () => {
    const [house, setHouse] = useState([]);

    useEffect(() => {
        fetch("https://house-hunter-server-production-10e7.up.railway.app/allHouse")
            .then(res => res.json())
            .then(data => {
                setHouse(data);
                // console.log(data);
            })
    }, []);


    // delete function
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure delete this house?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://house-hunter-server-production-10e7.up.railway.app/allHouse/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = house?.filter(data => data._id !== id);
                                setHouse(remaining);
                            }
                        })
                }
            })
    };

    return (
        <div className="overflow-x-auto w-full">
            <div>
                <h2 className="text-center text-3xl mt-16 mb-4 text-[#4070F4]">
                    All House Owners & Owners Info
                </h2>
            </div>
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
                        house?.map((item, index) => (
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
                                    to={`/update/${item._id}`}>
                                    <td
                                        className="font-semibold cursor-pointer">
                                        <p className="w-fit p-2 bg-[#00A6ED] text-white rounded-md">
                                            <TbEdit className="text-2xl" />
                                        </p>
                                    </td>
                                </Link>

                                <td
                                    onClick={() => handleDelete(item._id)}
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
        </div>
    );
};

export default AllHouse;