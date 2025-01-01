'use client';
import React, { useState, useRef } from "react";
import PageContainer from './PageContainer';
import emailjs from "@emailjs/browser";

const Contact = () => {

	const form = useRef(null);
	const [formData, setFormData] = useState(
		{
		name: '',
		email: '',
		message: '',
		}

);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');
	// const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
		  ...prevData,
		  [name]: value,
		}));
	  };


	  const handleFormSubmit = async (e) => {
		e.preventDefault();	
		if (!form.current) return;
	
		try {
		  const result = await emailjs.sendForm(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_FEEDBACK,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FEEDBACK,
			form.current,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_FEEDBACK
		  );
	
		  console.log("SUCCESS!", result.text);
		  setFormData({
			name: "",
			email: "",
			message: "",
		  });
		  alert("Message sent successfully!");
		} catch (error) {
		  console.error("FAILED...", error);
		  setError("Failed to send message. Please try again later.");
		}
	  };

	return (
		<>
			<PageContainer>
				<div
					className='max-w-2xl mx-auto'
					id='contact'>
					<h1 className='text-3xl font-bold text-center mb-6'>Contact Us</h1>
					<form
					  ref={form}
						onSubmit={handleFormSubmit}
						className='space-y-6'>
						{/* Input fields */}
						<div>	
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm'
								value={formData.name}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm'
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								rows='4'
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm'
								value={formData.message}
								onChange={handleInputChange}
								required></textarea>
						</div>
						<div>
							<button
								type='submit'
								className='w-full px-4 py-2 bg-primary-100 text-white text-sm font-medium rounded-md'>
								Send Message
							</button>
						</div>
					</form>
					{submitted && (
						<p className='text-green-600 mt-4'>Message sent successfully!</p>
					)}
					{error && <p className='text-red-600 mt-4'>{error}</p>}
				</div>
			</PageContainer>
		</>
	);
};

export default Contact;
