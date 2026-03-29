import { flavours } from '@/data/flavours'
import Image from 'next/image'
import Link from 'next/link'

type ProductDropdownProps = {
	isVisible: boolean
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}

export default function ProductDropdown({
	isVisible,
	onMouseEnter,
	onMouseLeave,
}: ProductDropdownProps) {
	return (
		<div
			className={`fixed left-1/2 top-0 z-40 hidden -translate-x-1/2 transition-all duration-300 ease-out lg:block ${
				isVisible
					? 'translate-y-0 opacity-100 pointer-events-auto'
					: '-translate-y-6 opacity-0 pointer-events-none'
			}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className='max-w-[calc(100vw-2rem)] overflow-x-auto rounded-b-[34px] border border-white/10 bg-white/8 px-5 pb-6 pt-[86px] backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.18)]'>
				<div className='grid w-max grid-cols-[repeat(5,225px)] gap-5'>
					{flavours.map((flavour) => (
						<Link
							key={flavour.id}
							href={`/products/${flavour.id}`}
							className='group block w-[225px] rounded-[28px] border border-white/12 bg-white/8 p-4 backdrop-blur-xl transition duration-300 hover:bg-white/12'
						>
							<div className='relative flex h-[190px] items-center justify-center overflow-hidden rounded-[22px] bg-white/6'>
								<Image
									src={flavour.jarImage}
									alt={flavour.name}
									width={240}
									height={340}
									className='h-auto w-[122px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.28)] transition duration-300 group-hover:scale-[1.04]'
									sizes='122px'
								/>
							</div>

							<div className='pt-3 text-center'>
								<p className='text-sm text-[#e29611]'>{flavour.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
