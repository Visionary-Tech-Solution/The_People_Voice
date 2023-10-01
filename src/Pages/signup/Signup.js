import axios from '../../apiService/axios';
// import axios from 'apiService/axios';
import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import store from '../../Redux/store/store';
import { addUserActions } from '../../Redux/apiSlice/userSlice';

const Signup = () => {
    const [cookie, setCookie] = useCookies(["token"]);
    const [visible, setVisible] = useState(false)
    useEffect(() => {
     
    }, [visible])
    const [agree, setAgree] = useState(false)
    const handleAgree = e => {
        setAgree(!agree)
    }
    const Registerapi = async (values) => {
        const loading = toast.loading("Please wait a moment...");

        try {
            const res = await axios.post("/register/", values)
           
            const { data, status } = res;
            if (status === 200) {
                // setIsLoading(false);
                store.dispatch(addUserActions.addUser(res.data))
                toast.dismiss(loading);
                toast.success("successfully create account");
                setCookie("token", data?.token, {
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                });
            }
            else {
                toast.dismiss(loading);
            }
        } catch (error) {
            toast.dismiss(loading);
         
        }

    }
    return (
        <div className="relative bg-blog-banner bg-center bg-cover bg-no-repeat bg-static bg-fixed">

            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="relative  z-10">

                <div className=" flex flex-wrap-reverse items-center justify-center  px-6 mx-auto py-10">
                    {
                        visible &&
                        <>
                            <SignConduct handleAgree={handleAgree} />
                        </>
                    }

                    <div className="w-full max-w-lg mx-auto mt-6 ">


                        <div className="flex flex-col justify-center items-center mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-people text-slate-300" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg>
                        </div>

                        <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-slate-200 capitalize md:text-3xl">
                            Signup
                        </h1>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                username: '',
                                email: '',
                                first_name: '',
                                last_name: '',
                                password: '',
                                password2: '',
                                profile: {
                                    cell_phone: '',
                                    birth_month_year: '',
                                    state: '',
                                    city: '',
                                    country: '',
                                    political_affiliation: '',
                                    national_elections_voted: 0,
                                    state_elections_voted: 0,
                                },
                            }}
                            validate={(values) => {

                                const errors = {};
                                if (!values.username) {
                                    errors.username = "Please enter your user name";
                                }
                                else if (values.username.length < 7) {
                                    errors.username = "minimum six character";
                                }
                                else if (!values.email) {
                                    errors.email = "Please enter your email";
                                }
                                else if (!values.first_name) {
                                    errors.first_name = "Please enter your first name";
                                }
                                else if (!values.last_name) {
                                    errors.last_name = "Please enter your last name";
                                }
                                else if (!values.password) {
                                    errors.password = "Please enter your password";
                                }
                                else if (!values.password2) {
                                    errors.password2 = "Please enter your  confirm password";
                                }
                                else if (values.password.length < 7) {
                                    errors.password = "Please enter 5 word";
                                }
                                else if (!values.profile?.cell_phone) {
                                    errors.cell_phone = "enter your cell phone"
                                }
                                else if (!values.profile?.birth_month_year) {
                                    errors.birth_month_year = "Please enter your dob";
                                }
                                else if (!values.profile?.city) {
                                    errors.city = "Please enter your city name";
                                }
                                else if (!values.profile?.state) {
                                    errors.state = "Please enter your state name";
                                }
                                else if (!values.profile?.country) {
                                    errors.country = "Please enter your country name";
                                }
                                else if (!values.profile?.state_elections_voted) {
                                    errors.state_elections_voted = "Please enter your state election vote";
                                }
                                else if (!values.profile?.political_affiliation) {
                                    errors.political_affiliation = "Please enter your affiliation";
                                }
                                else if (!values.profile?.national_elections_voted) {
                                    errors.national_elections_voted = "Please enter your national elections";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { resetForm }) => {
                             
                                Registerapi(values);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form className="space-y-4" onSubmit={handleSubmit} >
                                    <div>
                                        <CustomeLabel name={"Username"} />
                                        <input
                                            placeholder='Enter Username'
                                            type="text"
                                            id="username"
                                            name="username"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.username ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            error={errors.username && touched.username && errors.username}
                                            helperText={errors.username && touched.username && errors.username}
                                        />
                                        {errors.username && touched.username && (
                                            <div className="text-red text-xs">{errors.username}</div>
                                        )}

                                        {!errors.username && touched.username && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Email"} />
                                        <input
                                            placeholder='Enter Your Email'
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.email ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            error={errors.email && touched.email && errors.email}
                                            helperText={errors.email && touched.email && errors.email}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="text-red text-xs">{errors.email}</div>
                                        )}

                                        {!errors.email && touched.email && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>

                                    <div>
                                        <CustomeLabel name={"First Name"} />
                                        <input
                                            placeholder='Enter Your First Name'
                                            type="text"
                                            id="first_name"
                                            name="first_name"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.first_name ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.first_name}
                                            error={errors.first_name && touched.first_name && errors.first_name}
                                            helperText={errors.first_name && touched.first_name && errors.first_name}
                                        />
                                        {errors.first_name && touched.first_name && (
                                            <div className="text-red text-xs">{errors.first_name}</div>
                                        )}

                                        {!errors.first_name && touched.first_name && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}

                                    </div>
                                    <div>
                                        <CustomeLabel name={"Last Name"} />
                                        <input
                                            placeholder='Enter Your Last Name'
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.last_name ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.last_name}
                                            error={errors.last_name && touched.last_name && errors.last_name}
                                            helperText={errors.last_name && touched.last_name && errors.last_name}
                                        />
                                        {errors.last_name && touched.last_name && (
                                            <div className="text-red text-xs">{errors.last_name}</div>
                                        )}

                                        {!errors.last_name && touched.last_name && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>

                                    <div>
                                        <CustomeLabel name={"Password"} />
                                        <input

                                            placeholder='Enter Password'
                                            type="password"
                                            id="password"
                                            name="password"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.password ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            error={errors.password && touched.password && errors.password}
                                            helperText={errors.password && touched.password && errors.password}
                                        />
                                        {errors.password && touched.password && (
                                            <div className="text-red text-xs">{errors.password}</div>
                                        )}

                                        {!errors.password && touched.password && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>

                                    <div>
                                        <CustomeLabel name={"Password Confirmation"} />
                                        <input

                                            placeholder='Enter Password2'
                                            type="password"
                                            id="password2"
                                            name="password2"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.password2 ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password2}
                                            error={errors.password2 && touched.password2 && errors.password2}
                                            helperText={errors.password2 && touched.password2 && errors.password2}
                                        />
                                        {errors.password2 && touched.password2 && (
                                            <div className="text-red text-xs">{errors.password2}</div>
                                        )}

                                        {!errors.password2 && touched.password2 && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Cell phone Number"} />
                                        <input


                                            placeholder='Enter cell_phone'
                                            type="phone"
                                            id="cell_phone"
                                            name="profile.cell_phone"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.cell_phone ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.cell_phone}
                                            error={errors.cell_phone && touched.cell_phone && errors.cell_phone}
                                            helperText={errors.cell_phone && touched.cell_phone && errors.cell_phone}
                                        />
                                        {errors.cell_phone && touched.cell_phone && (
                                            <div className="text-red text-xs">{errors.cell_phone}</div>
                                        )}

                                        {!errors.cell_phone && touched.cell_phone && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Birth Month and Year"} />
                                        <input

                                            type="date"
                                            id="birth_month_year"
                                            name="profile.birth_month_year"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.birth_month_year ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.birth_month_year}
                                            error={errors.birth_month_year && touched.usebirth_month_year && errors.birth_month_year}
                                            helperText={errors.birth_month_year && touched.birth_month_year && errors.birth_month_year}
                                        />
                                        {errors.birth_month_year && touched.birth_month_year && (
                                            <div className="text-red text-xs">{errors.birth_month_year}</div>
                                        )}

                                        {!errors.birth_month_year && touched.birth_month_year && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"State"} />
                                        <input
                                            placeholder='Enter State'

                                            type="text"
                                            id="state"
                                            name="profile.state"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.state ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.state}
                                            error={errors.state && touched.usestate && errors.state}
                                            helperText={errors.state && touched.state && errors.state}
                                        />
                                        {errors.state && touched.state && (
                                            <div className="text-red text-xs">{errors.state}</div>
                                        )}

                                        {!errors.state && touched.state && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"City"} />
                                        <input
                                            placeholder='Enter City'
                                            type="text"
                                            id="city"
                                            name="profile.city"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.city ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.city}
                                            error={errors.city && touched.usecity && errors.city}
                                            helperText={errors.city && touched.city && errors.city}
                                        />
                                        {errors.city && touched.city && (
                                            <div className="text-red text-xs">{errors.city}</div>
                                        )}

                                        {!errors.city && touched.city && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Country"} />
                                        <input
                                            placeholder='Enter country'
                                            type="text"
                                            id="country"
                                            name="profile.country"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.country ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.country}
                                            error={errors.country && touched.usecountry && errors.country}
                                            helperText={errors.country && touched.country && errors.country}
                                        />
                                        {errors.country && touched.country && (
                                            <div className="text-red text-xs">{errors.country}</div>
                                        )}

                                        {!errors.country && touched.country && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Political Affiliation"} />
                                        <input

                                            placeholder='Enter political_affiliation'
                                            type="text"
                                            id="political_affiliation"
                                            name="profile.political_affiliation"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.political_affiliation ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.political_affiliation}
                                            error={errors.political_affiliation && touched.usepolitical_affiliation && errors.political_affiliation}
                                            helperText={errors.political_affiliation && touched.political_affiliation && errors.political_affiliation}
                                        />
                                        {errors.political_affiliation && touched.political_affiliation && (
                                            <div className="text-red text-xs">{errors.political_affiliation}</div>
                                        )}

                                        {!errors.political_affiliation && touched.political_affiliation && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Number of National Elections voted in"} />
                                        <input

                                            placeholder='Enter national_elections_voted'
                                            type="number"
                                            id="national_elections_voted"
                                            name="profile.national_elections_voted"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.national_elections_voted ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.national_elections_voted}
                                            error={errors.national_elections_voted && touched.national_elections_voted && errors.national_elections_voted}
                                            helperText={errors.national_elections_voted && touched.national_elections_voted && errors.national_elections_voted}
                                        />
                                        {errors.national_elections_voted && touched.national_elections_voted && (
                                            <div className="text-red text-xs">{errors.national_elections_voted}</div>
                                        )}

                                        {!errors.national_elections_voted && touched.national_elections_voted && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>
                                    <div>
                                        <CustomeLabel name={"Number of State Elections voted in"} />
                                        <input
                                            placeholder='Enter state_elections_voted'
                                            type="number"
                                            id="state_elections_voted"
                                            name="profile.state_elections_voted"
                                            className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.state_elections_voted ? 'border border-red' : 'border border-white'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.profile?.state_elections_voted}
                                            error={errors.state_elections_voted && touched.state_elections_voted && errors.state_elections_voted}
                                            helperText={errors.state_elections_voted && touched.state_elections_voted && errors.state_elections_voted}
                                        />
                                        {errors.state_elections_voted && touched.state_elections_voted && (
                                            <div className="text-red text-xs">{errors.state_elections_voted}</div>
                                        )}

                                        {!errors.state_elections_voted && touched.state_elections_voted && (
                                            <div className="text-green-500 text-xs"></div>
                                        )}
                                    </div>

                                    <div className="flex flex-col justify-start text-slate-300">
                                        <div className="flex items-center gap-5">
                                            <input type="checkbox" name="remember" className="mr-1 rounded-sm focus:ring-violet-400 focus:ring-2 " checked={agree ? true : false} />

                                            <label for="remember" className="text-sm ">
                                                Commitment to Engage in polite Political Discourse to help create a new "People's contract with america"
                                            </label>

                                        </div>
                                        <p for="remember" className="text-sm m-4 pl-4 ">
                                            I have read and agree the <span className='font-medium text-slate-50 cursor-pointer' onClick={() => setVisible(!visible)}>code of Ethics</span>
                                        </p>

                                    </div>
                                    <button className="  mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800  rounded-lg   border border-white hover:bg-blue-400 flex justify-center items-center gap-4" type='submit'>

                                        <span className='text-center'>Sign up</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </Formik>
                        <div className="mt-6 text-center">
                            <Link to="/login" className="text-sm text-slate-300 hover:underline ">
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </div>



                </div>

                {/* main container */}
            </div>

        </div>
    );
};

