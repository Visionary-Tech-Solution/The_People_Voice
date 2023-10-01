import React, { useState } from 'react';
import img from '../../Assets/Photos/Video Marketing.png';
import img1 from '../../Assets/Photos/Telecom.png';
import img2 from '../../Assets/Photos/Vector (1).png'
import imgs from '../../Assets/Photos/countdownflag.png'
import { Link, useLocation } from 'react-router-dom';
const News = () => {
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
                    <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>News</h1>
                    <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> Content</p>
                </div>

                {pathname === '/news' ? <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                </div> : <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                    <div  >
                        <div className=' '>
                            <div className='relative'>
                                <img src={imgs} className='container-object' alt="" />
                                <h1 className='absolute translate-1/2 top-1/3 ml-12 text-center text-white text-3xl'>Video Streaming</h1>
                            </div>

                        </div>
                    </div>
                    <div  >
                        <div className='h-[300px]  pl-[40px] pr-[13px]   shadow-lg shadow-offset-x shadow-offset-y shadow-blur shadow-color'>
                            <div className='flex items-center pt-[37px] mb-[35px]'>
                                <div  >  <img src={img1} alt='' height="50px" width="50px" /></div>
                                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Telecom</p>
                            </div>
                            <div className='pb-[41px]'>
                                <span className='text-[20px] font-normal'>Cutting-edge and cost-effective network equipment: CPE, routers, gateways, networking adapters, thin clients. </span>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='pl-[40px] pr-[13px]   shadow-lg shadow-offset-x  h-[300px]  shadow-offset-y shadow-blur shadow-color'>
                            <div className='flex items-center pt-[37px] mb-[35px]'>
                                <div  >  <img src={img2} alt='' height="50px" width="50px" /></div>
                                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Automotive</p>
                            </div>
                            <div className='pb-[41px]'>
                                <span className='text-[20px] font-normal'>Eco-friendly solutions for electric vehicles, IVI, fault-tolerant hardware and software platforms for ADAS.</span>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 my-7'>
                {
                    pathname === '/news' && data.slice(0, sliceNumber).map(item => <NewsAll />)
                }

            </div>
            <div className='text-center mb-7 mt-7 text-white'>
                {
                    pathname === '/news' ? toggler && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button> : ""
                }

            </div>
        </div>
    );
};

export default News;

// News card design here 
export const NewsAll = () => {
    return (
        <div className='pl-[40px] pr-[13px] mx-2  rounded shadow-lg'>
            <div className='flex items-center pt-[37px] mb-[35px]'>
                <div  >  <img src={img2} alt='' height="50px" width="50px" /></div>
                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Today’s Article</p>
            </div>
            <div className='pb-[41px]'>
                <span className='text-[20px] font-normal'>Set-top boxes and embedded software for the broadcasting market, including DVB, OTT, and IPTV solutions. </span>
            </div>
            <Link to="/news/1">
                <button className='bg-primary px-5 py-3 rounded text-white my-5'>Details</button>
            </Link>

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

