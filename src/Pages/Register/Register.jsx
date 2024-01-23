import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    // get the data 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const number = data.number;
        const roll = data.roll;
        const password = data.password;

        // get all the data 
        const allData = {
            name,
            email,
            number,
            roll,
            password
        };

        // post data in mongodb
        fetch('https://house-hunter-server-production-10e7.up.railway.app/userPost', {
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
                        title: "Your Resister has been Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    navigate('/dashboard/overview')
                }
            })
        console.log(data);
    }

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-100 backdrop-blur-3xl">
            <div className="container mx-auto py-10">

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[35%] border-2 py-8 px-8 rounded-md shadow-sm mx-auto bg-white">

                    <div className="text-4xl font-bold mb-8">
                        <h2>Registration</h2>
                    </div>

                    <>
                        <span className="my-4 font-semibold">
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

                    <br />

                    <>
                        <span className="my-4 font-semibold">
                            Enter Your Email Adders*
                        </span>
                        <br />
                        <input
                            type="email"
                            name='name'
                            {
                            ...register("email", { required: true })
                            }
                            className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                            placeholder="Enter Email Address"
                            required />
                    </>

                    <br />

                    <>
                        <span className="my-4 font-semibold">
                            Enter Your Phone Number*
                        </span>
                        <br />
                        <input
                            type="number"
                            maxLength={11}
                            name='name'
                            {
                            ...register("phone", { required: true })
                            }
                            className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                            placeholder="EnterYourPhone Number"
                            required />
                    </>

                    <br />


                    <>
                        <span className="my-4 font-semibold">
                            Select Your Roll*
                        </span>
                        <br />
                        <select
                            className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                            {
                            ...register("roll")
                            }>
                            <option value="House Renter">
                                House Renter
                            </option>
                            <option value="House Owner">
                                House Owner
                            </option>
                        </select>
                    </>

                    <br />

                    <>
                        <span className="my-4 font-semibold">
                            Enter Your Password*
                        </span>
                        <br />
                        <input
                            type="password"
                            name='name'
                            {
                            ...register("password", { required: true })
                            }
                            className="w-full py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg my-3"
                            placeholder="Enter Your Password"
                            required />
                    </>

                    <div
                        className="flex justify-center">
                        <input
                            type="submit"
                            value='Register'
                            className="w-full py-4 px-3 font-semibold border-2 bg-[#4070F4] text-white rounded-lg  mt-3 cursor-pointer"
                            required />
                    </div>

                    <br />

                    <div className="font-medium text-gray-500">
                        If you have any account please <Link to={"/login"} className="hover:underline text-blue-500 duration-300">Login</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;