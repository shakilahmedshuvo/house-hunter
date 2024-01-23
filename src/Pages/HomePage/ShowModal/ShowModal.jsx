import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ShowModal = () => {
    // get the data 
    const { register, handleSubmit, reset } = useForm();
    const navigation = useNavigate();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const phone = data.phone;

        // get all the data 
        const allData = {
            name,
            email,
            phone
        };

        // post data in mongodb
        fetch('https://house-hunter-server-production-10e7.up.railway.app/bookingPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Booking has been Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    navigation('/dashboard/houseBooking')
                }
            })
        console.log(data);
    };

    return (
        <div>
            <dialog
                id="my_modal_1"
                className="modal">
                <div className="modal-box">

                    <div className="modal-action mt-0">
                        <form method="dialog">
                            <button>
                                <IoCloseCircle className="text-4xl text-red-500" />
                            </button>
                        </form>
                    </div>

                    <h3 className="font-bold text-center text-2xl mt-2 mb-4">
                        Book This House!
                    </h3>

                    <form
                        onSubmit={handleSubmit(onSubmit)}>
                        <>
                            <span className="my-4 font-semibold text-sm">
                                Enter Your Full Name*
                            </span>
                            <br />
                            <input
                                type="text"
                                name='name'
                                {
                                ...register("name", { required: true })
                                }
                                className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                                placeholder="Your Full Name"
                                required />
                        </>
                        <>
                            <span className="my-4 font-semibold text-sm">
                                Enter Your Email Address*
                            </span>
                            <br />
                            <input
                                type="email"
                                name='email'
                                {
                                ...register("email", { required: true })
                                }
                                className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                                placeholder="Your Email"
                                required />
                        </>
                        <>
                            <span className="my-4 font-semibold text-sm">
                                Enter Your Phone Number*
                            </span>
                            <br />
                            <input
                                type="number"
                                name='Phone'
                                {
                                ...register("phone", { required: true })
                                }
                                className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                                placeholder="Your Phone Number"
                                required />
                        </>

                        {/* submit btn */}
                        <div
                            className="flex justify-center">
                            <input
                                type="submit"
                                value='I want to book this house!'
                                className="w-full py-4 px-3 font-semibold border-2 bg-[#4070F4] text-white rounded-lg  mt-3 cursor-pointer"
                                required />
                        </div>
                    </form>

                </div>
            </dialog>
        </div>
    );
};

export default ShowModal;