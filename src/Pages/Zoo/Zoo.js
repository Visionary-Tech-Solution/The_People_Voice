import React, { useState } from 'react';
import img from '../../Assets/Photos/Video Marketing.png';
import img1 from '../../Assets/Icons/Cart.png';
import img2 from '../../Assets/Photos/Vector (1).png'
import imgs from '../../Assets/Photos/countdownflag.png'
import { Link, useLocation } from 'react-router-dom';
const Zoo = () => {
    const data = [2, 3, 4, 5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 5, 6, 5, 6, 5, 6, 3, 2, 1, 2, 3, 4, 3];
    const { pathname } = useLocation()
    const [toggler, setTogller] = useState(true)
    const [sliceNumber, setSliceNumber] = useState(10);
    const addSlice = e => {
        if (data.length < sliceNumber) {
            setTogller(false)
        }
        else {
            setSliceNumber(sliceNumber + 10)
        }

    }

    return (
        <div className='container-ml mb-[100px]' id='news'>
            <div>
                <div>
                    <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'> Zoo</h1>
                    <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> Content Here</p>
                </div>


            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 my-7'>
                {data.slice(0, sliceNumber).map(item => <ZooAll />)}


            </div>
            <div className='text-center mb-7 mt-7 text-white'>
                {
                    pathname === '/news' ? toggler && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button> : ""
                }

            </div>
        </div>
    );
};

export default Zoo;

// News card design here 
export const ZooAll = () => {
    return (
        <div className='pl-[40px] pr-[13px] mx-2  rounded shadow-lg'>
            <div className='   pt-[37px] mb-[35px] text-center'>
                <div  >  <h1>User</h1> </div>
                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'> Reason </p>
                <p className='text-dark text-[20px] py-[2px] mx-8   mt-5'> Abusive Image Video </p>
            </div>
            <div className='text-center'>
                <Link to="/news/1">
                    <button className='bg-primary px-5 py-3 rounded text-white my-5'>Submit & Request</button>
                </Link>
            </div>

        </div>
    );
};

//  details of every News 
export const NewsDetails = () => {
    return (
        <div className='text-center container-ml my-7'>
            <div className='flex items-center justify-center' >
                <div>
                    <h1 className='my-5'>header of the news</h1>
                    <img src='' alt='loaded the imgs' className='my-5' />
                    <p>

                        We, the members of this community, pledge to honor and protect the sacrifices made by our military heroes who shed their blood to secure our freedom and ensure the future of our nation. We recognize that their sacrifices were hard-won and the stories lying beneath the headstones at Arlington Cemetery and other military cemeteries across the country are the seeds of freedom that must be protected at all costs.

                    </p>
                </div>
            </div>
        </div>
    );
};

