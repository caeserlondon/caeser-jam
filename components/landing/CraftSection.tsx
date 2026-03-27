import Image from 'next/image'

export default function CraftSection() {
	return (
		<section className='bg-[#ebe5d7] pb-54'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.05fr_0.95fr]'>
				<div className='relative'>
					<div className='absolute left-0 top-0 h-[88%] w-[78%] border border-black/35' />

					<div className='relative ml-8 mt-6 aspect-[5/4] overflow-hidden'>
						<Image
							src='/images/content/craft.avif'
							alt='Fresh fruit for Caeser Jam'
							fill
							className='object-cover'
							sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px'
						/>
					</div>
				</div>

				<div className='max-w-xl'>
					<p className='text-xs uppercase tracking-[0.32em] text-[#4f4f4f]'>
						The Caeser Jam promise
					</p>

					<h2 className='mt-4 text-4xl font-light leading-tight text-[#111111] md:text-5xl'>
						From Orchard Pick To Your Breakfast Table
					</h2>

					<p className='mt-6 text-lg leading-8 text-black/70'>
						At Caeser Jam, we focus on small-batch preserves made with ripe
						seasonal fruit, slow cooking, and careful craft. Every jar is
						designed to feel premium, generous, and full of character, balancing
						fruit, texture, and depth in every spoonful.
					</p>
				</div>
			</div>
		</section>
	)
}
