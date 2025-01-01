import React from 'react';
import SEO from './SEO';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import WhatWeDo from '@/components/WhatWeDo';
import Products from '@/components/Products';
import Accreditation from '@/components/Accreditation';

const Home = () => {
	return (
		<div>
			<SEO
				title='BAOBA Company Limited'
				description='BAOBA Company Limited is a global leader in recycling plastic waste into sustainable resources. Discover our innovative solutions for reducing environmental impact and creating a greener, cleaner planet.'
			/>
			<Hero />
			<About />
			<WhatWeDo />
			<Products />
			<Accreditation />
			<Contact />
		</div>
	);
};

export default Home;
