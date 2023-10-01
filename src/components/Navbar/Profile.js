import { Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state => state.reducer.user))
  console.log(user);
    return (
        <div className="relative bg-blog-banner bg-center bg-cover bg-no-repeat bg-static bg-fixed">

            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="relative  z-10">

                <div className=" flex flex-wrap-reverse items-center justify-center  px-6 mx-auto py-10">


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
                                username: user.username || '',
                                email: user.email || '',
                                first_name: user.first_name || '',
                                last_name: user.last_name || '',
                                
                                profile: {
                                    cell_phone: user.cell_phone || '',
                                    birth_month_year: user.birth_month_year || '',
                                    state: user.state || '',
                                    city: user.city || '',
                                    country: user.country || '',
                                    political_affiliation: user.political_affiliation || '',
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


                                </form>
                            )}
                        </Formik>

                    </div>



                </div>

                {/* main container */}
            </div>

        </div>
    );
};

export default Profile;