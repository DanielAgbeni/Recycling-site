import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'BAOBA Company Limited',
	description:
		'BAOBA Company Limited is a global leader in recycling plastic waste into sustainable resources. Discover our innovative solutions for reducing environmental impact and creating a greener, cleaner planet.',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://www.baobacompanylimited.com/',
		site_name: 'BAOBA Company Limited',
		images: [
			{
				url: 'https://www.baobacompanylimited.com/_next/image?url=%2Ficon.png&w=256&q=75',
				width: 1200,
				height: 630,
				alt: 'BAOBA Company Limited - Sustainable Recycling Solutions',
			},
		],
	},
	keywords: [
		'sustainable recycling',
		'plastic waste recycling',
		'environmental impact solutions',
		'green future',
		'BAOBA Company Limited',
		'Baoba Company Limited',
		'recycling innovation',
	],
	alternates: {
		canonical: 'https://www.baobacompanylimited.com',
	},
	robots: 'index, follow',
	author: 'BAOBA Company Limited',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
