import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import { Blogs } from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { Products } from "../Pages/Products/Products"
import { Login } from "../Pages/login/Login"
import Signup from "../Pages/signup/Signup"
import Subscribe from "../Pages/Subscribe/Subscribe"
import Polls from "../Pages/Poll/Poll"
import Abouts from "../Pages/About/About"
import Blog, { BlogDetails } from "../components/Home/Blog"
import Reading, { ReadingDetails } from "../components/Home/Reading"
import Podcast, { PodcastDetails } from "../components/Home/Podcast"
import Contact from "../components/Home/Contact"
import Partner from "../components/Home/Partner"
import News, { NewsDetails } from "../components/Home/News"
import PeoplesContract from "../components/Home/PeoplesContract"
import Candidates from "../components/Home/Candidate"
import RealNews from "../components/Home/RealNews"
import Forum from "../components/Home/PeopleForum"
import Zoo from "../Pages/Zoo/Zoo"
import PublicRoute from "./PublicRoute"
import ProtectedRoute from "./ProtectedRoute"
import Profile from "../components/Navbar/Profile"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path:"/poll",
                element:<Polls/>
            },
            {
                path:"/news",
                element:<News/>
            },
            {
                path:"/news/:id",
                element:<NewsDetails/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/blog/:id",
                element:<BlogDetails/>
            },
            {
                path:"/reading",
                element:<Reading/>
            },
            {
                path:"/reading/:id",
                element:<ReadingDetails/>
            },
            {
                path:"/podcast",
                element:<Podcast/>
            },
            {
                path:"/podcast/:id",
                element:<PodcastDetails/>
            },
            {
                path:"/about",
                element:<Abouts/>
            },
            {
                path:"/contract",
                element:<Contact/>
            },
            {
                path:"/partners",
                element:<Partner/>
            },
            {
                path:"/people-contract",
                element:<PeoplesContract/>
            },
            {
                path:"/candidate",
                element:<Candidates/>
            },
            {
                path:"/real-news",
                element:<RealNews/>
            },{
                path:"/people-forum",
                element:<Forum/>
            },
            {
                path: '/zoo',
                element: <Zoo/>,
            },
            {
                path: '/profile',
                element: <ProtectedRoute><Profile /></ProtectedRoute> ,
            },
            {
                path: '/login',
                element: <PublicRoute><Login /></PublicRoute> ,
            },
            {
                path: '/signup',
                element: <PublicRoute><Signup /></PublicRoute> ,
            },
            
        ],

    },
   
    {
        path:"/subscribe",
        element:<ProtectedRoute><Subscribe/></ProtectedRoute> 
    },
    
    {
        path: '/dashboard',
        // element: <><DashboardLayout></DashboardLayout></>,
        children: [
            

        ]
    },
])

export default router