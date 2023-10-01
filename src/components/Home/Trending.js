import React from 'react';

import Carousel from 'react-multi-carousel';
import img2 from '../../Assets/People House Image & Data/mike.jpg';
import img3 from '../../Assets/People House Image & Data/allmike.jpg';
import img4 from '../../Assets/People House Image & Data/mike1.jpg';
import img1 from '../../Assets/People House Image & Data/mikeprimary.jpg';

const Trending = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container-ml mb-[170px]'>
            <div>
                <div>

                    <div className='flex justify-between'>
                        <span className='px-3 text-[30px] mb-6'>Popular & Trending</span>
                        <span className='text-[20px] mb-6'>See All</span>
                    </div>
                </div>
                <div>

                </div>
                <div
                    className='arrow_no_margin  '>
                    <Carousel responsive={responsive}>
                        {
                            [img1, img2, img3, img4, img1,].map((item,index) => <div  key={index}>
                                <div className='pl-[40px] pr-[13px] mx-2  shadow-lg shadow-offset-x w-full shadow-offset-y shadow-blur shadow-color  ' >
                                    <img src={item} alt="loading" width="100%" height="300px" className='h-[300px]' />
                                </div>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Trending;