import { toast } from "react-toastify";
import axios from "../../apiService/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Polls = () => {
  const [voter,setVoter] = useState([])
  const [cookies] = useCookies(["token"]);
  const token = cookies.token; 
  const navigate = useNavigate()
  async function getVote(){
   try {
  const result = await axios.get('/polls/')
      setVoter(result.data)
    
   } catch (error) {
    
   }
  }
  const vote = (item) => {
    if(!token){
      navigate("/login")
    }
    else{
      axios.post('/polls/vote/',{
        "poll_id":item.poll_id,
        "choice_id":item.id
    })
      .then(res=>{
        console.log(res);
        if(res.status===201){
          getVote()
          toast.success("successfully given a vote")
        }
      })
      .catch(err=>{
        toast.error('oops sorry not give vote')
      })
    }
    
  };
  useEffect(()=>{
    getVote()
  },[])
  return (
    <div className="bg-white text-white py-20">
      <div className="container-ml">
        <div className='pt-[10px] text-white'>
          <h1 className=' text-primary text-[40px] px-3 border-l-[5px] border-primary h-[60px] my-[18px]'>Poll</h1>
          <p className='px-3 text-primary  font-500 text-[20px] mb-[35px]'>{voter[0]?.question}</p>
        </div>
    <div className="bg-white text-black  px-[30px] pb-[35px] rounded-[10px]">
            {
              voter.map((item,index)=> <ul key={index}>
                  <h1 className=" text-black px-3 py-3 my-3 font-arial font-900 rounded">{item?.question}</h1>
                  {item.choices.map((item,index)=> <li key={index} className="flex justify-between   items-center   border border-primary rounded-lg mt-2 px-4 py-1">
                  <div>
                    <h1> {item?.choice_text}</h1>
                    <button className="bg-primary text-white px-4 py-1 rounded-lg my-2" onClick={() => vote(item)} >Vote  </button>
                  </div>
                  <div>
                    <span className="">  {item?.votes} votes</span>
                  </div>
                </li>)
                }
              </ul>)
            }
        </div>
      </div>
    </div>
  );
};

export default Polls;
 