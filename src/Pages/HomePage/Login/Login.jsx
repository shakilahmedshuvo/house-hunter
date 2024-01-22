import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    // get the data 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-100 backdrop-blur-3xl">
            <div className="container mx-auto py-56">

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[35%] border-2 py-8 px-8 rounded-md shadow-sm mx-auto bg-white">

                    <div className="text-4xl font-bold mb-8">
                        <h2>
                            Login
                        </h2>
                    </div>



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

                    <br />

                    <div className="font-medium text-gray-500">
                        If you dont have any account please <Link to={"/"} className="hover:underline text-blue-500">Register</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;