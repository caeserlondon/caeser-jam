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
		<div className='grid grid-cols-[104px_minmax(0,1fr)] gap-5 lg:grid-cols-[116px_minmax(0,1fr)]'>
			<div className='flex flex-col gap-3'>
				{slides.map((slide, index) => (
					<button
						key={slide.id}
						type='button'
						onClick={() => onSelect(index)}
						className={`relative block h-[128px] overflow-hidden rounded-[22px] border transition lg:h-[142px] ${
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
								/>
							)}
						</div>
					</button>
				))}
			</div>

			<div className='relative overflow-hidden rounded-[34px] border border-black/10 bg-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.05)]'>
				<div className='relative aspect-[4/5] min-h-[560px] md:min-h-[760px]'>
					{activeSlide.kind === 'gradient-jar' ? (
						<div
							className='absolute inset-0'
							style={{
								background: `linear-gradient(135deg, ${flavour.bgFrom}, ${flavour.bgTo})`,
							}}
						>
							<div className='absolute inset-0 flex items-center justify-center p-8 md:p-12'>
								<div className='relative h-full w-full max-w-[520px]'>
									<Image
										src={flavour.jarImage}
										alt={flavour.name}
										fill
										className='object-contain scale-[1.18] drop-shadow-[0_40px_60px_rgba(0,0,0,0.28)]'
										priority
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
						/>
					)}

					<div className='pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6'>
						<div className='pointer-events-auto'>
							<CircleGlassButton
								ariaLabel='Previous image'
								onClick={onPrev}
								size={58}
							>
								<ArrowLeftIcon />
							</CircleGlassButton>
						</div>

						<div className='pointer-events-auto'>
							<CircleGlassButton
								ariaLabel='Next image'
								onClick={onNext}
								size={58}
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
