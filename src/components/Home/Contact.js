import { toast } from 'react-toastify';
import axios from '../../apiService/axios';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/contact/', formData);
            // Handle the response if needed
            if(response.status===201){
                toast.success("successfully contact with us")
            }
            console.log(response.data);
        } catch (error) {
            // Handle the error
            console.error(error);
        }
    };
    return (
        <div className='relative bg-contact bg-center bg-cover bg-no-repeat bg-static bg-fixed  ' id='contact'>
            <div className='container-ml   pb-10'>
                <div className='pt-1  '>
                    <h1 className='text-white text-[40px] px-3 border-l-[5px] border-[#eae9e9d4] h-[60px] my-12 '>Contact</h1>

                </div>
                <div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <CustomeLabel name={" Name"} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className="block w-full px-5 py-3 mt-2 text-[#eae9e9d4]  placeholder-[#eae9e9d4] bg-transparent shadow-lg rounded-lg border border-black"
                                    required
                                />
                            </div>
                            <div>
                                <CustomeLabel name={"Email"} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email"
                                    className="block w-full px-5 py-3 mt-2 text-[#eae9e9d4]  placeholder-[#eae9e9d4] bg-transparent shadow-lg rounded-lg border border-black"
                                    required
                                />
                            </div>
                            <div>
                                <CustomeLabel name={"Your Subject"} />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Your Subject"
                                    className="block w-full px-5 py-3 mt-2  bg-transparent shadow-lg rounded-lg text-[#eae9e9d4]  placeholder-[#eae9e9d4] border border-black"
                                />
                            </div>
                        </div>
                        <div>
                            <CustomeLabel name={"Your message"} />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter Your Message Here"
                                className="block w-full px-5 py-3 mt-2 text-[##eae9e9d4]  placeholder-[#eae9e9d4] bg-transparent shadow-lg rounded-lg border border-black"
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            className="mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-[#FFFFFFB2] rounded-lg hover:bg-blue-400 flex justify-center items-center gap-4"
                        >
                            <span className="text-[#002868]">SEND NOW</span>
                        </button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Contact;

export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-white">

            {name}

            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg></span>
        </label>
    )

}