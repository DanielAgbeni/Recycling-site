'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeNav, setActiveNav] = useState('Home');

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', link: '#' },
		{ name: 'About', link: '#about' },
		{ name: 'Products', link: '#products' },
		{ name: 'Accreditation', link: '#accreditation' },
		{ name: 'Contact', link: '#contact' },
	];

	const handleNavClick = (name) => {
		setActiveNav(name);
		setIsMenuOpen(false);
	};

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white shadow-md' : 'bg-white'
			}`}>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between py-4'>
					<Image
						src='/icon.png'
						alt='icon'
						width={160}
						height={12}
					/>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex space-x-8'>
							{navItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.link}
										className={`text-lg font-medium text-gray-700 hover:text-primary-100 transition-colors duration-300 ${
											activeNav === item.name
												? 'border-b-2 border-primary-100'
												: ''
										}`}
										onClick={() => handleNavClick(item.name)}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile Navigation */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='p-2 text-gray-500 hover:text-primary-100 transition-colors duration-300'>
							{isMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden bg-white ${
					isMenuOpen ? 'max-h-screen' : 'max-h-0'
				} overflow-hidden transition-all duration-300`}>
				<nav className='container mx-auto px-4 py-4'>
					<ul className='space-y-4'>
						{navItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.link}
									className={`block py-2 text-lg font-medium text-gray-700 hover:text-primary-100 transition-colors duration-300 ${
										activeNav === item.name
											? 'border-b-2 border-primary-100'
											: ''
									}`}
									onClick={() => handleNavClick(item.name)}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
