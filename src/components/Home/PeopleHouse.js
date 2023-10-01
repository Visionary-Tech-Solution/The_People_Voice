import React, { useEffect, useState } from 'react';
import img from '../../Assets/Photos/countdownflag.png'
import { Link } from 'react-router-dom';
import PeopleHousemodal, { PeopleHouseAudio } from '../homeSubComponents/PeopleHouse';
import { useCookies } from 'react-cookie';
const PeopleHouse = () => {
    const [week, setweek] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [year, setYear] = useState(0)
    const [month, setMonth] = useState(0)
    const [cookies] = useCookies(["token"]);
  const token = cookies.token; 
    useEffect(() => {
        const compareDate = new Date('2024-11-05');
        // const chicagoTime = compareDate.toLocaleString('en-US', { timeZone: 'America/Chicago' });
        compareDate.setDate(compareDate.getDate() + 7);
        //just for this demo today + 7 week
        const timer = setInterval(() => {
            const difference = timeBetweenDates(compareDate);
            if (difference <= 0) {
                clearInterval(timer);
            } else {
                setYear(Math.floor(difference / (1000 * 60 * 60 * 24 * 365)));
                setMonth(Math.floor((difference / (1000 * 60 * 60 * 24 * 30.44)) % 12));
                setweek(Math.floor((difference / (1000 * 60 * 60 * 24)) % 7));
                setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
                setMinutes(Math.floor((difference / 1000 / 60) % 60));
                setSeconds(Math.floor((difference / 1000) % 60));
                //   setYear(Math.floor((week / 365)));

            }
        }, 1000);

        return () => clearInterval(timer);
    }, [week]);

    function timeBetweenDates(toDate) {
        const now = new Date();
        const difference = toDate.getTime() - now.getTime();
        return difference;
    }

    return (
        <div className='container-ml mt-[14px] pb-[100px]'>

            <div className=' flex gap-x-10 gap-y-10  flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:items-center '>
                <div className=' w-fit'>
                    <div>
                        <div className='my-[55px] '>
                            <h3 className='text-black font-600 text-[50px] mb-[18px]   '>The Peoples House</h3>
                            <p className='text-black text-[30px] font-600 mb-[25px]  '>Born In The Blood Of Patriots</p>

                            <p className='text-black text-[16px] font-bold    mb-[25px] text-justify'>Once upon a time, in a land of vast beauty and untamed wilderness, brave men and women dared to dream. They dreamt of a nation that would stand for freedom, justice, and the unalienable rights of every individual. A nation where people from all walks of life could come together and build a better future, united in the pursuit of happiness.</p>
                            <div className='flex justify-end    '>
                                <div className='flex justify-center mx-1 flex-col items-center'>
                                    <PeopleHousemodal />
                                </div>
                                <div className='  flex flex-col justify-center mx-1 items-center'>
                                    <PeopleHouseAudio />
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-row flex-col    items-center gap-10 my-8">
                               {
                              token ?  <Link to="/subscribe">
                               <button className="bg-red text-white font-medium py-2 px-5 flex items-center rounded-md gap-6 w-[250px] text-center justify-center my-4">
                                   <span>Subscribe</span>
                               </button>
                           </Link>: <Link to="/signup">
                                    <button className="bg-primary text-white font-medium py-2 px-5 flex items-center rounded-md gap-6 w-[250px] text-center justify-center my-4">
                                        <span>Signup</span>
                                    </button>
                                </Link>
                               
                               }
                                 {
                             token?   
                                   <span> </span>
                              : <Link to="/login">
                                    <button className="bg-red text-white font-medium py-2 px-5 flex items-center rounded-md gap-6 w-[250px] text-center justify-center my-4">
                                        <span>Login</span>
                                    </button>
                                </Link>
                               
                               }
                            

                            </div>
                        </div>

                    </div>
                </div>
                <div className=' xl:w-[600px] lg:w-[500px] w-[350px] mx-auto'>
                    <div className='text-center'>
                        <button className="  px-10 py-2 bg-[#002868] text-[25px] font-700 text-white my-3 rounded-[10px]">Donation</button>
                        <p className='bg-primary  rounded-t-[10px] text-white py-2 lg:text-[20px] md:text-xl text-lg font-800'>Next Presidential Election Starts In:</p>
                       <div >
                       <div className='relative xl:w-[600px] lg:w-[500px] w-[350px]  '>
                            <div>
                                <img alt='' width="100%" className=' ' src={img} />
                            </div>
                            <div className='absolute left-[15%] top-[19%] mx-4 '>

                                <div className=' '>
                              <div className='grid grid-cols-3  gap-x-6 gap-y-3 pr-[47px] lg:pr-0 w-full   '>

                                        <div className='text-white font-semibold lg:text-[30px] md:text-xl text-lg   w-full '>

                                            <p className='bg-red w-full h-5 ml-1 '></p>
                                            <p className='lg:mt-5'>{year}</p>
                                            <p className='lg:mt-3'>Year</p>
                                        </div>
                                        <div className='text-white font-semibold lg:text-[30px] md:text-xl text-lg   '>
                                            <p className='bg-white w-full h-5 ml-1 '></p>
                                            <p className='lg:mt-5'>{month}</p>
                                            <p className='lg:mt-3'>Month</p>
                                        </div>
                                        <div className='text-white font-semibold lg:text-[30px] md:text-xl text-lg'>
                                            <p className='bg-primary w-full h-5 ml-1'></p>
                                            <p className='lg:mt-5'>{week}</p>
                                            <p className='lg:mt-3'>Weeks</p>
                                        </div>

                                        <div className='text-white font-semibold lg:text-[30px] md:text-xl text-lg lg:mt-9'>
                                            <p className='bg-red w-full h-5 px-4 ml-1 '></p>
                                            <p className='lg:mt-5'>{hours} </p>
                                            <p className='lg:mt-3'>Hours</p>
                                        </div>
                                        <div className='text-white font-semibold lg:text-[30px] md:text-xl text-lg lg:mt-9'>
                                            <p className='bg-white w-full h-5 ml-1'></p>
                                            <p className='lg:mt-5'>{minutes} </p>
                                            <p className='lg:mt-3'>Minutes</p>
                                        </div>
                                        <div className='text-white font-semibold lg:text-[30px] md:text-xl text-lg lg:mt-9'>
                                            <p className='bg-primary w-full h-5 ml-1 '></p>
                                            <p className='lg:mt-5'> {seconds} </p>
                                            <p className='lg:mt-3'>Second</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleHouse;


