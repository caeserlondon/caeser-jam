import Image from 'next/image'

export default function ShowcaseGrid() {
	return (
		<section className='bg-[#ebe5d7] pb-8 md:pb-12'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className='relative aspect-[16/9] sm:aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-1.avif'
						alt='Caeser Jam showcase one'
						fill
						className='object-cover'
						sizes='(max-width: 767px) 100vw, 50vw'
					/>
				</div>

				<div className='relative aspect-[16/10] sm:aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-2.avif'
						alt='Caeser Jam showcase two'
						fill
						className='object-cover'
						sizes='(max-width: 767px) 100vw, 50vw'
					/>
				</div>
			</div>
		</section>
	)
}
