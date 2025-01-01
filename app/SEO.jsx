import Head from 'next/head';
import React from 'react';

const SEO = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content={description}
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<link
				rel='icon'
				href='/favicon.png'
			/>

			{/* Additional SEO meta tags */}
			<meta
				name='robots'
				content='index, follow'
			/>
			<meta
				name='language'
				content='English'
			/>
			<meta
				name='revisit-after'
				content='7 days'
			/>
			<meta
				name='author'
				content='BAOBA Company Limited'
			/>

			{/* Schema.org markup for Google */}
			<script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'BAOBA Company Limited',
					description: description,
					url: 'https://www.baobacompanylimited.com',
					logo: 'https://www.baobacompanylimited.com/_next/image?url=%2Ficon.png&w=256&q=75',
					sameAs: [
						'https://www.linkedin.com/company/baoba-company-limited',
						'https://twitter.com/baobacompany',
					],
				})}
			</script>
		</Head>
	);
};
export default SEO;
