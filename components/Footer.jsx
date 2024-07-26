// components/Footer.js
import Image from 'next/image';
import React from 'react';
import { MdFacebook } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
	const now = new Date().getFullYear();
	return (
		<footer className='bg-gray-800 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap justify-between'>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<Image
							src='/icon.png'
							alt='icon'
							width={190}
							height={12}
						/>

						<p>
							Dedicated to revolutionizing plastic recycling for a sustainable
							future.
						</p>
					</div>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul>
							<li className='mb-2'>
								<a
									href='/'
									className='hover:underline'>
									Home
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#about'
									className='hover:underline'>
									About Us
								</a>
							</li>
							<li className='mb-2'>
								<a
									href=''
									className='hover:underline'>
									Services
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='#contact'
									className='hover:underline'>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full md:w-1/3'>
						<h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='hover:text-gray-400'>
								<FaFacebook className='text-2xl' />
							</a>
							<a
								href='#'
								className='hover:text-gray-400'>
								<BsTwitterX className='text-2xl' />
							</a>
							<a
								href='#'
								className='hover:text-gray-400'>
								<FaInstagramSquare className='text-2xl' />
							</a>
							<a
								href='#'
								className='hover:text-gray-400'>
								<MdOutlineMailOutline className='text-2xl' />
							</a>
						</div>
					</div>
				</div>
				<div className='text-center mt-8'>
					<p>&copy; {now} BAOBA COMPANY LIMITED. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
