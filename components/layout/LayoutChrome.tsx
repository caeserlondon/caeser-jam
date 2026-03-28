'use client'

import CartDrawer from '@/components/cart/CartDrawer'
import CartProvider from '@/components/cart/CartProvider'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import { usePathname } from 'next/navigation'

type LayoutChromeProps = {
	children: React.ReactNode
}

export default function LayoutChrome({ children }: LayoutChromeProps) {
	const pathname = usePathname()
	const hideFooter = pathname === '/contact'

	return (
		<CartProvider>
			<SiteHeader />
			{children}
			{!hideFooter && <SiteFooter />}
			<CartDrawer />
		</CartProvider>
	)
}
