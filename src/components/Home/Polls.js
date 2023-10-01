import axios from "../../apiService/axios";
import { useEffect, useState } from "react";

const Polls = () => {
  // Sample state for a poll (you'd fetch this from your backend in a real application)
 
  const [poll, setPoll] = useState({
    question: "Who should be the next President?",
    options: ["Candidate 1", "Candidate 2", "Candidate 3"],
    votes: [0, 0, 0],  // Vote counts for each option
  });

  const vote = (index) => {
    setPoll(currentPoll => {
      const newVotes = [...currentPoll.votes];
      newVotes[index]++;
      return { ...currentPoll, votes: newVotes };
    });
  };
  return (
    <div className="bg-primary text-white py-20">
      <div className="container-ml">
        <div className='pt-[10px] text-white'>
          <h1 className='  text-[40px] px-3 border-l-[5px] border-[#ffffff] h-[60px] my-[48px]'>Poll</h1>
          <p className='px-3 text-[#FFFFFFCC] font-500 text-[20px] mb-[35px]'>{poll.question}</p>
        </div>
        <div className="bg-white text-black pt-[75px] px-[30px] pb-[35px] rounded-[10px]">
           
          <ul>
            {poll.options.map((option, index) => (
              <li key={index} className="flex justify-between   items-center   border border-primary rounded-lg mt-2 px-4 py-1">
                <div>
                  <h1> {option}</h1>
                  <button className="bg-primary text-white px-4 py-1 rounded-lg my-2" onClick={() => vote(index)} >Vote  </button>
                </div>
                <div>
                  <span className=""> {poll.votes[index]} votes</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Polls;