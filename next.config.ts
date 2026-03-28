import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		imageSizes: [32, 48, 64, 96, 128, 192, 256, 320, 384, 448, 640],
		qualities: [60, 65, 75],
	},
	reactCompiler: true,
}

export default nextConfig
