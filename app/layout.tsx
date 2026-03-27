import LayoutChrome from '@/components/layout/LayoutChrome'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://www.caeser-jam.vercel.app'),
	title: {
		default: 'Caeser Jam',
		template: '%s | Caeser Jam',
	},
	description:
		'Luxury jam portfolio website designed and built by Caeser Ibrahim, showcasing premium web design, motion, interaction, and frontend craftsmanship.',
	keywords: [
		'Caeser Ibrahim',
		'frontend developer',
		'web designer',
		'Next.js portfolio',
		'React portfolio',
		'TypeScript portfolio',
		'luxury product website',
	],
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Caeser Jam',
		description:
			'Luxury jam portfolio website designed and built by Caeser Ibrahim.',
		url: 'https://www.caeser-jam.vercel.app',
		siteName: 'Caeser Jam',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Caeser Jam website preview',
			},
		],
		locale: 'en_GB',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Caeser Jam',
		description:
			'Luxury jam portfolio website designed and built by Caeser Ibrahim.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Caeser Jam',
							url: 'https://www.caeser-jam.vercel.app',
							description:
								'Luxury jam portfolio website designed and built by Caeser Ibrahim.',
							author: {
								'@type': 'Person',
								name: 'Caeser Ibrahim',
							},
						}),
					}}
				/>
				<LayoutChrome>{children}</LayoutChrome>
			</body>
		</html>
	)
}
