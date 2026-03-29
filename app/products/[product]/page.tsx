'use client'

import { useCart } from '@/components/cart/CartProvider'
import ProductGallery from '@/components/products/ProductGallery'
import ProductIngredients from '@/components/products/ProductIngredients'
import ProductNutrition from '@/components/products/ProductNutrition'
import ProductSummaryCard from '@/components/products/ProductSummaryCard'
import {
	getIngredients,
	getProductSlides,
} from '@/components/products/productPageData'
import FlipButton from '@/components/ui/FlipButton'
import { flavours } from '@/data/flavours'
import type { Flavour } from '@/types/flavour'
import { useParams, useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function ProductPage() {
	const params = useParams()
	const router = useRouter()
	const slug = String(params.product ?? '').toLowerCase()
	const { addItem } = useCart()

	const flavour = useMemo(
		() => flavours.find((item: Flavour) => item.id === slug) ?? null,
		[slug],
	)

	const [quantity, setQuantity] = useState(1)
	const [activeIndex, setActiveIndex] = useState(0)
	const [cartMessage, setCartMessage] = useState('')

	if (!flavour) {
		return (
			<main className='min-h-screen bg-[#ede7da] px-4 py-28 text-[#111111] sm:px-6 md:py-32'>
				<div className='mx-auto max-w-6xl'>
					<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
						Product not found
					</p>
					<h1 className='mt-4 text-4xl font-light'>
						This product does not exist.
					</h1>
					<div className='mt-8'>
						<FlipButton
							text='Back to Products'
							width={220}
							onClick={() => router.push('/products')}
						/>
					</div>
				</div>
			</main>
		)
	}

	const slides = getProductSlides(flavour)
	const ingredients = getIngredients(flavour.id)

	const goPrev = () => {
		setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
	}

	const goNext = () => {
		setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
	}

	const handleAddToCart = () => {
		addItem({
			id: flavour.id,
			name: flavour.name,
			image: flavour.jarImage,
			quantity,
		})

		setCartMessage(`${quantity} item${quantity > 1 ? 's' : ''} added to cart.`)
	}

	return (
		<main className='bg-[#ede7da] text-[#111111]'>
			<section className='px-4 pb-14 pt-24 sm:px-6 md:pb-20 md:pt-36'>
				<div className='mx-auto max-w-7xl'>
					<div className='mb-8 flex items-start justify-between gap-4 md:mb-10 md:items-center'>
						<div>
							<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
								Product
							</p>
							<h1 className='mt-3 text-2xl font-extralight uppercase tracking-[-0.04em] sm:text-3xl md:text-6xl'>
								{flavour.name}
							</h1>
						</div>

						<div className='hidden md:block'>
							<FlipButton
								text='Back to Products'
								width={220}
								onClick={() => router.push('/products')}
							/>
						</div>
					</div>

					<div className='grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-start'>
						<ProductGallery
							flavour={flavour}
							slides={slides}
							activeIndex={activeIndex}
							onSelect={setActiveIndex}
							onPrev={goPrev}
							onNext={goNext}
						/>

						<ProductSummaryCard
							flavour={flavour}
							quantity={quantity}
							onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
							onIncrease={() => setQuantity((prev) => prev + 1)}
							onAddToCart={handleAddToCart}
							cartMessage={cartMessage}
						/>
					</div>
				</div>
			</section>

			<ProductIngredients ingredients={ingredients} />
			<ProductNutrition flavour={flavour} />
		</main>
	)
}
