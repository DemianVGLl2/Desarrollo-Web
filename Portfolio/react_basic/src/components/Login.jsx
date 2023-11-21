import React, { useState } from "react";
import axios from "axios";

function Login(props) {

    //const [user, setUser] = useState("");
    //const [password, setPassword] = useState("");
    const [userProfile, setUserProfile] = useState({user: "", password: ""});
    const [message, setMessage] = useState("");
    const errorStyle = {marginTop: "10px", color: "red"};

    /*
    function userListener(event) {
        const {value, name} = event.target;

        //setUser(event.target.value);
        setUserProfile((prevValue) => {
            return { ...prevValue, user: event.target.value }
        });
    }

    function passwordListener(event) {
        const {value, name} = event.target;

        //setPassword(event.target.value);
        setUserProfile((prevValue) => {
            return { ...prevValue, password: event.target.value }
        });
    }
    */
    
    function userProfileListener(event) {
        const {value, name} = event.target;

        //setUser(event.target.value);
        setUserProfile((prevValue) => {
            return { ...prevValue, [name]: value }
        });
    }

    function submitForm(event) {
        axios
            .post("/login", {
                user: userProfile.user,
                password: userProfile.password,
            })
            .then((res) => {
                console.log("Response from server");
                if (res.data.authorization === 1) {
                    console.log("Logged in");
                    setMessage("");
                    props.listener();
                } else {
                    console.log("Wrong data");
                    setMessage("Wrong data");
                }
            })
            .catch((err) => {
                console.error(err.error);
            });

        /*if (userProfile.user === "Demián" && userProfile.password === "1234") {
            console.log("Logged in");
            //setMessage("");
            props.listener();
        }
        else {
            console.log("Wrong data");
            setMessage("Wrong data");
        }
        console.log("Message: "+message);*/
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Username" name="user" onChange={userProfileListener} value={userProfile.user}/>
                <input type="password" placeholder="Password" name="password" onChange={userProfileListener} value={userProfile.password}/>
                <button type="submit">Login</button>
            </form>
            <div style={errorStyle}>{message}</div>
        </div>
    );
}

export default Login;