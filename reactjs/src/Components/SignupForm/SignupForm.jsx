import React from 'react';
import useInputField from "../../Hooks/CustomHooks/useInputField";

const SignupForm = () => {

    const firstName = useInputField("");
    const lastName = useInputField("");
    const email = useInputField("");


    return(
        <div>
            <h1>Signup Form</h1>
            <form>
                <label>First Name</label>
                <input type="text" {...firstName} placeholder="First Name" />
                <br />
                {firstName.value}
                {/*<label>Last Name</label>*/}
                {/*<input type="text" placeholder="Last Name" />*/}
                {/*<br />*/}
                {/*<label>Email</label>*/}
                {/*<input type="email" placeholder="Email" />*/}
                {/*<br />*/}
                {/*<label>Password</label>*/}
                {/*<input type="password" placeholder="Password" />*/}
                {/*<br />*/}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignupForm