import { ArrowRight, Recycle, Award, Users } from 'lucide-react';

const About = () => {
	return (
		<div
			className='bg-white py-16'
			id='about'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
					About BAOBA COMPANY LIMITED
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='text-center'>
						<Recycle
							size={48}
							className='text-primary-100 mx-auto mb-4'
						/>
						<h3 className='text-xl font-semibold mb-2'>Innovative Recycling</h3>
						<p className='text-gray-600'>
							We use cutting-edge technology to convert plastic waste into
							valuable resources.
						</p>
					</div>
					<div className='text-center'>
						<Users
							size={48}
							className='text-primary-100 mx-auto mb-4'
						/>
						<h3 className='text-xl font-semibold mb-2'>
							Community Partnerships
						</h3>
						<p className='text-gray-600'>
							We work closely with businesses, communities, and governments to
							implement effective recycling programs.
						</p>
					</div>
					<div className='text-center'>
						<Award
							size={48}
							className='text-primary-100 mx-auto mb-4'
						/>
						<h3 className='text-xl font-semibold mb-2'>Environmental Impact</h3>
						<p className='text-gray-600'>
							Our mission is to minimize environmental impact and create a
							sustainable future for our planet.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
