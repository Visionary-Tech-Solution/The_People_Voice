import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Assets/Photos/brain.png'
import { FaShare, FaUserCircle } from 'react-icons/fa';
import vector from '../../Assets/Photos/Vector (2).png'
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from '../../apiService/axios';
import { MdOutlineReadMore } from 'react-icons/md';
import ModelShare from '../shareModel/ModelShare';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    async function blogFunction() {
        try {
            axios.get("/blogs/")
                .then(res => {
                    console.log(res.data, "ok blog");
                    setBlog(res.data)
                })
        } catch (error) {

        }
    }
    useEffect(() => {
        blogFunction()
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { pathname } = useLocation();

    return (
        <div className='  pb-[60px]' id='blog'>
            <div className='container-ml'>
                <div className='pt-[10px] text-primary'>
                    <h1 className='  text-[40px] px-3 border-l-[5px] border-primary h-[60px] my-[48px] '>The Peoples Voice</h1>
                </div>
                {pathname == "/blog" ? <div > <BlogAll blog={blog} />  </div> : <div
                    className='arrow_no_margin  pb-5 '>
                    <Carousel responsive={responsive}   >
                        {blog.map(item => <div className=' py-5 rounded-lg xl:px-12 lg:px-8 md:px-5 px-3 xl:h-[600px] lg:h-[500px]  h-[450px] border border-red-400/30' key={item.id}>
                            <div className='grid grid-cols-3 gap-4   justify-between'>

                                <div className=' col-span-2 pb-5'>
                                    <h1 className='xl:text-3xl lg:text-2xl text-xl text-black  '>{item.title}</h1>
                                    <p className='xl:text-xl lg:text-base text-sm mt-3 mb-5 '>{item.user.username}</p>
                                    <div dangerouslySetInnerHTML={{ __html: item.content.slice(0, 400) }} className='xl:text-xl lg:text-base text-sm'>
                                    </div>
                                </div>
                                <div className="flex items-center    image-full">
                                    <figure className='object-contain'><img src={item.image} alt="Shoes" className='object-contain' /></figure>
                                </div>
                            </div>
                        </div>
                        )}
                    </Carousel>
                </div>
                }
            </div>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 mt-7 container-ml '>
                {
                    //   data.slice(0,sliceNumber).map(item => <BlogAll  />)
                }

            </div>
            <div className='text-center mb-7 mt-7 text-white'>
                {
                    // toggler && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button>
                }
            </div>
        </div>
    );
};

export default Blog;


// reading card design here 
export const BlogAll = ({ blog }) => {
    const [blogMid, setBlogMid] = useState({})
    useEffect(() => {
        async function getBlogMid() {
            try {
                const result = await axios.get("/blogpage/1/")
                console.log(result);
                setBlogMid(result.data)
            } catch (error) {

            }
        }


        getBlogMid()
    }, [])
    return (
        <div className='whitespace-normal break-words'>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 place-content-center justify-center gap-x-6 gap-y-6  p-4'>
                <div className=' '>
                    <div>
                        <h1 className='text-3xl mb-3'>Top Stories</h1>
                        <div className='border mb-3'></div>
                    </div>
                    {
                        blog.slice(0, 1).map(item => <div key={item.id} className='shadow-md p-5 rounded-md' >
                            <img src={item?.image} alt='loading' className='lg:h-44 md:h-32 h-28  object-contain ' />
                            <h1 className='my-4 xl:text-3xl lg:text-2xl md:text-xl text-base'>{item.title} </h1>
                            <div dangerouslySetInnerHTML={{ __html: item.content.slice(0, 300) }} className=' xl:text-xl lg:text-base text-sm'/>

                            <div className='mt-7 text-right'>
                                <Link className='py-2 px-3 rounded bg-primary text-white  hover:underline hover:text-red' to={`/blog/${item.id}`}>See More</Link>
                            </div>
                        </div>)
                    }
                </div>
                <div className=' shadow-md p-5 rounded-md mt-16'>
                    <img src={blogMid?.image} alt='loading' className='object-contain w-full' />
                    <h1 className='my-4 xl:text-3xl lg:text-2xl md:text-xl text-base'>{blogMid.header} </h1>
                    <div dangerouslySetInnerHTML={{ __html: blogMid.description }}  className=' xl:text-xl lg:text-base text-sm'/>
                </div>
                <div className=' '>
                    <div>
                        <h1 className='text-3xl mb-3'>Recent Stories</h1>
                        <div className='border mb-3'></div>
                    </div>
                    {
                        blog.slice(0, 1).map(item => <div key={item.id} className='shadow-md p-5  rounded-md'>
                            <div className='flex items-center  '>
                                <div>
                                    <img src={item?.image} alt='loading' className=' lg:h-44 md:h-32 h-28 object-contain ' />
                                </div>
                                <div>
                                    <span className='mx-3 block'>Admin</span>
                                    <span className='mx-3 block'>May 30</span>
                                </div>
                            </div>
                            <h1 className='my-4 text-2xl'>{item.title} </h1>
                            <div dangerouslySetInnerHTML={{ __html: item.content.slice(0, 300) }} className=' xl:text-xl lg:text-base text-sm' />

                            <div className='mt-7 text-right'>
                                <Link className='py-2 px-3 rounded bg-primary text-white  hover:underline hover:text-red' to={`/blog/${item.id}`}>See More</Link></div>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 gap-4'>
                {blog.map(item => <BlogCard key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export const BlogCard = ({ item }) => {
    return (
        <>
            <div className='p-5 shadow-md rounded-md'>
                <img src={item?.image} alt='loading' className='h-40 w-full' />
                <h1 className='my-4 xl:text-4xl lg:text-3xl md:text-2xl text-xl'> {item.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: item.content.slice(0, 300) }} className='xl:text-xl lg:text-base text-sm' />

                <div className='mt-7 text-right'>
                    <Link className='py-2 px-3 rounded bg-primary text-white  hover:underline hover:text-red' to={`/blog/${item.id}`}>See More</Link>
                </div>
            </div>
        </>
    );
};

export const BlogDetails = () => {
    const datas = window.location.href;
    const [blog, setBlog] = useState({});
    const { id } = useParams()

    useEffect(() => {
        async function blogFunction() {
            try {
                axios.get(`/blog/${id}/`)
                    .then(res => {
                        console.log(res.data, "ok blog");
                        setBlog(res.data)
                    })
            } catch (error) {

            }
        }
        blogFunction()
    }, [id])
    return (
        <div className='text-center container-ml my-7'>
            <div className='flex items-center justify-center' >
                <div>
                    <h1 className='my-5 text-5xl'> {blog.title}</h1>
                    <img src={blog.image} alt='loaded the imgs' className='my-5' />
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    <div className='flex justify-end mx-1 items-center text-black mt-5'>
                        <span className='text-base '>

                            <ModelShare data={datas} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};