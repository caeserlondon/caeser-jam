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

function MenuIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
			className='h-5 w-5'
		>
			<path d='M4 7h16' />
			<path d='M4 12h16' />
			<path d='M4 17h16' />
		</svg>
	)
}

function CloseIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
			className='h-5 w-5'
		>
			<path d='M6 6l12 12' />
			<path d='M18 6l-12 12' />
		</svg>
	)
}

export default function SiteHeader() {
	const [productsMounted, setProductsMounted] = useState(false)
	const [productsVisible, setProductsVisible] = useState(false)
	const [mobileOpen, setMobileOpen] = useState(false)

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

	const goTo = (href: string) => {
		setMobileOpen(false)
		router.push(href)
	}

	return (
		<>
			<header className='pointer-events-none absolute inset-x-0 top-0 z-50'>
				<div className='mx-auto flex max-w-7xl items-start justify-between px-4 pt-5 sm:px-6 lg:px-8'>
					<div className='pointer-events-auto'>
						<FlipButton text='Home' width={108} href='/' />
					</div>

					<div className='pointer-events-auto hidden items-center gap-4 lg:flex'>
						<div
							className='hidden lg:block'
							onMouseEnter={openProducts}
							onMouseLeave={closeProducts}
						>
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

					<div className='pointer-events-auto flex items-center gap-2 lg:hidden'>
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

						<button
							type='button'
							onClick={() => setMobileOpen((prev) => !prev)}
							aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
							className='flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/20 bg-white/8 text-[#ce983c] backdrop-blur-xl'
						>
							{mobileOpen ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>
			</header>

			{mobileOpen && (
				<div className='fixed inset-0 z-40 bg-black/12 lg:hidden'>
					<div
						className='absolute inset-0'
						onClick={() => setMobileOpen(false)}
					/>

					<div className='absolute left-4 right-4 top-[88px] rounded-[24px] border border-white/12 bg-white/10 p-4 backdrop-blur-xl'>
						<div className='flex flex-col gap-3'>
							<button
								type='button'
								onClick={() => goTo('/products')}
								className='rounded-[18px] border border-white/10 bg-white/8 px-4 py-3 text-left text-sm uppercase tracking-[0.12em] text-[#ce983c]'
							>
								Products
							</button>

							<button
								type='button'
								onClick={() => goTo('/about')}
								className='rounded-[18px] border border-white/10 bg-white/8 px-4 py-3 text-left text-sm uppercase tracking-[0.12em] text-[#ce983c]'
							>
								About
							</button>

							<button
								type='button'
								onClick={() => goTo('/contact')}
								className='rounded-[18px] border border-white/10 bg-white/8 px-4 py-3 text-left text-sm uppercase tracking-[0.12em] text-[#ce983c]'
							>
								Contact
							</button>
						</div>
					</div>
				</div>
			)}

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
