import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Invite = () => {
 

    return (
        <div className=" ">
            <div className="  "  >
                <div className=' container-ml   '>
                    <div>
                        <h1 className='text-black pb-5 text-center text-4xl'>Request Contract Item</h1>
                    </div>
                    <div>
                        <form className="space-y-4 pb-10 text-black">
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <CustomeLabel name={"First name"} />
                                    <input type="text" placeholder="Enter Your First Name" className="block   px-5 py-3 mt-2 text-[#00000080]  placeholder-[#00000080]  bg-[#ffffff33] shadow-lg rounded-lg w-full border border-black" required />
                                </div>
                                <div>
                                    <CustomeLabel name={"Last name"} />
                                    <input type="email" placeholder="Enter Your Last Name" className="block  px-5 py-3 mt-2 text-[#00000080]  placeholder-[#00000080] bg-[#ffffff33]  shadow-lg rounded-lg w-full border border-black" required />
                                </div>
                                <div>
                                    <CustomeLabel name={"Description"} />
                                    <textarea type="text" placeholder="Enter Description" className="block   px-5 py-3 mt-2 text-[#00000080] placeholder-[#00000080] bg-[#ffffff33]  shadow-lg rounded-lg  w-full border border-black" />
                                </div>

                            </div>
                            <div className='text-center mb-[30px]'>
                                <div className='pb-6 text-center flex justify-center'>

                                    {/* <ReCAPTCHA
                                                className="custom-recaptcha"
                                                sitekey='6Le4qNklAAAAADWDILZSu-a_qWj2PBfFlbFVcbHW'
                                                onChange={onChange}
                                                theme='gray'
                                                required
                                            /> */}

                                </div>
                            </div>
                            <button className="bg-primary text-white mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide   capitalize transition-colors duration-300 transform bg-[#FFFFFFB2] rounded-lg hover:bg-blue-400 flex justify-center items-center gap-4 mt-20">
                                <span className='text-[#ffffff]'>Contract</span>

                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Invite;
export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-black capitalize">

            {name}


        </label>
    )

}