'use client';

import React from 'react';
import { ArrowRight, Recycle, Award, Users } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
	const backgroundStyle = {
		backgroundImage: `url(/plastic.jpeg)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	};

	return (
		<div
			style={backgroundStyle}
			className='bg-gray-100 min-h-screen flex items-center justify-center'>
			<div className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto text-center backdrop-blur-sm bg-opacity-10 bg-white rounded-xl p-4'>
					<h1 className='text-5xl font-bold mb-6 text-white'>
						BAOBA COMPANY LIMITED
					</h1>
					<p className='text-xl mb-8 text-white'>
						Transforming plastic waste into sustainable resources for a cleaner,
						greener future.
					</p>
					<a href='#about'>
						<button className='bg-primary-100 text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-400 transition duration-300 flex items-center mx-auto'>
							Learn More <ArrowRight className='ml-2' />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
