// pages/contact.js
import React from 'react';
import PageContainer from '../components/PageContainer';
import {
	Send,
	Facebook,
	Twitter,
	Instagram,
	Mail,
	Recycle,
} from 'lucide-react';

const Contact = () => {
	return (
		<div
			className='bg-white py-16'
			id='contact'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>
					Contact Us
				</h2>
				<div className='max-w-lg mx-auto bg-gray-100 rounded-lg p-8 shadow-md'>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 mb-1'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-1'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-1'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								rows='4'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent'
								required></textarea>
						</div>
						<button
							type='submit'
							className='w-full px-6 py-3 bg-primary-100 text-white font-medium rounded-md hover:bg-primary-400 transition duration-300 flex items-center justify-center'>
							Send Message
							<Send className='ml-2 h-5 w-5' />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contact;
