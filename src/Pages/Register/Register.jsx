import { useForm } from "react-hook-form";

const Register = () => {
    // get the data 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="bg-[#4070F4]">
            <div className="container mx-auto py-14">

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[35%] border-2 py-8 px-8 rounded-md shadow-md mx-auto bg-white">

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
                            value='SUBMIT'
                            name='ingredients'
                            className="w-full py-4 px-3 font-semibold border-2 bg-[#4070F4] text-white rounded-lg  mt-3 cursor-pointer"
                            placeholder="Recipe Ingredients"
                            required />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;