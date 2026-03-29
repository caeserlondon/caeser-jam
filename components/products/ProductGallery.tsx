'use client'

import CircleGlassButton from '@/components/ui/CircleGlassButton'
import type { Flavour } from '@/types/flavour'
import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from './ProductIcons'
import type { ProductSlide } from './productPageData'

type ProductGalleryProps = {
	flavour: Flavour
	slides: ProductSlide[]
	activeIndex: number
	onSelect: (index: number) => void
	onPrev: () => void
	onNext: () => void
}

export default function ProductGallery({
	flavour,
	slides,
	activeIndex,
	onSelect,
	onPrev,
	onNext,
}: ProductGalleryProps) {
	const activeSlide = slides[activeIndex]

	return (
		<div className='grid grid-cols-1 gap-4 lg:grid-cols-[116px_minmax(0,1fr)] lg:gap-5'>
			<div className='order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0'>
				{slides.map((slide, index) => (
					<button
						key={slide.id}
						type='button'
						onClick={() => onSelect(index)}
						className={`relative block h-[104px] w-[84px] shrink-0 overflow-hidden rounded-[20px] border transition sm:h-[118px] sm:w-[94px] lg:h-[142px] lg:w-auto ${
							activeIndex === index
								? 'border-black/20 ring-1 ring-black/14'
								: 'border-black/8 hover:border-black/14'
						}`}
					>
						<div className='relative h-full w-full bg-white/20'>
							{slide.kind === 'gradient-jar' ? (
								<div
									className='absolute inset-0'
									style={{
										background: `linear-gradient(135deg, ${flavour.bgFrom}, ${flavour.bgTo})`,
									}}
								>
									<div className='absolute inset-0 flex items-center justify-center p-2'>
										<div className='relative h-full w-full'>
											<Image
												src={flavour.jarImage}
												alt={slide.label}
												fill
												className='object-contain'
												sizes='(max-width: 639px) 84px, (max-width: 1023px) 94px, 116px'
											/>
										</div>
									</div>
								</div>
							) : (
								<Image
									src={slide.src}
									alt={slide.label}
									fill
									className='object-cover'
									sizes='(max-width: 639px) 84px, (max-width: 1023px) 94px, 116px'
								/>
							)}
						</div>
					</button>
				))}
			</div>

			<div className='order-1 relative overflow-hidden rounded-[28px] border border-black/10 bg-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:order-2 lg:rounded-[34px]'>
				<div className='relative aspect-[4/5] min-h-[420px] sm:min-h-[520px] md:min-h-[640px] lg:min-h-[760px]'>
					{activeSlide.kind === 'gradient-jar' ? (
						<div
							className='absolute inset-0'
							style={{
								background: `linear-gradient(135deg, ${flavour.bgFrom}, ${flavour.bgTo})`,
							}}
						>
							<div className='absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12'>
								<div className='relative h-full w-full max-w-[520px]'>
									<Image
										src={flavour.jarImage}
										alt={flavour.name}
										fill
										className='object-contain scale-[1.08] sm:scale-[1.12] lg:scale-[1.18] drop-shadow-[0_40px_60px_rgba(0,0,0,0.28)]'
										priority
										sizes='(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 760px'
									/>
								</div>
							</div>
						</div>
					) : (
						<Image
							src={activeSlide.src}
							alt={activeSlide.label}
							fill
							className='object-cover'
							sizes='(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 760px'
						/>
					)}

					<div className='pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4 lg:px-6'>
						<div className='pointer-events-auto'>
							<CircleGlassButton
								ariaLabel='Previous image'
								onClick={onPrev}
								size={46}
							>
								<ArrowLeftIcon />
							</CircleGlassButton>
						</div>

						<div className='pointer-events-auto'>
							<CircleGlassButton
								ariaLabel='Next image'
								onClick={onNext}
								size={46}
							>
								<ArrowRightIcon />
							</CircleGlassButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
