import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const HouseBooking = () => {
    const [house, setHouse] = useState([]);

    useEffect(() => {
        fetch("https://house-hunter-server-production-10e7.up.railway.app/booking")
            .then(res => res.json())
            .then(data => {
                setHouse(data);
                // console.log(data);
            })
    }, []);

    // handleDelete function
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure delete this house renter?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://house-hunter-server-production-10e7.up.railway.app/bookingDelete/${id}`, {
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
        <div className="overflow-x-auto w-[90%]">
            <div>
                <h2 className="text-center text-3xl mt-16 mb-4 text-[#4070F4]">
                    List Of All Renters & Renters Info
                </h2>
            </div>
            <table className="table">
                {/* head start */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Renter Name</th>
                        <th>Renter Email</th>
                        <th>Renter Phone Number</th>
                        <th className="text-[#E91E63] text-sm">
                            Delete Renter
                        </th>
                    </tr>
                </thead>
                {/* table body start */}
                <tbody>
                    {
                        house?.map((item, index) => (
                            <tr
                                key={item?._id}>

                                <th className="text-[11px]">
                                    {index + 1}
                                </th>

                                <td>
                                    {item?.name}
                                </td>

                                <td>
                                    {item?.email}
                                </td>

                                <td>
                                    {item?.phone}
                                </td>

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
        </div >
    );
};

export default HouseBooking;