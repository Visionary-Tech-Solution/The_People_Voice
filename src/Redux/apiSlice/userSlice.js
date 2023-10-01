import { createSlice } from "@reduxjs/toolkit";
const UserData = {
  email: "",
  username: "",
  first_name: "",
  last_name: "",
  profile_picture: [],
  is_superuser: "",
  is_subscribed: "",
  is_verified: "",
};
const addUserSlices = createSlice({
  name: "User",
  initialState: UserData,
  reducers: {
    addUser: (state, action) => {
      state.profile_picture =
        action.payload.profile_picture
      state.email = action.payload.email;
      state.is_verified = action.payload.is_verified;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.is_subscribed = action.payload.is_subscribed;
      state.username = action.payload.username;
    },
    removeUser: (state, action) => {
      state.profile_picture = [];
      state.email = "";
      state.is_verified = "";
      state.first_name = "";
      state.last_name = "";
      state.is_subscribed = "";
      state.username = "";
    },
  },
});

export default addUserSlices.reducer;
export const addUserActions = addUserSlices.actions;








// import { createSlice } from "@reduxjs/toolkit";
// const UserData = {
//   email: "",
//   username: "",
//   first_name: "",
//   last_name: "",
//   profile_picture: [],
//   is_superuser: "",
//   is_subscribed: "",
//   is_verified: "",
//   cell_phone:"",
//   birth_month_year:"",
//   state:"",
//   city:"",
//   country:"",
//   political_affiliation:"",
//   national_elections_voted:"",
//   state_elections_voted:""
// };
// const addUserSlices = createSlice({
//   name: "User",
//   initialState: UserData,
//   reducers: {
//     addUser: (state, action) => {
//       state.profile_picture =
//       action.payload.profile_picture
//       state.email = action.payload.email;
//       state.is_verified = action.payload.is_verified;
//       state.first_name = action.payload.first_name;
//       state.last_name = action.payload.last_name;
//       state.is_subscribed = action.payload.is_subscribed;
//       state.username = action.payload.username;
//       state.cell_phone = action.payload.cell_phone;
//       state.birth_month_year = action.payload.birth_month_year;
//       state.state=action.payload.state;
//       state.city=action.payload.city;
//       state.country=action.payload.country;
//       state.political_affiliation=action.state.political_affiliation;
//       state.national_elections_voted = action.payload.national_elections_voted;
//       state.state_elections_voted=action.payload.state_elections_voted
//     },
//     removeUser: (state, action) => {
//       state.profile_picture = [];
//       state.email = "";
//       state.is_verified = "";
//       state.first_name = "";
//       state.last_name = "";
//       state.is_subscribed = "";
//       state.username = "";
//       state.cell_phone = "";
//       state.birth_month_year = "";
//       state.state="";
//       state.city="";
//       state.country="";
//       state.political_affiliation="";
//       state.national_elections_voted ="";
//       state.state_elections_voted=""
//     },
//   },
// });

// export default addUserSlices.reducer;
// export const addUserActions = addUserSlices.actions;
