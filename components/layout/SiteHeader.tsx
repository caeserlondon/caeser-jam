'use client'

import CircleGlassButton from '@/components/ui/CircleGlassButton'
import FlipButton from '@/components/ui/FlipButton'
import Link from 'next/link'
import { useState } from 'react'
import ProductDropdown from './ProductDropdown'

function UserIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
		>
			<path d='M20 21a8 8 0 0 0-16 0' />
			<circle cx='12' cy='8' r='4' />
		</svg>
	)
}

function CartIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
		>
			<circle cx='9' cy='20' r='1.5' />
			<circle cx='18' cy='20' r='1.5' />
			<path d='M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H7' />
		</svg>
	)
}

function ChevronDownIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
		>
			<path d='M6 9l6 6 6-6' />
		</svg>
	)
}

export default function SiteHeader() {
	const [productsOpen, setProductsOpen] = useState(false)

	return (
		<>
			{/* Dropdown hover zone */}
			<div
				className='fixed inset-x-0 top-0 z-40'
				onMouseEnter={() => setProductsOpen(true)}
				onMouseLeave={() => setProductsOpen(false)}
			>
				{/* Header */}
				<header className='pointer-events-none fixed inset-x-0 top-0 z-50'>
					<div className='mx-auto flex max-w-7xl items-start justify-between px-4 pt-5 sm:px-6 lg:px-8'>
						<div className='pointer-events-auto'>
							<Link href='/'>
								<FlipButton text='Home' width={108} />
							</Link>
						</div>

						<div className='pointer-events-auto flex items-center gap-3'>
							<div>
								<FlipButton
									text='Products'
									rightIcon={<ChevronDownIcon />}
									width={132}
								/>
							</div>

							<Link href='/about'>
								<FlipButton text='About' width={108} />
							</Link>

							<Link href='/contact'>
								<FlipButton text='Contact' width={108} />
							</Link>

							<CircleGlassButton ariaLabel='User account'>
								<UserIcon />
							</CircleGlassButton>

							<CircleGlassButton ariaLabel='Shopping cart'>
								<CartIcon />
							</CircleGlassButton>
						</div>
					</div>
				</header>

				{/* Invisible bridge under header so pointer can travel into dropdown without closing */}
				<div className='h-[84px]' />

				{productsOpen && <ProductDropdown topOffset={84} />}
			</div>
		</>
	)
}
