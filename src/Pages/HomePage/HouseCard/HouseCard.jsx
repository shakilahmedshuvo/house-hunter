import { useEffect, useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import ShowModal from "../ShowModal/ShowModal";

const HouseCard = () => {
    // get the data 
    const [house, setHouse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allHouse')
            .then(res => res.json())
            .then(data => {
                setHouse(data)
            })
    }, []);

    return (
        <div className="container mx-auto grid lg:grid-cols-3 pt-12">

            {/* map section start */}
            {
                house?.map((item) => (
                    <div
                        className="border m-3"
                        key={item._id}>
                        <div>

                            <div className="relative">
                                <div className="flex items-center justify-center">
                                    <img
                                        className="w-[95%] rounded-xl"
                                        src={item?.picture}
                                        alt="" />
                                </div>

                                <div className="absolute top-5 right-0 mr-5 bg-black text-white text-center px-6 py-1 rounded-full font-semibold text-sm bg-opacity-95">
                                    Price: {item?.price}$
                                </div>
                            </div>

                            <div className="mx-5 mt-3">
                                <p className="font-medium text-gray-600">
                                    House Owner Name:
                                </p>

                                <h2 className="font-bold text-2xl">
                                    {item?.name}
                                </h2>

                                <p className="text-sm text-gray-600 flex items-center mt-1">
                                    <MdOutlinePhone className="text-base mr-1" /> House Owner Phone Number: {item?.phone}
                                </p>

                                <h2 className="text-xl font-semibold mt-3 mb-1">
                                    House Details:
                                </h2>

                                <h2 className="font-medium text-gray-600">
                                    House Address: {item?.address}
                                </h2>
                                <h2 className="font-medium text-gray-600">
                                    House City: {item?.city}
                                </h2>
                                <h2 className="font-medium text-gray-600">
                                    House Bedrooms & Bedrooms: {item?.bedrooms} & {item?.bathrooms}
                                </h2>

                                <button
                                    onClick={() => document.getElementById('my_modal_1').showModal()}
                                    className="w-full bg-black text-white py-4 font-semibold rounded-md mt-6 mb-4">
                                    Book This House
                                </button>
                                <ShowModal />
                            </div>

                        </div>
                    </div>
                ))
            }
            {/* map section end */}

        </div>
    );
};

export default HouseCard;