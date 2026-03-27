import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Caeser Jam',
		short_name: 'Caeser Jam',
		description:
			'Luxury jam portfolio website designed and built by Caeser Ibrahim.',
		start_url: '/',
		display: 'standalone',
		background_color: '#512d6f',
		theme_color: '#512d6f',
		icons: [
			{
				src: '/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	}
}
