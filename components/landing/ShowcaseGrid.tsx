import Image from 'next/image'

export default function ShowcaseGrid() {
	return (
		<section className='bg-[#ebe5d7] pb-12'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className='relative aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-1.avif'
						alt='Caeser Jam showcase one'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'
					/>
				</div>

				<div className='relative aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-2.avif'
						alt='Caeser Jam showcase two'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'
					/>
				</div>
			</div>
		</section>
	)
}
