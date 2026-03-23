import Image from 'next/image'
import { HERO_JAR_IN_MS } from './hero.constants'

type HeroJarProps = {
	jarImage: string
	name: string
	jarVisible: boolean
}

export default function HeroJar({ jarImage, name, jarVisible }: HeroJarProps) {
	return (
		<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
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
					className='h-auto w-[240px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:w-[285px] md:w-[335px] lg:w-[385px]'
					priority
				/>
			</div>
		</div>
	)
}
