import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const [formData, setFormData] = useState({
		subject: "",
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.subject) newErrors.subject = "Subject is missing";
		if (!formData.name) {
			newErrors.name = "Name is missing";
		} else if (formData.name.trim().split(" ").length < 2) {
			newErrors.name = "Please enter both first and last name";
		}
		if (!formData.email) {
			newErrors.email = "Please enter a valid Email";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid Email";
		}
		if (!formData.message) newErrors.message = "Message is missing";
		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setErrors({});
		try {
			const response = await fetch(
				"https://apimailer-one.vercel.app/api/v1/sendemail",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			setTimeout(() => {
				navigate("/messagesent");
			}, 50);
		} catch (error) {
			console.error("An error occurred while sending the email:", error);
			setErrors({ submit: "Error sending email" });
		}
	};
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
		}
	};

	return (
		<div
			id="contact"
			className="flex flex-col items-center justify-center h-[auto] mt-44 md:mt-48 xl:mt-24 2xl:mt-64 desktop:mt-72 border-2 border-solid border-yellow-400 rounded-lg px-[4em] sm:px-[13em] md:px-[18em] py-[7em] lg:px-[22em] lg:p-[10em] bg-black-60 xl:px-20 sm:w-[40%] md:w-[50%] w-[70%] relative"
			data-aos="fade-down">
			<h1 className="font-audiowide text-[#fffc00] text-[2em] md:text-[2em] lg:text-[3em] w-[300px] lg:w-[400px] uppercase mb-7 text-center">
				Contact me
			</h1>
			<form
				className="flex flex-col items-center justify-center gap-6 font-kanit xl:w-[50%]"
				onSubmit={handleSubmit}>
				<Input
					label="Subject"
					name="subject"
					color="white"
					className={`w-full input-font-kanit ${
						errors.subject
							? "border-2 border-solid border-violet-500"
							: ""
					}`}
					value={formData.subject}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>

				<Input
					label="Full Name"
					name="name"
					color="white"
					className={`font-kanit w-full input-font-kanit ${
						errors.name
							? "border-2 border-solid border-violet-500"
							: ""
					}`}
					value={formData.name}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>

				<Input
					label="Email"
					name="email"
					color="white"
					className={`w-full input-font-kanit ${
						errors.email
							? "border-2 border-solid border-violet-500"
							: ""
					}`}
					value={formData.email}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>

				<Input
					label="Message"
					name="message"
					color="white"
					className={`w-full input-font-kanit ${
						errors.message
							? "border-2 border-solid border-violet-500"
							: ""
					}`}
					value={formData.message}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>

				<Button
					type="submit"
					className="w-64 font-audiowide text-[#fffc00] text-[0.9em] sm:text-[1.2em] relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600">
					<span className="relative z-10">Send</span>
					<span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span>
				</Button>

				{Object.keys(errors).length > 0 && (
					<div className="mt-2 text-[11px] lg:text-[15px] text-white font-kanit absolute top-[82%] lg:top-[80%]">
						Please fix the following errors before submitting:
						<ul className="list-disc list-inside">
							{errors.subject && (
								<li className="text-white">{errors.subject}</li>
							)}
							{errors.name && (
								<li className="text-white">{errors.name}</li>
							)}
							{errors.email && (
								<li className="text-white">{errors.email}</li>
							)}
							{errors.message && (
								<li className="text-white">{errors.message}</li>
							)}
						</ul>
					</div>
				)}

				{errors.submit && (
					<p className="text-violet-500 text-sm mt-2">
						{errors.submit}
					</p>
				)}
			</form>
		</div>
	);
};

export default Contact;
