'use client'

import { flavours } from '@/data/flavours'
import Image from 'next/image'
import Link from 'next/link'

const backgroundByFlavour: Record<string, string> = {
	blackberry: '/images/slider/blackberry.jpg',
	strawberry: '/images/slider/strawberry.jpg',
	raspberry: '/images/slider/raspberry.jpg',
	orange: '/images/slider/orange.jpg',
	kiwi: '/images/slider/kiwi.jpg',
}

export default function JamFlavoursShowcaseSection() {
	return (
		<section className='overflow-x-clip bg-[#ede7da] pb-24 pt-10'>
			<div className='mx-auto mb-10 max-w-7xl px-6'>
				<h2 className='text-3xl font-medium text-[#111111] md:text-4xl'>
					Discover our jams
				</h2>
				<div className='mt-4 h-px w-[390px] bg-black/12' />
			</div>

			<div className='w-full overflow-hidden'>
				<div className='grid grid-cols-5 gap-0'>
					{flavours.map((flavour) => (
						<div key={flavour.id} className='min-w-0'>
							<Link
								href={`/products/${flavour.id}`}
								className='group relative block'
							>
								<div className='relative h-[700px] overflow-hidden'>
									<Image
										src={backgroundByFlavour[flavour.id]}
										alt={`${flavour.name} background`}
										fill
										className='object-cover'
									/>

									<div className='absolute inset-0 flex items-center justify-center pt-10'>
										<Image
											src={flavour.jarImage}
											alt={flavour.name}
											width={340}
											height={520}
											className='h-auto w-[580px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-[1.04] xl:w-[600px]'
										/>
									</div>

									<div className='absolute inset-x-0 bottom-8 flex translate-y-3 justify-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'></div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
