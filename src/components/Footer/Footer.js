import React from 'react';

const Footer = () => {
    return (
        <div className='mt-[127px]'>
            <div className=' bg-[#002868]   '>
                <div className='grid grid-cols-12   '>
                    <div className='col-span-6 newstler  -mt-10 flex items-center  justify-center '>
                        <h3 className='text-white text-center '>
                            <span className='text-[20px]'>
                                Subscribe To Our
                            </span>
                            <br />
                            <span className='text-[30px]'>
                                NEWSLETTER </span>
                        </h3>
                    </div>
                    <div className='col-span-6'>
                        <div className="form-control mt-[50px] pb-10 rounded-[1px] ">

                            <label className="input-grou  w-full rounded-[10px] ">
                                <input type="text" placeholder="Enter your Email here " className="input  input-bordered w-[60%]   rounded-l-[10px] rounded-[0px]" />
                                <span className='bg-[#B22234] p-[13.5px] rounded-r-[10px] text-white'>Stay Informed</span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center my-[64px] pb-[50px]'>
                <div className='text-center text-black text-[20px]'>
                    <p>The Peoples House & All Rights Reserved <br />
                        &#169;2023</p>
                    <p>This Site Powered By Patriots</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;