import { RouterProvider } from "react-router"
import router from "./Routes/routes.config"

import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import axios from "./apiService/axios";
import store from "./Redux/store/store";
import { addUserActions } from "./Redux/apiSlice/userSlice";
export default function App() {
  const [, , removeCookie] = useCookies(["token"]);
  useEffect(() => {
    async function userProfile() {
      try {
        const profile = await axios.get("/profile/")
        // .then(res=>{
          console.log(profile);
         store.dispatch(addUserActions.addUser(profile?.data));
        // })
      }
      catch {
        removeCookie("token", { path: "/" });
        // navigate("/")
      }

    }

    userProfile()
  }, [])

  return (
    <>
      <ScrollUpButton ContainerclassName="p-2 "
        TransitionclassName="transition duration-300" />
      <RouterProvider router={router} />
    </>
  )
}


// placeholder='Enter state_elections_voted'
// type="state_elections_voted"
// id="state_elections_voted"
// name="state_elections_voted"
// className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.state_elections_voted?'border border-red':'border border-white'}`}
// onChange={handleChange}
// onBlur={handleBlur}
// value={values.state_elections_voted}
// error={errors.state_elections_voted && touched.state_elections_voted && errors.state_elections_voted}
// helperText={errors.state_elections_voted && touched.state_elections_voted && errors.state_elections_voted}
//         />
//         {errors.state_elections_voted && touched.state_elections_voted && (
//             <div className="text-red text-xs">{errors.state_elections_voted}</div>
//         )}

//         {!errors.state_elections_voted && touched.state_elections_voted && (
//             <div className="text-green-500 text-xs">Ok</div>
//         )}