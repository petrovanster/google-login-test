import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Auth/Slice'


export default configureStore({
    reducer: {
        user: userReducer
    }
})