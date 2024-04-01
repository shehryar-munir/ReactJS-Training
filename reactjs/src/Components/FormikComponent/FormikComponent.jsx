import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    phoneNumbers: [""]
}

const submit = values => {
    console.log("FormikComponent Data: ", values)
}

const genders = [
    { key:"Male", value:"male"},
    {key: "Female", value: "female"},
    {key: "Other", value: "other"}
]

const roles = [
    {key:"Associate Software Engineer", value:"ASE"},
    {key:"Software Engineer", value:"SE"},
    {key:"Senior Software Engineer", value:"SSE"},
    {key:"Lead Software Engineer", value:"LSE"},
]

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
};

const FormikComponent = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"25vh"
        }}>
            <h1> Enrollment Form</h1>
            <Formik initialValues={initialValues} onSubmit={submit} validate={validate}>
                <Form>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name"/>
                        <ErrorMessage name="name"/>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email"/>
                        <ErrorMessage name="email"/>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                        <label htmlFor="channel">Channel</label>
                        <Field type="text" id="channel" name="channel"/>
                        <ErrorMessage name="channel"/>
                    </div>

                    <FieldArray name="phoneNumbers">
                        {({push, remove, form}) => {
                            const {values} = form;
                            const {phoneNumbers} = values;

                            return (
                                <div style={{marginTop: "2vh"}}>
                                    {phoneNumbers.map((phoneNumber, index) => (
                                        <div key={index}>
                                            <label htmlFor={`phoneNumbers[${index}]`}>Phone {index + 1} &nbsp;</label>
                                            <Field type="text" name={`phoneNumbers[${index}]`}
                                                   id={`phoneNumbers[${index}]`}/>
                                            <button type="button" onClick={() => push("")}>+</button>
                                            {phoneNumbers.length > 1 &&
                                                <button type="button" onClick={() => remove(index)}>-</button>}
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                    </FieldArray>

                    <label htmlFor={"gender"}>Gender</label>
                    &nbsp;
                    &nbsp;
                    <Field as="select" id={"genders"} name={"genders"} style={{marginTop: "2vh"}}>

                        return (
                        {
                            genders.map((gender, index) => {
                                return <option key={index} value={gender.value}
                                               id={gender.value}>{gender.value}</option>
                            })
                        });

                    </Field>

                    {/*Multi Select */}
                    <br/>

                    <label htmlFor={"gender"}>Role</label>
                    &nbsp;
                    &nbsp;
                    <Field as="select" id={"roles"} name={"roles"} style={{marginTop: "2vh"}} multiple>

                        return (
                        {
                            roles.map((role, index) => {
                                return <option key={index} value={role.value}
                                               id={role.value}>{role.value}</option>
                            })
                        });

                    </Field>


                    <button style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "2vh"
                    }} type="submit">Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormikComponent;