export default Signup;



export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-slate-300 capitalize">

            {name}

            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg></span>
        </label>
    )

}

export const SignConduct = (props) => {
    return (
        <div className={`max-w-sm p-3.5 bg-white mt-[10%] `}>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>I.Core values</p>
                <ul className='list-disc'>
                    <li>Respect fellow citizens.</li>
                    <li>Uphold the rule of law.</li>
                    <li>Honor the original contract with America, which is the Constitution..</li>
                    <li>Understand that this is a government by, for, and of the people.</li>
                    <li>Review the Constitution, amendments, and Bill of Rights.</li>
                    <li>Hold politicians accountable.</li>
                    <li>Engage in discussions and offer suggestions.</li>
                    <li>Participate in democracy by voting in all elections.</li>
                    <li>Protect children, the elderly, and those who cannot protect themselves.</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>II. Encouraged Behaviour</p>
                <ul className='list-disc'>
                    <li>Participate in open debate and respectful discussions.</li>
                    <li>Show kindness and respect for others, regardless of differing beliefs.</li>
                    <li>Contribute to creating a new contract for America..</li>
                    <li>Participate in polls.</li>
                    <li>Use proper language, avoiding vulgarity or disrespect.</li>
                    <li>Recruit and invite others to join the movement.</li>

                </ul>
            </div>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>III. Conflicts of Interest</p>
                <ul className='list-disc'>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>IV. Conflicts of Interest</p>
                <ul className='list-disc'>
                    <li>Conflicts of interest will be handled by a rotating ethics panel..</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>V. Privacy and Personal Information</p>
                <ul className='list-disc'>
                    <li>Members' information will not be sold, traded, or leased.</li>
                    <li>Members will not be targeted for advertisers.</li>
                    <li>All members' information will remain private.</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>VI. Reporting and Addressing Violations</p>
                <ul className='list-disc'>
                    <li>Violations will be reviewed by a rotating ethics panel.</li>
                    <li>Repeated violators may be relegated to the "zoo" and/or expelled from the platform.</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2 p-3.5">
                <p>VII. Political Neutrality</p>
                <ul className='list-disc'>
                    <li>While political neutrality is not required, members are expected to respect others and their opinions.</li>

                </ul>
            </div>

            <hr />

            <button className='px-6 py-3.5 bg-rose-700 text-white rounded-md mt-4 ml-auto block ' onClick={() => props.handleAgree()}>Agree</button>
        </div>
    );
};
