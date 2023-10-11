import React from 'react';
// import { useForm } from 'react-hook-form';
// import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import {Button, Label, Select, TextInput} from 'flowbite-react'


function SignUp(){
	const navigate = useNavigate();
	const url = window.location.href;
	let text = url;
	const myArray = text.split("/");
	let len = myArray.length;
	let Club = myArray[len - 1]
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: {errors}
	// 	} = useForm(
	// 		{ defaultValues: {
	// 			Club: myArray[len - 1],
	// 			// Club: "placeholder",
	// 			Name: "",
	// 			studentID: "",
	// 			contactNumber: "",
	// 			gender: "--select one--",
	// 		}}
	// 	);

		// const onSubmit = async (data) => {
		// 	try {
		// 	  // Send form data to the Flask backend
		// 	  const response = await fetch('http://localhost:5000/api/writedata', {
		// 		method: 'POST',
		// 		headers: {
		// 		  'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(data),
		// 	  });

		// 	  if (response.ok) {
		// 		console.log('Form data sent to backend successfully.');
		// 		navigate("/ClubInfo");
		// 	  } else {
		// 		console.error('Failed to send form data to backend.');
		// 	  }
		// 	} catch (error) {
		// 	  console.error('Error sending form data:', error);
		// 	}
		//   };
	return (
		// <div>
		// 	<form className='form-style' onSubmit={handleSubmit(onSubmit)}>
		// 		<input type="text"{...register("Club", {disabled: true})} />
		// 		<br></br>
		// 		<input type="text"{...register("Name", {required: "Please Fill In This Field"})} placeholder="Name" />
		// 		<p>{errors.Name?.message}</p>
		// 		<br></br>
		// 		<input type="text"{...register("studentID", {required: "Please Fill In This Field"})} placeholder="Student ID" />
		// 		<p>{errors.studentID?.message}</p>
		// 		<br></br>
		// 		<input type="text"{...register("contactNumber", {required: "Please Fill In This Field", minLength: { value: 9, message: "min length 9"}})} placeholder="Contact Number" />
		// 		<p>{errors.contactNumber?.message}</p>
		// 		<br></br>
		// 		<select {...register("gender", {required: "Please Select One"})}>
		// 		<option value="male">male</option>
		// 		<option value="female">female</option>
		// 		<option value="other">other</option>
		// 		</select>
		// 		<p>{errors.gender?.message}</p>
		// 		<br></br>
		// 		<input type="submit" />
		// 		<br></br>
		// 		<button onClick={() => navigate('/ClubInfo')}>Cancel</button>
		// 	</form>
		// </div>

		<div>
			<div className='flex h-[30vh]'></div>
			<div className='inline-flex w-[40%]'></div>
			<form className='inline-flex w-[20vw] flex-col gap-4 bg-white rounded-md'>
				<div>
					<div className='mb-0 block text-black pl-2'>
						<Label
							value='Name'
						/>
					</div>
					<TextInput
						className='pl-2'
						helperText={<p className="text-black">Full Name As Per IC</p>}
						id="name"
						sizing="xl"
						placeholder="John Doe"
						required
						type="text"
					/>
				</div>
			</form>
		</div>
	)
}

export default SignUp;
