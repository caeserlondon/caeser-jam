'use client'

import { flavours } from '@/data/flavours'
import Image from 'next/image'
import Link from 'next/link'

const backgroundByFlavour: Record<string, string> = {
	blackberry: '/images/slider/blackberry.avif',
	strawberry: '/images/slider/strawberry.avif',
	raspberry: '/images/slider/raspberry.avif',
	orange: '/images/slider/orange.avif',
	kiwi: '/images/slider/kiwi.avif',
}

export default function JamFlavoursShowcaseSection() {
	return (
		<section className='overflow-hidden bg-[#ede7da] pb-16 pt-8 md:pb-20 md:pt-10'>
			<div className='mx-auto mb-8 max-w-7xl px-4 sm:px-6'>
				<h2 className='text-2xl font-medium text-[#111111] sm:text-3xl md:text-4xl'>
					Discover our jams
				</h2>
				<div className='mt-4 h-px w-full max-w-[390px] bg-black/12' />
			</div>

			<div className='w-full'>
				<div className='grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
					{flavours.map((flavour) => (
						<div key={flavour.id} className='min-w-0'>
							<Link
								href={`/products/${flavour.id}`}
								className='group relative block overflow-hidden rounded-none'
							>
								<div className='relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[560px] xl:h-[700px]'>
									<Image
										src={backgroundByFlavour[flavour.id]}
										alt={`${flavour.name} background`}
										fill
										className='object-cover'
										sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 20vw'
									/>

									<div className='absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/5' />

									<div className='absolute inset-0 flex items-center justify-center px-4 pt-4 sm:px-6 sm:pt-6'>
										<Image
											src={flavour.jarImage}
											alt={flavour.name}
											width={380}
											height={560}
											className='h-auto w-[250px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-[1.04] sm:w-[290px] lg:w-[320px] xl:w-[360px]'
											sizes='(max-width: 639px) 250px, (max-width: 1023px) 290px, (max-width: 1279px) 320px, 360px'
										/>
									</div>

									<div className='absolute inset-x-0 bottom-6 px-5 text-center sm:bottom-8'>
										<p className='text-lg font-light tracking-[-0.02em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] sm:text-xl'>
											{flavour.name}
										</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
