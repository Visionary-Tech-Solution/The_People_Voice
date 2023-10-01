import React, { useEffect, useRef, useState } from 'react';
import audio1 from '../../Assets/People House Image & Data/Data/Pledge and Credo.mp3';
import audio2 from '../../Assets/People House Image & Data/Data/Request_Invitation.mp3'
import audio4 from '../../Assets/People House Image & Data/Data/Pledge and Credo.mp3'
import audio3 from '../../Assets/People House Image & Data/Data/Vision_Audio.mp3'
import audio5 from '../../Assets/People House Image & Data/Data/Pledge and Credo.mp3'
import axios from '../../apiService/axios';
const AboutModal = ({ data }) => {
  const [pledgeData,setPledgeData] = useState({});
  useEffect(()=>{
    axios.get("/pages/pledge/")
    .then(res=>{
      setPledgeData(res.data)
    })
  },[])
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${data.type}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor={`my-modal-${data.type}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {
            data.type == 'credo' ? <h3 className="py-4 xl:text-4xl md:text-3xl text-xl text-center text-red"> {pledgeData.title} </h3>:   <h3 className="py-4 xl:text-4xl md:text-3xl text-xl text-center text-red"> {data.title} </h3>
          }
          <p className="text-justify py-4 text-[#000000] ">
            
            {
            data.type == 'credo' ? <p className="text-justify py-4 text-[#000000] xl:text-xl md:text-base text-sm ">
            {pledgeData.text} 
          </p>: <p className="text-justify py-4 text-[#000000]  xl:text-xl md:text-base text-sm ">{data.text}</p>
          }
          </p>
          {
            data.type == 'credo' ? <h3 className="py-4 xl:text-4xl md:text-3xl text-xl text-center text-red"> {data.title} </h3>:""
          }
          {
            data.type == 'credo' ? <p className="text-justify py-4 text-[#000000] xl:text-xl md:text-base text-sm ">
            {data.text} 
          </p>:""
          }
          
        </div>
      </div>


    </>
  );
};

export default AboutModal;


export const AboutAudio = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    const audio = audioRef.current;
    audio.pause();
    setIsPlaying(!isPlaying);
  };
  let content;
  if (data.src === '1') {
    content = audio1
  }
  else if (data.src === '2') {
    content = audio2
  }
  else if (data.src === '3') {
    content = audio3
  }
  else if (data.src === '4') {
    content = audio4
  }
  else if (data.src === '5') {
    content = audio5
  }
  return (
    <>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${data.id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor={`my-modal-${data.id}`} className="btn btn-sm btn-circle absolute right-2 top-2" onClick={togglePlay}>✕</label>
          <audio controls ref={audioRef}>
            <source src={content} type="audio/mpeg" />
          </audio>

        </div>
      </div>
    </>
  );
};



export const audioData = [
  {
    id: "l1",
    src: "1"
  },
  {
    id: "l2",
    src: "2"
  },
  {
    id: "l3",
    src: "3"
  },
  {
    id: "l4",
    src: "4"
  },
  {
    id: "l5",
    src: "5"
  },
]


export const aboutData = [{
  id: 10,
  s1: 'bg-white  text-black p-4 ',
  mh1: 'PLEDGE AND CREDO',
  th1: 'Pledge',
  th2: "Credo",
  text1: "We, the members of this community, pledge to honor and protect the sacrifices made by our military heroes who shed their blood to secure our freedom and ensure the future of our nation. We recognize that their sacrifices were hard-won and the stories lying beneath the headstones at Arlington Cemetery and other military cemeteries a  cross the country are the seeds of freedom that must be protected at all costs. We reject hate and anger an d seek wisdom from the Lord to work towards a brighter future for all Americans. We will hold our leaders accountable, demand that they uphold the Constitution and the laws of our land, and replace those who fail to uphold their duty to our nation.",
  text2: "  We believe that our nation was built on sacrifice, and it is our duty to uphold the legacy of those who came before us. We recognize that our freedoms and liberties were born in the blood of patriots, and must be protected at all costs. We reject propaganda and instead promote understanding and respect for our fellow citizens. We pray for those who are tasked with leading our nation, not that they would succeed with their evil plans, but that the Lord would touch their hearts and guide them to change their ways. We reject any plans that go against the spirit and letter of our laws, and we will work to replace those who fail to uphold their duty to our nation. We believe that by upholding the values of honor, integrity, and respect, we can create a stronger, more united America.As members of this community, we are committed to honoring and protecting the sacrifices made by our military heroes. Together, we can create a community grounded in love for our country and a commitment to upholding the values that make America great"
},
{
  id: 11,
  s1: 'bg-white text-black p-4 ',
  th1: "About",
  th2: "",
  text1: "Fed up with the Billions of dollars that powerful elites pour into our elections, manipulating the system to serve their interests? It's time to fight back, together, we can make their money irrelevant. Introducing The People's House, a revolutionary web portal designed to unite American citizens and create the most influential force in politics: The People's Lobby. The People's House isn't about left or right; it's about joining forces to take back our government from the privileged and the internationalist crowd. We recognize that money in politics has distorted our democracy, but we also know that our  collective strength can render it powerless.Our groundbreaking platform offers you the tools to connect, collaborate, and make your voice heard. Vet politicians, vote on policy proposals, engage in polls, tune in to podcasts, and participate in live debates – The People's House is your one-stop destination to reclaim your rightful place in American politics. Soon, we will launch this powerful movement, and you can be a trailblazer in this new era of people-driven politics. Request an invitation today, and together, we'll build The People's Lobby, a united front that politicians cannot ignore.Embrace this unique opportunity to stand up against the torrent of money in politics and make a lasting impact. Request your invitation now, and let's create an America where the power lies in the hands of the people, not in the pockets of the elite. Rise up, America, and let's build The People's Lobby. The future is ours to shape.",
  text2: ""
},
{
  id: 12,
  s1: 'bg-white text-black p-4 ',
  th1: "VISION",
  th2: "",
  text1: "VISION At The Peoples House, our vision is to ignite a powerful movement that restores the United States to its founding principles, creating a future where equality of education and opportunity, as well as prope renvironmental management, prevail for all. We envision a nation where the government serves the people, not the other way around, and where every citizen's voice is heard and valued. Read more Read more Listen Vission At The Peoples House, our vision is to ignite a powerful movement that restores the United States to its founding principles, creating a future where equality of education and opportunity, as well as proper environmental management, prevail for all. We envision a nation where the government serves the people, not the other way around, and where every citizen's voice is heard and valued. We are committed to forging a new path where the justice system is truly just and equal, holding all individuals accountable for their actions, regardless of their position or status. Our mission is to break down the barriers of corruption and privilege that have allowed politicians and government officials to evade the consequences of their actions. We believe in the power of education as a catalyst for change, fostering critical thinking and empowering the next generation to stand up for their beliefs. By putting an end to the radicalization and destruction of our youth, we can create an environment where innovation, creativity, and collaboration thrive. As we work to rebuild a government for, by, and of the people, we will champion policies that promote equality of education and opportunity, along with proper environmental management, ensuring that all Americans have access to the resources and opportunities they need to build a brighter future for themselves and their families. Together, we will bring about a new era of unity, patriotism, and hope – a future where every American can prosper, and where our nation stands as a beacon of freedom, democracy, and progress for generations to come.",
  text2: ""
},
{
  id: 13,
  s1: 'bg-white text-black p-4 ',
  th1: "Mission",
  th2: "",
  text1: "content comming soon",
  text2: ""
},
{
  id: 14,
  s1: 'bg-white text-black p-4 ',
  th1: "Plan",
  th2: " ",
  text1: "Content comming soon",
  text2: ""
}
]