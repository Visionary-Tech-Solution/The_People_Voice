import { useState } from "react";
import Invite from "./Invite";

const PeoplesContract = () => {
  // Mock data for the contract items
  const [contractItems, setContractItems] = useState([
    { id: 1, content: 'Contract Item 1', votes: 0 },
    { id: 2, content: 'Contract Item 2', votes: 0 },
    { id: 3, content: 'Contract Item 3', votes: 0 },
  ]);

  const vote = (itemId) => {
    // In a real application, this function would send a request to your back-end
    // to increment the vote count for the specified item. The back-end would then
    // return the updated data for that item, which you would use to update your state.
    setContractItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const addNewItem = (content) => {
    // Similar to the vote function, this function would send a request to your
    // back-end to create a new contract item with the specified content. The
    // back-end would return the created item, which you would then add to your state.
    const newItem = {
      id: Math.max(...contractItems.map(item => item.id)) + 1, // Just for the mock version
      content,
      votes: 0,
    };
    setContractItems(currentItems => [...currentItems, newItem]);
  };

  return (
    <div>
      <div className="bg-white text-white  ">


        <div className="container-ml">
          <div className='  text-white'>
            <h1 className=' text-black  text-[40px] px-3 border-l-[5px] border-black h-[60px] my-[48px]'>The People's Contract</h1>

          </div>
          <div>
            <Invite />
          </div>
          <div className="bg-white text-black   px-[30px] pb-[35px] rounded-[10px]">
            <ul>
              {contractItems.map(item => (
                <li key={item.id} className="flex justify-between   items-center   border border-primary rounded-lg mt-2 px-4 py-1">
                  <div>
                    <h1>    {item.content}</h1>
                    <button className="bg-primary text-white px-4 py-1 rounded-lg my-2" onClick={() => vote(item.id)} >Vote  </button>
                  </div>
                  <div>
                    <span className=""> {item.votes} votes</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white px-4 py-1 rounded-lg my-2" onClick={() => addNewItem('New Contract Item')}>
              Request New Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplesContract;