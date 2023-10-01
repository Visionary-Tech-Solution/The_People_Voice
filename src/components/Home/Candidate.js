import { useState } from "react";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({ name: '', picture: '', platform: '', website: '', pledged: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCandidates([...candidates, form]);
    setForm({ name: '', picture: '', platform: '', website: '', pledged: false });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className='  bg-  '  >
      <div className='container-ml   pb-5'>
        <div className='pt-1'>
          <h1 className='text-primary text-[40px] px-3 border-l-[5px] border-primary h-[60px] my-[48px]'>Candidate</h1>

        </div>
        <div className="px-[30px] ">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <CustomeLabel name={" Name"} />
                <input type="text" name="name" value={form.name} onChange={handleChange} className="block w-full px-5 py-3 mt-2 text-primary placeholder-primary bg-transparent shadow-lg rounded-lg  border " required placeholder="Name" />
              </div>
              <div>
                <CustomeLabel name={"  Picture URL:"} />
                <input type="text" name="picture" value={form.picture} onChange={handleChange} className="block w-full px-5 py-3 mt-2 text-primary  placeholder-primary bg-transparent shadow-lg rounded-lg  border" required placeholder=" Picture URL:" />
              </div>
              <div>
                <CustomeLabel name={" Website:"} />
                <input type="text" name="website" value={form.website} onChange={handleChange} required className="block w-full px-5 py-3 mt-2  bg-transparent shadow-lg rounded-lg text-primary  placeholder-primary  border" placeholder="Website" />
              </div>
              <div>
                <CustomeLabel name={" Platform:"} />
                <input name="platform" value={form.platform} onChange={handleChange} required className="block w-full px-5 py-3 mt-2 text-primary  placeholder-primary bg-transparent shadow-lg rounded-lg border " placeholder=" Platform:" />
              </div>

            </div>
            <div className="flex  items-center  ">
              <input type="checkbox" name="pledged" required />

              <label className=" ml-1 text-sm text-primary">
                Pledge to the People's Contract:

              </label>
            </div>
            <button type="submit" className="text-white border rounded-lg py-2 px-4 bg-red">Create Profile</button>
          </form>
          <ul className="my-20">

            {candidates.map((candidate, index) => (
              <li key={index} className="flex justify-center  ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5">
                  <img className="w-full" src={candidate.picture} alt={candidate.name} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{candidate.name}</div>
                    <p className="text-primary text-base">
                      {candidate.pledged && <span className="text-primary">✓ Pledged to the People's Contract</span>}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> <a href={candidate.website}>Visit Website</a></span>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Candidates;

export const CustomeLabel = ({ name }) => {
  return (
    <label className="flex mb-2 text-sm text-primary">

      {name}

      <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
      </svg></span>
    </label>
  )

}
