import React from 'react';
import useInputField from "../../Hooks/CustomHooks/useInputField";

const SignupForm = () => {

    const firstName = useInputField("");
    const lastName = useInputField("");
    const email = useInputField("");


    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Signup Form</h1>
            <form>
                <label>First Name</label>
                &nbsp;

                <input type="text" {...firstName} placeholder="First Name" />
                &nbsp;

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