import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/People House Image & Data/Logo.webp'
import hero from '../../Assets/Photos/hero.jpeg'
import About from '../Home/About';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import store from '../../Redux/store/store';
import { addUserActions } from '../../Redux/apiSlice/userSlice';
const handleClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
    const user = useSelector(state => state.reducer.user)
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies(["token"]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;
    const logout = () => {
        store.dispatch(addUserActions.removeUser())
        removeCookie("token", { path: "/" });
        navigate("/")
    }
    return (
        <>
            <div className="   bg-[#B22234] text-white">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center mr-8"
                        >
                            <img src={logo} alt="" width="180px" className='h-[100px]' />

                        </a>
                        <ul className="flex items-center hidden space-x-8 lg:flex ">

                            <li  >
                                <Link
                                    to="/about"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                >
                                    About
                                </Link>
                            </li>
                            <li className="group relative ">

                                <Link
                                    to="/news"
                                    className=" font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "

                                >
                                    <div className='flex items-center' >
                                        <span>News </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                    </div>
                                </Link>

                                <ul className="group-hover:block hidden   absolute top-[100%] left-0 z-[999] bg-white  border space-y-3 py-4 rounded-md w-[200px]">
                                    <li className=" hover:bg-slate-200">
                                        <Link
                                            to="/blog"
                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-slate-200">
                                        <Link
                                            to="/reading"
                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                        >
                                            Reading
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-slate-200">
                                        <Link
                                            to="/podcast"
                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                        >
                                            Podcast
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-slate-200" >
                                        <Link
                                            to="/real-news"
                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868]  "
                                        >
                                            Real News
                                        </Link>
                                    </li>
                                    <li className=" hover:bg-slate-200" >
                                        <Link
                                            to="/people-forum"
                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868]  "
                                        >
                                            People's Forum
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li  >
                                <Link
                                    to="/partners"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                >
                                    Partners
                                </Link>
                            </li>
                            <li  >
                                <Link
                                    to="/contract"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                >
                                    Contact
                                </Link>
                            </li>

                            <li className="group relative ">

                                <Link
                                    to="/people-contract"
                                    className=" font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "

                                >
                                    <div className='flex items-center' >
                                        <span>People's Contract</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                    </div>
                                </Link>

                                <ul className="group-hover:block hidden   absolute top-[100%] left-0 z-[999] bg-white  border space-y-3 py-4 rounded-md w-[200px]">

                                    <li className=" hover:bg-slate-200">
                                        <Link
                                            to="/poll"
                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                        >
                                            Polls
                                        </Link>
                                    </li>



                                </ul>
                            </li>
                            <li  >
                                <Link
                                    to="/candidate"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                >
                                    Candidate
                                </Link>
                            </li>
                            <li  >
                                <Link
                                    to="/zoo"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                >
                                    Zoo
                                </Link>
                            </li>


                        </ul>

                    </div>





                    {/*  */}
                    <ul className="items-center hidden space-x-8 lg:flex mr-3 mx-4">
                        {token ?
                            <li className="group relative ">
                                <Link
                                    to="/profile"
                                    className=" font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] hover:underline "

                                >
                                    <div className='flex items-center' >
                                        <span>Profile</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                    </div>
                                </Link>
                                <ul className="group-hover:block hidden   absolute top-[100%] left-0 z-[999] bg-white  border space-y-3 py-4 rounded-md w-[200px]">
                                    <li className=" hover:bg-slate-200 text-black">
                                        <button onClick={logout}>
                                            Log-out
                                        </button>
                                    </li>
                                </ul>
                            </li>

                            : <li className='ml-3'>
                                <Link to="/login">
                                    Log-in
                                </Link>
                            </li>

                        }
                        <li>
                            <Link to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook " viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                            </Link>
                        </li>
                        <form className="relative mx-auto w-max">
                            <input type="search"
                                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border-rose-300 focus:pl-16 focus:pr-4" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>

                        <select id="lang" className="bg-gray-50 border border-red text-slate-800 text-sm rounded-lg ">
                            <option selected>EN</option>
                            <option value="US">SP</option>

                        </select>

                    </ul>


                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-[999]">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half text-rose-700" viewBox="0 0 16 16">
                                                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                                </svg>
                                                <span className="ml-2 text-xl text-slate-800 font-bold tracking-wide text-gray-800 uppercase">
                                                    GILI GILI
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-black"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className="text-slate-900">
                                        <ul className="space-y-4">

                                            <li >
                                                <Link
                                                    to="/about"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    About
                                                </Link>
                                            </li>

                                            <li className="group relative " onClick={() => setIsOpen(!isOpen)}>
                                                <Link
                                                    to="/news"
                                                    className=" font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                                >
                                                    News
                                                </Link>


                                                <ul className={`group-hover:block hidden absolute top-[100%] left-0 z-[999999] bg-white  border space-y-3 py-4 rounded-md ${isOpen ? 'block' : 'hidden'}`}>
                                                    <li className=" hover:bg-slate-200">
                                                        <Link
                                                            to="/blog"
                                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                                        >
                                                            Blog
                                                        </Link>
                                                    </li>
                                                    <li className=" hover:bg-slate-200">
                                                        <Link
                                                            to="/reading"
                                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                                        >
                                                            Reading
                                                        </Link>
                                                    </li>
                                                    <li className=" hover:bg-slate-200">
                                                        <Link
                                                            to="/podcast"
                                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                                        >
                                                            Podcast
                                                        </Link>
                                                    </li>
                                                    <li className=" hover:bg-slate-200">
                                                        <Link
                                                            to="/real-news"
                                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                                        >
                                                            Real News
                                                        </Link>
                                                    </li>
                                                    <li className=" hover:bg-slate-200">
                                                        <Link
                                                            to="/people-forum"
                                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                                        >
                                                            People-Forum
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li >
                                                <Link
                                                    to="/partners"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Partners
                                                </Link>
                                            </li>
                                            <li >
                                                <Link
                                                    to="/contract"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                            <li className="group relative " onClick={() => setIsOpen(!isOpen)}>
                                                <Link
                                                    to="/people-contract"
                                                    className=" font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#002868] "
                                                >
                                                    People-Contract
                                                </Link>


                                                <ul className={`group-hover:block hidden absolute top-[100%] left-0 z-[999999] bg-white  border space-y-3 py-4 rounded-md ${isOpen ? 'block' : 'hidden'}`}>
                                                    <li className=" hover:bg-slate-200">
                                                        <Link
                                                            to="/poll"
                                                            className="px-8 py-4 font-medium tracking-wide text-slate-800 transition-colors duration-200 hover:text-[#002868] "
                                                        >
                                                            polls
                                                        </Link>
                                                    </li>


                                                </ul>
                                            </li>
                                            <li >
                                                <Link
                                                    to="/candidate"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Candidate
                                                </Link>
                                            </li>
                                            <li >
                                                <Link
                                                    to="/zoo"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Zoo
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="flex items-center mt-6  space-x-8 lg:flex">
                                            <li>
                                                <Link to="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                    </svg>
                                                </Link>
                                            </li>


                                        </ul>
                                        <ul className="flex justify-between items-center  space-x-8 lg:flex mt-6">
                                            <form className="relative  w-max ">
                                                <input type="search"
                                                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border-rose-300 focus:pl-16 focus:pr-4" />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </form>

                                            <select id="lang" className="bg-gray-50    text-slate-800 text-sm rounded-lg ">
                                                <option selected className="text-slate-900">ENG</option>
                                                <option value="US">SP</option>

                                            </select>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

};

export default Navbar;