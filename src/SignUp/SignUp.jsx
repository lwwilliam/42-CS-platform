import React from 'react';
import { useForm } from "react-hook-form"
import './SignUp.css';
import { useNavigate as navigate } from 'react-router-dom';


function SignUp(){
	const url = window.location.href;
	let text = url;
	const myArray = text.split("/");
	let len = myArray.length;
	const {
		register,
		handleSubmit,
		formState: {errors}
		} = useForm(
			{ defaultValues: {
				Club: myArray[len - 2],
				// Club: "placeholder",
				Name: "",
				studentID: "",
				contactNumber: "",
				gender: "--select one--",
			}}
		);
	const onSubmit = (data) => console.log(data); navigate("/MyClubs")

	function handleClick(){
		navigate("/ClubInfo");
	}
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text"{...register("Club", {disabled: true})} />
				<br></br>
				<input type="text"{...register("Name", {required: "Please Fill In This Field"})} placeholder="Name" />
				<p>{errors.Name?.message}</p>
				<br></br>
				<input type="text"{...register("studentID", {required: "Please Fill In This Field"})} placeholder="Student ID" />
				<p>{errors.studentID?.message}</p>
				<br></br>
				<input type="text"{...register("contactNumber", {required: "Please Fill In This Field", minLength: { value: 9, message: "min length 9"}})} placeholder="Contact Number" />
				<p>{errors.contactNumber?.message}</p>
				<br></br>
				<select {...register("gender", {required: "Please Select One"})}>
				<option value="male">male</option>
				<option value="female">female</option>
				<option value="other">other</option>
				</select>
				<p>{errors.gender?.message}</p>
				<br></br>
				<input type="submit" />
				<br></br>
				<button onClick={handleClick()}>Cancel</button>
			</form>
		</div>
	)
}

export default SignUp;
