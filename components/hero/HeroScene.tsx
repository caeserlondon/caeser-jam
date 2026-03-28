import Image from 'next/image'
import { HERO_SCENE_IN_MS } from './hero.constants'

type HeroSceneProps = {
	sceneImage: string
	name: string
	sceneVisible: boolean
}

export default function HeroScene({
	sceneImage,
	name,
	sceneVisible,
}: HeroSceneProps) {
	return (
		<div
			className='relative transition-all'
			style={{
				opacity: sceneVisible ? 1 : 0,
				transform: sceneVisible
					? 'translateY(0px) scale(1)'
					: 'translateY(8px) scale(0.985)',
				filter: sceneVisible ? 'blur(0px)' : 'blur(2px)',
				transitionDuration: `${HERO_SCENE_IN_MS}ms`,
				transitionTimingFunction: 'ease-in-out',
			}}
		>
			<Image
				src={sceneImage}
				alt={`${name} scene`}
				width={1800}
				height={1100}
				className='h-auto w-full object-contain'
				sizes='(max-width: 820px) 100vw, 778px'
				preload
				fetchPriority='high'
			/>
		</div>
	)
}
