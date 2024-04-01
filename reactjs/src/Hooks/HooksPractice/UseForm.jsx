import React from 'react';
import { useForm } from 'react-hook-form';

const genders = [
    {key:"male", value:"Male"},
    {key:"female", value:"Female"},
    {key:"other", value:"Other"}
]

const UseForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }
        }>
            <h1>Form Management via Use Form Hook</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                    <label htmlFor={"username"}>Username</label>

                    <input type={'text'} id={'username'} {...register("username")}/>
                </div>

                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                    <label htmlFor={"email"}>Email</label>
                    <input type={'text'} id={'email'} {...register("email")}/>
                </div>

                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                    <label htmlFor={"phone"}>Phone</label>
                    <input type={'text'} id={'phone'} {...register("phone")}/>
                </div>

                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                    <label htmlFor={"gender"}>Gender</label>
                    <select {...register("gender")} multiple>
                        {
                            genders.map((gender, index)=>{
                                return <option key={index}>{gender.value}</option>
                            })
                        }
                    </select>
                </div>


                <div style={{display: "flex", flexDirection: "column", marginTop: "2vh"}}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UseForm;

