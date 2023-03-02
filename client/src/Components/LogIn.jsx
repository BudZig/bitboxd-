import React from "react";
import { useState } from "react";
import './LogIn.css';
// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

// const renderErrorMessage = (name) => {
//     name === errorMessages.name && (
//         <div className="error">{errorMessages.message}</div>
//     )
// }

const handleSubmit = (event) => {
    event.preventDefault();
}

const LogIn = () => {
    <div className="log-cont">
        <div className="header">
            <span>Log In</span>
        </div>
        <form>
            <div className="input">
                <label>Username </label>
                <input type="text" name="uname" required />
                {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input">
                <label>Password</label>
                <input type="password" name="pass" required />
                {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button">
                <input type="submit" />
            </div>
        </form>
    </div>

}

export default LogIn