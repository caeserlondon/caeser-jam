'use client'

import CircleGlassButton from '@/components/ui/CircleGlassButton'
import FlipButton from '@/components/ui/FlipButton'
import type { Flavour } from '@/types/flavour'
import { MinusIcon, PlusIcon } from './ProductIcons'

type ProductSummaryCardProps = {
	flavour: Flavour
	quantity: number
	onDecrease: () => void
	onIncrease: () => void
	onAddToCart: () => void
	cartMessage: string
}

export default function ProductSummaryCard({
	flavour,
	quantity,
	onDecrease,
	onIncrease,
	onAddToCart,
	cartMessage,
}: ProductSummaryCardProps) {
	return (
		<div className='rounded-[34px] border border-black/10 bg-white/30 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm md:p-8 lg:sticky lg:top-28'>
			<p className='text-[11px] uppercase tracking-[0.22em] text-[#555555]'>
				Small-batch fruit preserve
			</p>

			<h2 className='mt-4 text-3xl font-extralight tracking-[-0.04em] md:text-5xl'>
				{flavour.name}
			</h2>

			<p className='mt-4 text-lg text-black/66'>{flavour.subtitle}</p>

			<div className='mt-10 border-t border-black/10 pt-8'>
				<p className='text-[11px] uppercase tracking-[0.22em] text-[#555555]'>
					Quantity
				</p>

				<div className='mt-4 flex items-center gap-4'>
					<CircleGlassButton
						ariaLabel='Decrease quantity'
						onClick={onDecrease}
						size={54}
					>
						<MinusIcon />
					</CircleGlassButton>

					<div className='min-w-[52px] text-center text-2xl font-light tracking-[-0.03em]'>
						{quantity}
					</div>

					<CircleGlassButton
						ariaLabel='Increase quantity'
						onClick={onIncrease}
						size={54}
					>
						<PlusIcon />
					</CircleGlassButton>
				</div>

				<div className='mt-6'>
					<FlipButton text='Add to Cart' width={220} onClick={onAddToCart} />
				</div>

				{cartMessage ? (
					<p className='mt-4 text-sm text-black/55'>{cartMessage}</p>
				) : null}
			</div>
		</div>
	)
}
