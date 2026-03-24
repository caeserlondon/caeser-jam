'use client'

import CircleGlassButton from '@/components/ui/CircleGlassButton'
import FlipButton from '@/components/ui/FlipButton'
import { flavours } from '@/data/flavours'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

function ArrowLeftIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
		>
			<path d='M15 18l-6-6 6-6' />
		</svg>
	)
}

function ArrowRightIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'
		>
			<path d='M9 18l6-6-6-6' />
		</svg>
	)
}

const backgroundByFlavour: Record<string, string> = {
	blackberry: '/images/slider/blackberry.jpg',
	strawberry: '/images/slider/strawberry.jpg',
	raspberry: '/images/slider/raspberry.jpg',
	orange: '/images/slider/orange.jpg',
	kiwi: '/images/slider/kiwi.jpg',
}

export default function JamCarouselSection() {
	const [index, setIndex] = useState(0)
	const maxIndex = Math.max(flavours.length - 3, 0)

	const visibleFlavours = useMemo(() => flavours, [])

	const goPrev = () => {
		setIndex((prev) => Math.max(prev - 1, 0))
	}

	const goNext = () => {
		setIndex((prev) => Math.min(prev + 1, maxIndex))
	}

	return (
		<section className='bg-[#ede7da] px-6 pb-24 pt-10'>
			<div className='mx-auto max-w-7xl'>
				<div className='mb-10 text-center'>
					<h2 className='text-3xl font-medium text-[#111111] md:text-4xl'>
						Our jams
					</h2>

					<p className='mx-auto mt-4 max-w-3xl text-base leading-7 text-black/70 md:text-lg'>
						Packed with seasonal fruits, our jams are handcrafted using
						traditional methods to deliver rich, full-bodied flavours in every
						jar.
					</p>
				</div>

				<div className='relative'>
					<div className='overflow-hidden'>
						<div
							className='flex transition-transform duration-700 ease-out'
							style={{ transform: `translateX(-${index * 33.333333}%)` }}
						>
							{visibleFlavours.map((flavour) => (
								<div key={flavour.id} className='w-1/3 shrink-0'>
									<Link href='/products' className='group relative block'>
										<div className='relative h-[700px] overflow-hidden'>
											<Image
												src={backgroundByFlavour[flavour.id]}
												alt={`${flavour.name} background`}
												fill
												className='object-cover'
											/>

											<div className='absolute inset-x-0 top-6 px-8 text-center'>
												<h3 className='text-3xl font-light uppercase tracking-tight text-[#111111] md:text-4xl lg:text-5xl'>
													{flavour.name}
												</h3>
											</div>

											<div className='absolute inset-0 flex items-center justify-center pt-10'>
												<Image
													src={flavour.jarImage}
													alt={flavour.name}
													width={420}
													height={620}
													className='h-auto w-[230px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-[1.04]'
												/>
											</div>

											<div className='absolute inset-x-0 bottom-8 flex justify-center opacity-0 translate-y-3 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
												<FlipButton text='Discover' width={148} />
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>

					<div className='pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8'>
						<div className='pointer-events-auto'>
							<CircleGlassButton
								ariaLabel='Previous products'
								onClick={goPrev}
								disabled={index === 0}
							>
								<ArrowLeftIcon />
							</CircleGlassButton>
						</div>

						<div className='pointer-events-auto'>
							<CircleGlassButton
								ariaLabel='Next products'
								onClick={goNext}
								disabled={index === maxIndex}
							>
								<ArrowRightIcon />
							</CircleGlassButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
