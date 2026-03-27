'use client'

import { useCart } from '@/components/cart/CartProvider'
import CircleGlassButton from '@/components/ui/CircleGlassButton'
import FlipButton from '@/components/ui/FlipButton'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
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
	const [productsMounted, setProductsMounted] = useState(false)
	const [productsVisible, setProductsVisible] = useState(false)

	const closeTimerRef = useRef<number | null>(null)
	const unmountTimerRef = useRef<number | null>(null)

	const router = useRouter()
	const { openCart, itemCount } = useCart()

	useEffect(() => {
		return () => {
			if (closeTimerRef.current !== null) {
				window.clearTimeout(closeTimerRef.current)
			}
			if (unmountTimerRef.current !== null) {
				window.clearTimeout(unmountTimerRef.current)
			}
		}
	}, [])

	const openProducts = () => {
		if (closeTimerRef.current !== null) {
			window.clearTimeout(closeTimerRef.current)
			closeTimerRef.current = null
		}

		if (unmountTimerRef.current !== null) {
			window.clearTimeout(unmountTimerRef.current)
			unmountTimerRef.current = null
		}

		if (!productsMounted) {
			setProductsMounted(true)
			requestAnimationFrame(() => {
				setProductsVisible(true)
			})
			return
		}

		setProductsVisible(true)
	}

	const closeProducts = () => {
		closeTimerRef.current = window.setTimeout(() => {
			setProductsVisible(false)

			unmountTimerRef.current = window.setTimeout(() => {
				setProductsMounted(false)
			}, 300)
		}, 100)
	}

	return (
		<>
			<header className='pointer-events-none absolute inset-x-0 top-0 z-50'>
				<div className='mx-auto flex max-w-7xl items-start justify-between px-4 pt-5 sm:px-6 lg:px-8'>
					<div className='pointer-events-auto'>
						<FlipButton text='Home' width={108} href='/' />
					</div>

					<div className='pointer-events-auto flex items-center gap-4'>
						<div onMouseEnter={openProducts} onMouseLeave={closeProducts}>
							<FlipButton
								text='Products'
								rightIcon={<ChevronDownIcon />}
								width={132}
								onClick={() => router.push('/products')}
							/>
						</div>

						<FlipButton text='About' width={108} href='/about' />
						<FlipButton text='Contact' width={108} href='/contact' />

						<CircleGlassButton ariaLabel='User account'>
							<UserIcon />
						</CircleGlassButton>

						<div className='relative'>
							<CircleGlassButton ariaLabel='Shopping cart' onClick={openCart}>
								<CartIcon />
							</CircleGlassButton>

							{itemCount > 0 ? (
								<span className='absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#111111] px-1 text-[11px] font-medium text-[#ede7da] shadow-[0_4px_12px_rgba(0,0,0,0.18)]'>
									{itemCount}
								</span>
							) : null}
						</div>
					</div>
				</div>
			</header>

			{productsMounted ? (
				<ProductDropdown
					isVisible={productsVisible}
					onMouseEnter={openProducts}
					onMouseLeave={closeProducts}
				/>
			) : null}
		</>
	)
}
