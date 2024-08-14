import {configureStore} from "@reduxjs/toolkit"
import jobReducer from "./slice/jobSlice"
import  userReducer  from "./slice/userSlice"
import  applicationReducer  from "./slice/applicationSlice"
import updateProfileReducer from "./slice/updateProfileSlice"
const store= configureStore({
    reducer:{
        user:userReducer,
        jobs:jobReducer,
        applications:applicationReducer,
        updateProfile:updateProfileReducer,
    }
})

export default store