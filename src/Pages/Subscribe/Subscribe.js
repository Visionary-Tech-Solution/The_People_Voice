import React, { useEffect, useState } from 'react';
import img from '../../Assets/Photos/download.png'
import ModalSub from './ModalSub';
const toggleData = [
    {
        id:"price_1NKlZIHGm5JMFetDUh2mx2Dg",
        name: "Liberty Plan",
        amount: 0.99, m: 3.00, y: 36.00,
        des: "By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",
        subH: "Choose a billing period and finish the upgrade process"
    },
    {
        id:'price_1NKlaFHGm5JMFetDIUhZhIYd',
        name: "Patriot Plan",
        amount: 30, m: 2.00, y: 24.00,
        des: "By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",
        subH: "Choose a billing period and finish the upgrade process"
    },
    {
        id:'price_1NKlawHGm5JMFetDAKpghtOW',
        name: "Eagle Plan",
        amount: 30, m: 2.00, y: 24.00,
        des: "By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",
        subH: "Choose a billing period and finish the upgrade process"
    },
    {
        id:'price_1NKlbmHGm5JMFetDeJ5hTru3',
        name: "Stars & Stripes Plan",
        amount: 60, m: 5.00, y: 60.00,
        des: "By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",
        subH: "Choose a billing period and finish the upgrade process"
    },
    {
        id:'price_1NKldVHGm5JMFetDSRKccgiB',
        name: "Founding Fathers Plan",
        amount: 80, m: 3.00, y: 36.00,
        des: "By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",
        subH: "Choose a billing period and finish the upgrade process"
    },
]
const Subscribe = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState({})
    const handle = e => {
        setData(e)
        setToggle(true);
        // <ModalSub/>
    }
    const [togglerValue, setTogglerVallue] = useState(false)

    const toggleButtonclassName = togglerValue ? 'toggle toggle-accent text-red-700 bg-red focus:bg-[#002868]  ' : 'toggle toggle-accent     ';
 
    return (
        <div className='container-ml mt-12'>
              
            {
                toggle && <ModalSub data={data} />
            }
            <div className='text-center'>
                <div className='mb-[22px]'>
                    <h1 className='font-black mb-[32px] text-[40px]'>Choose your Marketing Plan</h1>
                    <p className='flex justify-center items-center mb-[16px] text-[18px]'>
                        <span>
                            <img alt='' src={img} className='w-[21px] h-[15px]' />
                        </span>
                        <span>Cancel Anytime</span>
                    </p>
                    <div className='flex justify-center'>
                        <div className="form-control   ">
                            <label className="cursor-pointer label text-red-700 ">
                                <span className="label-text text-[17px] mx-4  ">Billed Monthly</span>
                                <input type="checkbox" className={toggleButtonclassName} onChange={(e) => { setTogglerVallue(!togglerValue) }} />
                                <span className="label-text text-[17px]  mx-4">Billed Yearly</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* card design code here  */}
            <div>
                <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2'>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#B22234] pt-[79px] border  '  >
                            <h2 className='text-white text-[24px] font-bold '>Liberty Plan</h2>
                            <h1 className='text-white text-[64px] font-bold mt-[27px]'>$0.99</h1>
                            <p className='text-[#FFFFFFB2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>

                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor shadow-lg hover:underline  cursor-pointer" onClick={() => handle(toggleData[0])}>Subscribe
                            </label>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#ffffff] pt-[79px] border' style={{}}>
                            <h2 className='text-[#000000] text-[24px] font-bold '>Patriot Plan</h2>
                            <h1 className='text-[#000000] text-[64px] font-bold mt-[27px]'>$2</h1>
                            <p className='text-[#000000B2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor shadow-lg hover:underline cursor-pointer" onClick={() => handle(toggleData[1])}>Subscribe
                            </label>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#002868] pt-[79px] border' style={{}}>
                            <h2 className='text-white text-[24px] font-bold '>Eagle Plan</h2>
                            <h1 className='text-white text-[64px] font-bold mt-[27px]'>$8</h1>
                            <p className='text-[#FFFFFFB2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor shadow-lg hover:underline cursor-pointer" onClick={() => handle(toggleData[2])}>Subscribe
                            </label>
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#B22234]  lg:pt-[79px] md:pt-[55px] border' style={{}}>
                            <h2 className='text-white text-[24px] font-bold '>Stars
                                &
                                Stripes Plan</h2>
                            <h1 className='text-white text-[64px] font-bold mt-[27px]'>$15</h1>
                            <p className='text-[#FFFFFFB2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor shadow-lg hover:underline cursor-pointer" onClick={() => handle(toggleData[3])}>Subscribe
                            </label>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#ffffff] pt-[65px] border' style={{}}>
                            <h2 className='text-[#000000] text-[24px] font-bold '>Founding
                                Fathers Plan</h2>
                            <h1 className='text-[#000000] text-[64px] font-bold mt-[12px] mb-[11px]'>$20</h1>
                            <p className='text-[#000000B2] text-[14px]  font-normal   mb-[20px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor shadow-lg hover:underline cursor-pointer" onClick={() => handle(toggleData[4])}>Subscribe
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;