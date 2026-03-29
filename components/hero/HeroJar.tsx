import Image from 'next/image'
import { HERO_JAR_IN_MS } from './hero.constants'

type HeroJarProps = {
	jarImage: string
	name: string
	jarVisible: boolean
}

export default function HeroJar({ jarImage, name, jarVisible }: HeroJarProps) {
	return (
		<div className='pointer-events-none absolute inset-0 flex items-start justify-center pt-10 md:items-center md:pt-0'>
			<div
				className='transition-all'
				style={{
					opacity: jarVisible ? 1 : 0,
					transform: jarVisible
						? 'translateY(0px) scale(1)'
						: 'translateY(16px) scale(0.94)',
					filter: jarVisible ? 'blur(0px)' : 'blur(2px)',
					transitionDuration: `${HERO_JAR_IN_MS}ms`,
					transitionTimingFunction: 'linear',
				}}
			>
				<Image
					src={jarImage}
					alt={name}
					width={460}
					height={680}
					fetchPriority='high'
					className='h-auto w-[340px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:w-[360px] md:w-[335px] lg:w-[385px]'
					sizes='(max-width: 639px) 340px, (max-width: 767px) 360px, (max-width: 1023px) 335px, 385px'
				/>
			</div>
		</div>
	)
}
