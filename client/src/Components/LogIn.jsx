import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './LogIn.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
};


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br />
            <button type="submit">Log In</button>

            <h3>Don't have an account?</h3>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </form>
    );
}

export default LoginForm
// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

// const renderErrorMessage = (name) => {
//     name === errorMessages.name && (
//         <div className="error">{errorMessages.message}</div>
//     )
// }

// const handleSubmit = (event) => {
//     event.preventDefault();
// }

// const LogIn = () => {
//     <div className="log-cont">
//         <div className="header">
//             <span>Log In</span>
//         </div>
//         <form>
//             <div className="input">
//                 <label>Username </label>
//                 <input type="text" name="uname" required />
//                 {/* {renderErrorMessage("uname")} */}
//             </div>
//             <div className="input">
//                 <label>Password</label>
//                 <input type="password" name="pass" required />
//                 {/* {renderErrorMessage("pass")} */}
//             </div>
//             <div className="button">
//                 <input type="submit" />
//             </div>
//         </form>
//     </div>

// }

// export default LogIn