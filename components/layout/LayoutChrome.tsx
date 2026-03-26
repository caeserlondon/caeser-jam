'use client'

import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import { usePathname } from 'next/navigation'

export default function LayoutChrome({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const hideFooter = pathname === '/contact'

	return (
		<>
			<SiteHeader />
			{children}
			{!hideFooter && <SiteFooter />}
		</>
	)
}
