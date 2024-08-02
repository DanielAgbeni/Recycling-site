const Accreditation = () => {
	const accreditations = [
		{ name: 'EFSA', image: '/accreditation1.webp' },
		{ name: 'FDA', image: '/accreditation2.webp' },
		{ name: 'SON', image: '/accreditation3.webp' },
		{ name: 'Halal', image: '/accreditation4.webp' },
	];

	return (
		<div
			className='bg-gray-100 py-16'
			id='accreditation'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
					Our Accreditations
				</h2>
				<p className='text-lg text-center mb-8 max-w-3xl mx-auto text-gray-600'>
					We ensure our products meet the highest standards, certified by
					leading authorities in food safety and quality control.
				</p>
				<div className='flex flex-wrap justify-center items-center gap-8'>
					{accreditations.map((accred, index) => (
						<div
							key={index}
							className='w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-4 transition-transform hover:scale-110'>
							<img
								src={accred.image}
								alt={accred.name}
								className='max-w-full max-h-full'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Accreditation;
