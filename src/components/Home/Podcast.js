import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import axios from '../../apiService/axios';
import ModelShare from '../shareModel/ModelShare';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { BsFillPlayFill } from 'react-icons/bs';
const Podcast = () => {
  const { pathname } = useLocation()
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
      breakpoint: { max: 1024, min: 664 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1
    }
  };
  const data = [2, 3, 4, 5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 5, 6, 5, 6, 5, 6, 3, 2, 1, 2, 3, 4, 3];
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
  const [podcast, setPodcast] = useState([]);
  async function blogFunction() {
    try {
      axios.get("/podcasts/")
        .then(res => {
          console.log(res.data, "ok blog");
          setPodcast(res.data)
        })
    } catch (error) {

    }
  }
  useEffect(() => {
    blogFunction()
  }, [])
  return (
    <div >
      <div className='container-ml mb-6' id='podcast'>
        <div>
          <div>
            <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Podcast</h1>
            <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> Here we speak for ourselves</p>
            {pathname == '/podcast' ? <></> : <div className='flex justify-between'>
              <span className='px-3 text-[30px] mb-5'>For You</span>
              <Link to='/podcast' className='hover:underline'> <span className='text-[20px] mb-6'>See All</span></Link>
             
            </div>}
          </div>
          <div>

          </div>
          {
            pathname == '/podcast' ? <></> :
              <div
                className='arrow_no_margin  '>
                <Carousel
                  itemclassName=" "
                  responsive={responsive}   >
                  {
                    podcast.map((item, index) => <div key={index} >
                      <div className='mx-3 ' >
                        <img src={`${item.image}`} alt="loading" width="100%" height="300px" className='lg:h-72 md:h-52 h-44' />
                      </div>
                    </div>)
                  }
                </Carousel>
              </div>
          }
        </div>
        <div className='mt-7   '>
          {
            pathname === '/podcast' && podcast.slice(0, sliceNumber).map(item => <PodcastAll item={item} />)
          }

        </div>
        <div className='text-center mb-7 mt-7 text-white'>
          {
            pathname === '/podcast' && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button>
          }

        </div>
      </div>
    </div>
  );
};

export default Podcast;


// reading card design here 
export const PodcastAll = ({ item }) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token; 
  return (

   <>
    {
      token&&<div className='p-4 rounded shadow-md'>
        <div className='flex items-center  '>
      <div className='  w-1/6'>
        <img src={item?.image} className='rounded-full w-full' alt='loading' />
      </div>
      <div className='mb-3'>
        <h1 className='pt-7 mb-2 lg:text-2xl text-xl'>{item?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: item?.description.slice(0, 250) }} className='lg:text-base text-sm'></div>
        <Link to={`/podcast/${item.id}`}>
          <button className=' hover:underline hover:text-primary   py-3 rounded text-black my-5'>Read more</button>
        </Link>
      </div>
    </div>
    </div>
    }
      {
        !token && item.visibility==="public" && <div className='p-4 rounded shadow-md'>
        <div className='flex items-center  '>
      <div className='  w-1/6'>
        <img src={item?.image} className='rounded-full w-full' alt='loading' />
      </div>
      <div className='mb-3'>
        <h1 className='pt-7 mb-2 lg:text-2xl text-xl'>{item?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: item?.description.slice(0, 250) }} className='lg:text-base text-sm'></div>
        <Link to={`/podcast/${item.id}`}>
          <button className=' hover:underline hover:text-primary   py-3 rounded text-black my-5'>Read more</button>
        </Link>
      </div>
    </div>
    </div>
      }
    </>
  );
};



export const PodcastDetails = () => {
  const [pod, setPod] = useState({});
  const { id } = useParams()
 
  useEffect(() => {
    async function blogFunction() {
      try {
        axios.get(`/podcast/${id}/`)
          .then(res => {
            
            setPod(res.data)
          })
      } catch (error) {

      }
    }
    blogFunction()
  }, [id])
  const datas = window.location.href;
  return (
    <>
      <div className='bg-primary p-2'>
        <div className='text-white text-center'>
          <h3 className='text-xl mb-5'>Episode 10</h3>
          <h1 className='text-3xl mb-5'>Why empathy is key to your business & your future</h1>
          <h2 className='text-xl mb-5'>Interview by CITLALLI KLOCKO KRIS KREIGER</h2>
          <span className='text-xl mb-5'>Date: 30 jun 2020</span>
        </div>
      </div>

      <div className='grid grid-cols-2  justify-center items-center pr-4 pl-4 gap-x-6 gap-y-4 mt-4 '>
        <div>
          <img src={pod.image} alt='loading ...' className='object-contain' />
        </div>

        <div>
          <h1 className='text-2xl text-black text-center' > {pod.visibility}</h1>
          <div className='p-4   rounded shadow-md'>
            <div className='flex gap-2 '>
              <div className='  w-1/6'>
                <img src={pod.image} className='rounded-full w-48 ' alt='loading' />
              </div>
              <div className='mb-3'>
                <h1 className='  mb-2 xl:text-3xl lg:text-2xl text-xl '>{pod.title}</h1>
                   <a href={pod?.file} className='text-7xl' title='play the voice'> 
                   <BsFillPlayFill/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className=' my-10 mx-12'>
          <div dangerouslySetInnerHTML={{ __html: pod.description }} className='md:text-base text-sm'/>
         
        </div>

      </div>
      <div className=' flex justify-end mx-10 items-center text-black mt-5'>
        <span className='text-base '>
          <ModelShare data={datas} />
        </span>
      </div>
    </>
  );
};

