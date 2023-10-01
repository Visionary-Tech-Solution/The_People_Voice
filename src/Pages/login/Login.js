import { Link } from "react-router-dom";
import axios from '../../apiService/axios';
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';
import { Formik } from "formik";
import store from "../../Redux/store/store";
import { addUserActions } from "../../Redux/apiSlice/userSlice";
export const Login = () => {
    const [cookie, setCookie] = useCookies(["token"]);
    const Registerapi = async (values) => {
        const loading = toast.loading("Please wait a moment...");

        try {
            const res = await axios.post("/login/", values)
             console.log(res);
            const { data, status } = res;
            if (status === 200) {
                // setIsLoading(false);
                store.dispatch(addUserActions.addUser(res.data.profile))
                toast.dismiss(loading);
                toast.success("successfully login");
                setCookie("token", data?.token, {
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                });
            }
        } catch (error) {
            console.log(error);
            toast.dismiss(loading);
        }

    }
    return (
        <div className="relative bg-sale-banner-bg bg-center bg-cover bg-no-repeat bg-static bg-fixed">

            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="relative  z-10">

                <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
                    <div className="flex justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-android2 text-rose-700" viewBox="0 0 16 16">
                            <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
                        </svg>
                    </div>

                    <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-slate-200 capitalize md:text-3xl">
                        Login
                    </h1>



                    <div className="w-full max-w-lg mx-auto mt-6 ">
                        <Formik
                            enableReinitialize
                            initialValues={{
                                username: '',

                                password: '',


                            }}
                            validate={(values) => {

                                const errors = {};
                                if (!values.username) {
                                    errors.username = "Please enter your user name";
                                }

                                if (!values.password) {
                                    errors.password = "Please enter your password";
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
                            }) => (<form className="space-y-8" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block mb-2 text-sm text-slate-300">Username </label>
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
 
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-slate-300">Password</label>
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

                                    
                                </div>

                                <div className="flex justify-between text-slate-200">
                                    <div className="flex items-center">
                                        <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                                        <label for="remember" className="text-sm dark:text-gray-400">Remember me</label>
                                    </div>
                                    <a className="text-sm dark:text-gray-400" href="/">Forgot your password?</a>
                                </div>

                                <button className="  mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-400 flex justify-center items-center gap-4" type="submit">

                                    <span>Sign in</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </button>

                                <div className="mt-6 text-center">
                                    <Link to="/signup" className="text-sm text-slate-300 hover:underline dark:text-blue-400">
                                        Don’t have an account yet? Sign up
                                    </Link>
                                </div>


                            </form>
                            )}
                        </Formik>
                    </div>


                    <div className="flex justify-between items-center gap-10 my-8">
                        {/* <button className="bg-rose-600 text-white font-medium py-2 px-5 flex justify-between items-center rounded-md gap-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            <span>Continue with Google</span>
                        </button>
                        <button className="bg-blue-700 text-white font-medium py-2 px-5 flex justify-between items-center rounded-md gap-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            </svg>
                            <span>Continue with Apple</span>
                        </button> */}
                    </div>
                </div>


            </div>

        </div>
    );
};