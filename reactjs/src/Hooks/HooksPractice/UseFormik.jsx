import React from 'react';
import {useFormik} from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: ""
}

const onSubmit = values => {
    console.log("FormikComponent Data: ", values)
}

const validate = values => {
   let errors = {}

    if (!values.name){
        errors.name  = "Required"
    }

    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email format"
    }

    if (!values.channel){
        errors.channel = "Required"
    }

    return errors
}

const UseFormik = () => {

    const formik = useFormik({
            initialValues: initialValues,
            onSubmit: onSubmit,
            validate: validate
        }
    )


    return (


        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Youtube Form</h1>

            <form onSubmit={formik.handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "2vh" }}>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name="name"/>
                    { formik.touched.name && formik.errors.name ?
                        <p style={{color: "red"}}>{formik.errors.name}</p> : null}
                </div>

                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email"/>
                    {formik.touched.email && formik.errors.email ? <p style={{color:"red"}}>{formik.errors.email}</p> : null}
                </div>

                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>

                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} name="channel"/>
                    {formik.touched.channel && formik.errors.channel ? <p style={{color:"red"}}>{formik.errors.channel}</p> : null}
                </div>

                <button style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "2vh"
                }} type={"submit"}> Submit</button>
            </form>
        </div>

    );
}

export default UseFormik;