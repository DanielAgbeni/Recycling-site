// components/Footer.js
import Image from 'next/image';
import React from 'react';
import { MdFacebook } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
	Send,
	Facebook,
	Twitter,
	Instagram,
	Mail,
	Recycle,
} from 'lucide-react';

const Footer = () => {
	const now = new Date().getFullYear();

	return (
		<footer className='bg-gray-800 text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<Image
							src='/iconnobg.png'
							alt='icon'
							width={190}
							height={12}
						/>

						<p>
							Dedicated to revolutionizing plastic recycling for a sustainable
							future.
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='/'
									className='hover:text-primary-100 transition duration-300'>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='hover:text-primary-100transition duration-300'>
									About Us
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='hover:text-primary-100 transition duration-300'>
									Services
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='hover:text-primary-100 transition duration-300'>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='hover:text-primary-100 transition duration-300'>
								<Facebook className='h-6 w-6' />
							</a>
							<a
								href='#'
								className='hover:text-primary-100 transition duration-300'>
								<Twitter className='h-6 w-6' />
							</a>
							<a
								href='#'
								className='hover:text-primary-100 transition duration-300'>
								<Instagram className='h-6 w-6' />
							</a>
							<a
								href='#'
								className='hover:text-primary-100 transition duration-300'>
								<Mail className='h-6 w-6' />
							</a>
						</div>
					</div>
				</div>
				<div className='border-t border-gray-700 mt-8 pt-8 text-center'>
					<p>&copy; {now} BAOBA COMPANY LIMITED. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
