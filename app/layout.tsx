import LayoutChrome from '@/components/layout/LayoutChrome'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Caeser Jam',
	description: 'Luxury animated portfolio concept by Caeser Ibrahim.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<LayoutChrome>{children}</LayoutChrome>
			</body>
		</html>
	)
}
