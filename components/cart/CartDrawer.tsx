'use client'

import CircleGlassButton from '@/components/ui/CircleGlassButton'
import FlipButton from '@/components/ui/FlipButton'
import Image from 'next/image'
import { useState } from 'react'
import { formatCurrency } from './cartData'
import { useCart } from './CartProvider'

function CloseIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
			className='h-5 w-5'
		>
			<path d='M6 6l12 12M18 6l-12 12' />
		</svg>
	)
}

function PlusIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
			className='h-4 w-4'
		>
			<path d='M12 5v14M5 12h14' />
		</svg>
	)
}

function MinusIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
			className='h-4 w-4'
		>
			<path d='M5 12h14' />
		</svg>
	)
}

export default function CartDrawer() {
	const {
		items,
		isOpen,
		closeCart,
		updateQuantity,
		removeItem,
		clearCart,
		itemCount,
		subtotal,
	} = useCart()

	const [checkoutMessage, setCheckoutMessage] = useState('')

	return (
		<div
			className={`fixed inset-0 z-[80] transition ${
				isOpen ? 'pointer-events-auto' : 'pointer-events-none'
			}`}
		>
			<div
				className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
					isOpen ? 'opacity-100' : 'opacity-0'
				}`}
				onClick={closeCart}
			/>

			<aside
				className={`absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col border-l border-black/10 bg-[#ede7da] shadow-[-24px_0_60px_rgba(0,0,0,0.16)] transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between border-b border-black/10 px-6 py-5'>
					<div>
						<p className='text-[11px] uppercase tracking-[0.22em] text-[#555555]'>
							Cart
						</p>
						<h2 className='mt-2 text-2xl font-light tracking-[-0.03em] text-[#111111]'>
							{itemCount} item{itemCount === 1 ? '' : 's'}
						</h2>
					</div>

					<CircleGlassButton
						ariaLabel='Close cart'
						onClick={closeCart}
						size={46}
					>
						<CloseIcon />
					</CircleGlassButton>
				</div>

				<div className='flex-1 overflow-y-auto px-6 py-5'>
					{items.length === 0 ? (
						<div className='rounded-[28px] border border-black/10 bg-white/30 p-6 text-center'>
							<p className='text-lg font-light text-[#111111]'>
								Your cart is empty.
							</p>
							<p className='mt-3 text-sm leading-6 text-[#555555]'>
								Add a flavour from the product page to see it here.
							</p>

							<div className='mt-6'>
								<FlipButton
									text='Continue Shopping'
									width={220}
									onClick={closeCart}
								/>
							</div>
						</div>
					) : (
						<div className='space-y-4'>
							{items.map((item) => (
								<div
									key={item.id}
									className='rounded-[28px] border border-black/10 bg-white/30 p-4'
								>
									<div className='flex gap-4'>
										<div className='relative h-[110px] w-[90px] shrink-0 overflow-hidden rounded-[18px] bg-white/35'>
											<Image
												src={item.image}
												alt={item.name}
												fill
												className='object-contain p-2'
											/>
										</div>

										<div className='min-w-0 flex-1'>
											<div className='flex items-start justify-between gap-3'>
												<div>
													<h3 className='text-lg font-light tracking-[-0.02em] text-[#111111]'>
														{item.name}
													</h3>
													<p className='mt-1 text-sm text-[#555555]'>
														{formatCurrency(item.price)} each
													</p>
												</div>

												<button
													type='button'
													onClick={() => removeItem(item.id)}
													className='text-sm text-[#555555] transition hover:text-black'
												>
													Remove
												</button>
											</div>

											<div className='mt-4 flex items-center justify-between gap-3'>
												<div className='flex items-center gap-3'>
													<CircleGlassButton
														ariaLabel={`Decrease ${item.name} quantity`}
														onClick={() =>
															updateQuantity(item.id, item.quantity - 1)
														}
														size={44}
													>
														<MinusIcon />
													</CircleGlassButton>

													<div className='min-w-[28px] text-center text-lg font-light text-[#111111]'>
														{item.quantity}
													</div>

													<CircleGlassButton
														ariaLabel={`Increase ${item.name} quantity`}
														onClick={() =>
															updateQuantity(item.id, item.quantity + 1)
														}
														size={44}
													>
														<PlusIcon />
													</CircleGlassButton>
												</div>

												<p className='text-base font-medium text-[#111111]'>
													{formatCurrency(item.price * item.quantity)}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				<div className='border-t border-black/10 px-6 py-5'>
					<div className='flex items-center justify-between text-sm text-[#555555]'>
						<span>Subtotal</span>
						<span className='text-lg font-medium text-[#111111]'>
							{formatCurrency(subtotal)}
						</span>
					</div>

					<div className='mt-5 space-y-3'>
						<FlipButton
							text='Checkout'
							width={220}
							onClick={() =>
								setCheckoutMessage(
									'Checkout is not connected yet. This is a portfolio demo.',
								)
							}
							disabled={items.length === 0}
						/>

						<div className='flex gap-3'>
							<button
								type='button'
								onClick={closeCart}
								className='text-sm text-[#555555] transition hover:text-black'
							>
								Continue shopping
							</button>

							{items.length > 0 ? (
								<button
									type='button'
									onClick={clearCart}
									className='text-sm text-[#555555] transition hover:text-black'
								>
									Clear cart
								</button>
							) : null}
						</div>

						{checkoutMessage ? (
							<p className='text-sm leading-6 text-[#555555]'>
								{checkoutMessage}
							</p>
						) : null}
					</div>
				</div>
			</aside>
		</div>
	)
}
