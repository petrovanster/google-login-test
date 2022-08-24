import React from "react"
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, isLoggedIn, login, logout } from "./Slice";





const Login = props => {
    const logged = useSelector(isLoggedIn)
    const profile = useSelector(getCurrentUser);

    const dispatch = useDispatch();
    console.log(logged);


    const onSuccess = (response) => {
        console.log(response);
        dispatch(login({ id: 1, name: "dev user" }));
    }



    const onError = (response) => {
        console.log(response);
    }



    const onLogout = () => {
        googleLogout();
        dispatch(logout({}));
    }

    if (!logged) {
        return (
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
            />);
    }


    return (<div>Welcome {profile.name}
        <button onClick={onLogout}>Logout</button>
    </div>)
}

export default Login;
