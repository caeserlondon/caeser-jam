import { flavours } from '@/data/flavours'
import Image from 'next/image'
import Link from 'next/link'

type ProductDropdownProps = {
	topOffset?: number
}

export default function ProductDropdown({
	topOffset = 84,
}: ProductDropdownProps) {
	return (
		<div className='fixed inset-x-0 top-0 z-40 h-[30vh] min-h-[280px] border-b border-white/10 bg-white/8 backdrop-blur-2xl'>
			<div
				className='mx-auto flex h-full max-w-7xl items-start px-5 pb-6'
				style={{ paddingTop: `${topOffset}px` }}
			>
				<div className='grid w-full grid-cols-5 gap-5'>
					{flavours.map((flavour) => (
						<Link
							key={flavour.id}
							href='/products'
							className='group rounded-[28px] border border-white/12 bg-white/8 p-4 backdrop-blur-xl transition duration-300 hover:bg-white/12'
						>
							<div className='relative flex h-[180px] items-center justify-center overflow-hidden rounded-[22px] bg-white/6'>
								<Image
									src={flavour.jarImage}
									alt={flavour.name}
									width={240}
									height={340}
									className='h-auto w-[120px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.28)] transition duration-300 group-hover:scale-[1.04]'
								/>
							</div>

							<div className='pt-3 text-center'>
								<p className='text-sm text-white/90'>{flavour.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
