import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateHouse = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    // console.log(data);
    const { name, address, city, bedrooms, bathrooms, roomSize, picture, date, price, phone, description, _id } = data;
    // console.log(data);


    // get the data from form
    const { register, handleSubmit, reset } = useForm();

    // handleUpdate function
    const onSubmit = (data) => {
        const name = data.name;
        const address = data.address;
        const city = data.city;
        const bedrooms = data.bedrooms;
        const bathrooms = data.bathrooms;
        const roomSize = data.roomSize;
        const picture = data.picture;
        const date = data.date;
        const price = parseFloat(data.price);
        const phone = data.phone;
        const description = data.description;

        // get all the data 
        const allDataUpdate = {
            name,
            address,
            city,
            bedrooms,
            bathrooms,
            roomSize,
            picture,
            date,
            price,
            phone,
            description
        };
        // console.log(allDataUpdate);

        // data post to the backend server( mongodb )
        fetch(`https://house-hunter-server-production-10e7.up.railway.app/allHouse/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDataUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Update',
                        icon: 'success',
                        confirmButtonText: 'Updated'
                    })
                    reset();
                    navigate('/dashboard/allHouse')
                }
            })
    };

    return (
        <div className="w-[75%] mx-auto font-bold mb-10">

            <h2 className="text-4xl font-bold text-center text-[#4070F4] mt-7 mb-12">
                Update The House Info
            </h2>

            {/* form section start */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* owner name */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House Owner Name*
                            </span>
                        </label>
                        <input
                            type="text"
                            {
                            ...register("name", { required: true })
                            }
                            defaultValue={name}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house Address */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House Address*
                            </span>
                        </label>
                        <input
                            type="text"
                            name="address"
                            {
                            ...register("address", { required: true })
                            }
                            defaultValue={address}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house city */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House City*
                            </span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            {
                            ...register("city", { required: true })
                            }
                            defaultValue={city}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house bedrooms */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House Bedrooms*
                            </span>
                        </label>
                        <input
                            type="number"
                            name="bedrooms"
                            {
                            ...register("bedrooms", { required: true })
                            }
                            defaultValue={bedrooms}
                            className="input input-bordered"
                            required />
                    </div>


                    {/* house bathrooms */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House Bathrooms*
                            </span>
                        </label>
                        <input
                            type="number"
                            name="bathrooms"
                            {
                            ...register("bathrooms", { required: true })
                            }
                            defaultValue={bathrooms}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house room size */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter Room Size*
                            </span>
                        </label>
                        <input
                            type="number"
                            name="roomSize"
                            {
                            ...register("roomSize", { required: true })
                            }
                            defaultValue={roomSize}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house picture */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter Renter House Picture URL*
                            </span>
                        </label>
                        <input
                            type="text"
                            name="picture"
                            {
                            ...register("picture", { required: true })
                            }
                            defaultValue={picture}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house availability date */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House Availability Date*
                            </span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            {
                            ...register("date", { required: true })
                            }
                            defaultValue={date}
                            className="input input-bordered"
                            required />
                    </div>

                    {/* house rent per month */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter House Rent Per Month*
                            </span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            {
                            ...register("price", { required: true })
                            }
                            defaultValue={price}
                            className="input input-bordered"
                            required />
                    </div>

                    {/*  phone number */}
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                Enter Owner Phone Number*
                            </span>
                        </label>
                        <input
                            type="number"
                            name="phone"
                            {
                            ...register("phone", { required: true })
                            }
                            defaultValue={phone}
                            className="input input-bordered"
                            required />
                    </div>
                </div>

                {/* Description */}
                <div className="form-control mt-2">
                    <label className="label">
                        <span
                            className="label-text">
                            Enter House Description*
                        </span>
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        {
                        ...register("description", { required: true })
                        }
                        defaultValue={description}
                        className="input input-bordered pt-2 h-20"
                        required />
                </div>


                <div className="form-control mt-5">
                    <input
                        type="submit"
                        value='Update This Rent House'
                        className="w-full py-4 px-3 font-semibold border-2 bg-[#4070F4] text-white rounded-lg  mt-3 cursor-pointer" />
                </div>

            </form>
        </div>
    );
};

export default UpdateHouse;