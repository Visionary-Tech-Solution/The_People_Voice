import React, { useEffect, useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { MdOutlineReadMore } from 'react-icons/md';
import { GrStar } from 'react-icons/gr';
import AboutModal, { AboutAudio, aboutData, audioData } from '../homeSubComponents/AboutSectionSub';
import { useLocation } from 'react-router-dom';
import axios from '../../apiService/axios';
const About = () => {
  const { pathname } = useLocation();
  const [allAboutData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const promises = ['pages/pledge/', 'pages/credo/', 'pages/about/', 'pages/vision/', 'pages/mission/', 'pages/plan/'].map(
        (item) => axios.get(`/${item}`)
      );
      try {
        const responses = await Promise.all(promises);
        const newData = responses.map((res) => res.data);
        setData(newData);
      } catch (error) {
       
      }
    };
    fetchData();
  }, []);
  return (
    <div className='bg-[#002868] pb-[100px]' id='about'>
      {pathname == "/about" ? <div className='bg-white  pb-5'>
        {/* collapse data here  */}
        <AboutAll allAboutData={allAboutData}/>
      </div>
        :
        <div className='flex  '>
          <div className='mt-28  hidden  md:flex flex-col justify-between '>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(item => <div key={item}>
              <div className='text-white flex  '>
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
              </div>
            </div>)}
          </div>
          <div className='mb-[10px] pt-1 w-full mr-8'>
            <div>
              <div className='text-white'>
                <h1 className='  text-[40px] px-3 border-l-[5px] border-[#ffffff] h-[60px] my-[8px]'>About</h1>
                <p className='px-3  font-500 text-[20px] mb-[22px]'> Content Here</p>
              </div>
              <div>
                {/* react collapse use here  */}
                <div className={`border border-white  grid         sm:hover:grid-cols-6   grid-cols-5 gap-0 `}>
                  {allAboutData.slice(1,6).map((item,index)=><div className="contacts hover:col-span-2" key={index}>                   
                  <div className={`h-[600px] ${index % 3 === 0 ? 'bg-[#B22234]' : index % 3 === 1 ? 'bg-white hover:text-black' : 'bg-primary'} text-[24px] cursor-pointer contact flex items-center`}>
                      <div className={`transform -rotate-90 ${index % 3 === 1 ? 'text-black':"text-white"}  flex`}>
                      {index==0 ? <span className='px-2'>
                               {allAboutData[0]?.title} and 
                            </span>:<></>                          }
                             {item.title} 
                      </div>
                    </div>
                    <div className={`h-[600px]  text-[24px] about-container  contacts-footer  ${index % 3 === 0 ? 'bg-[#B22234]' : index % 3 === 1 ? 'bg-white' : 'bg-primary'}`}  >
                      <div  >
                        <div className='pt-[60px] px-5'>
                          <div className={`${index % 3 === 1 ? 'text-black':"text-white"} xl:text-4xl lg:text-3xl md:text-2xl text-xl mb-[22px]`}>
                            {index==0 ? <span className='px-2'>
                               {allAboutData[0]?.title} and 
                            </span>:<></>                          }
                             {item.title} 
                          </div>
                          <div className={`${index % 3 === 1 ? 'text-black':"text-white"} xl:text-xl lg:text-base text-sm text-justify`}>
                            {item.text}
                          </div>
                          <div className='flex justify-end  '>
                            <div className='mx-1 flex flex-col justify-center  items-center text-white'>
                              <span><MdOutlineReadMore size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>
                                <label htmlFor={`my-modal-${item?.type}`}  >
                                  <span className='hover:underline cursor-pointer'>Read more</span> </label>
                                <AboutModal data={item} />
                              </span>
                            </div>
                            <div className='flex justify-center mx-1 flex-col items-center text-white'>
                              <span><AiFillSound size={18} /></span>
                              <label htmlFor="my-modal-l1" className="text-[10px] text-white  hover:underline cursor-pointer"> Listen </label>
                              <AboutAudio data={audioData[index]} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>) }              
                </div>
              </div>
            </div>
          </div>

        </div>}

    </div>

  );
};

export default About;
const AboutAll = ({allAboutData}) => {
  console.log(allAboutData);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const togglePost = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  return (
    <div>
      {allAboutData.map((post) => (
        <div key={post.id} className='shadow-lg my-6  xl:mx-20 lg:mx-16 md:mx-12 mx-6'>
          <h1 className='text-center xl:text-4xl lg:text-3xl text-2xl my-2 '>{post?.title}</h1>
          <p className="text-gray-800 xl:text-xl md:text-sm text-base">
            
            {expandedPosts.includes(post?.id)
              ? post.text
              : `${post?.text?.slice(0, 400)}...`}
          </p>
          <div className='text-center'>
            <button
              onClick={() => togglePost(post.id)}
              className="text-center px-4 py-2 rounded text-black bg-white hover:underline mt-4 shadow-lg"
            >
              {expandedPosts.includes(post.id) ? 'See less' : 'See more'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
