import { useState } from "react";

const RealNews = () => {
  const [journalists, setJournalists] = useState([]);
  const [form, setForm] = useState({ name: '', section: '', patreonLink: '' });
  const [articleForm, setArticleForm] = useState({ title: '', content: '' });

  const handleJournalistSubmit = (event) => {
    event.preventDefault();
    setJournalists([...journalists, { ...form, articles: [] }]);
    setForm({ name: '', section: '', patreonLink: '' });
  };

  const handleArticleSubmit = (journalist, event) => {
    event.preventDefault();
    
    const updatedJournalists = journalists.map(j =>
      j.name === journalist.name ? { ...j, articles: [...j.articles, articleForm] } : j
    );
    setJournalists(updatedJournalists);
    setArticleForm({ title: '', content: '' });
  };

  const handleChange = (event, formSetter) => {
    formSetter(form => ({ ...form, [event.target.name]: event.target.value }));
  };
  return (
    <div className='py-7'  >
      <div className='container-ml    pb-10'>
        <div className=' '>
          <h1 className='text-primary text-[40px] px-3 border-l-[5px] border-primary h-[60px]  '>Real News</h1>

        </div>
        <div className="px-[30px] ">
          <form onSubmit={handleJournalistSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <CustomeLabel name={" Name"} />
                <input type="text" name="name" value={form.name} onChange={(e) => handleChange(e, setForm)} requiredonChange={handleChange} className="block w-full px-5 py-3 mt-2 text-primary  placeholder-primary  bg-transparent shadow-lg rounded-lg  border border-primary" placeholder="Name" />
              </div>
              <div>
                <CustomeLabel name={"Section :"} />
                <input type="text" name="section" value={form.section} onChange={(e) => handleChange(e, setForm)} className="block w-full px-5 py-3 mt-2 text-primary  placeholder-primary bg-transparent shadow-lg rounded-lg  border" required placeholder=" Section:" />
              </div>
              <div>
                <CustomeLabel name={" Patreon Link:"} />
                <input type="text" name="patreonLink" value={form.patreonLink} onChange={(e) => handleChange(e, setForm)} required className="block w-full px-5 py-3 mt-2  bg-transparent shadow-lg rounded-lg text-primary  placeholder-primary  border" placeholder="Patreon Link" />
              </div>


            </div>

            <button type="submit" className="text-white border rounded-lg py-2 px-4 bg-primary mb-10 mt-5">Create Profile</button>
          </form>
          {journalists.map((journalist, index) => (
            <div key={index} className="text-white">
              <h3>{journalist.name}</h3>
              <p>Section: {journalist.section}</p>
              <a href={journalist.patreonLink}>Support on Patreon</a>

              <form className="mt-10" onSubmit={(e) => handleArticleSubmit(journalist, e)}>
                <div className='grid grid-cols-2 gap-4'>
                  <div className="text-white">
                    Article Title:
                    <input type="text" name="title" value={articleForm.title} onChange={(e) => handleChange(e, setArticleForm)} required className="block w-full px-5 py-3 mt-2  bg-transparent shadow-lg rounded-lg text-primary  placeholder-primary  border" placeholder="Article Title:" />
                  </div>
                  <div className="text-white">
                    Article Content:
                    <textarea name="content" value={articleForm.content} onChange={(e) => handleChange(e, setArticleForm)} required className="block w-full px-5 py-3 mt-2  bg-transparent shadow-lg rounded-lg text-primary  placeholder-primary  border" placeholder="Article Content:" />
                  </div>
                </div>
                <button type="submit" className="text-white border rounded-lg py-2 px-4 bg-primary mb-10 mt-5">Submit Article</button>
              </form>
              {journalists?.articles?.map((article, index) => (
                <div key={index} className="flex justify-center  text-white">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5">

                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{article.title}</div>
                      <p className="text-gray-700 text-base">
                        {article.content}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> <a href={article.patreonLink}>Visit Website</a></span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default RealNews;

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
