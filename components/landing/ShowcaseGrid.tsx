import Image from 'next/image'

export default function ShowcaseGrid() {
	return (
		<section className='bg-[#ebe5d7] pb-12'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className='relative aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-1.png'
						alt='Caeser Jam showcase one'
						fill
						className='object-cover'
					/>
				</div>

				<div className='relative aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-2.png'
						alt='Caeser Jam showcase two'
						fill
						className='object-cover'
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className='relative aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-1.png'
						alt='Caeser Jam showcase one'
						fill
						className='object-cover'
					/>
				</div>

				<div className='relative aspect-[5/4]'>
					<Image
						src='/images/showcase/showcase-2.png'
						alt='Caeser Jam showcase two'
						fill
						className='object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
