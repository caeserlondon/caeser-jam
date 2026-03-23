'use client'

import { flavours } from '@/data/flavours'
import HeroBackground from './HeroBackground'
import HeroControls from './HeroControls'
import HeroJar from './HeroJar'
import HeroScene from './HeroScene'
import HeroTitle from './HeroTitle'
import { useHeroTransition } from './useHeroTransition'

export default function Hero() {
	const {
		sceneIndex,
		baseBgIndex,
		overlayBgIndex,
		bgOverlayVisible,
		sceneVisible,
		jarVisible,
		titleVisible,
		isTransitioning,
		changeFlavour,
	} = useHeroTransition(flavours.length)

	const flavour = flavours[sceneIndex]

	return (
		<section className='relative min-h-screen overflow-hidden bg-black'>
			<HeroBackground
				baseBgIndex={baseBgIndex}
				overlayBgIndex={overlayBgIndex}
				bgOverlayVisible={bgOverlayVisible}
			/>

			<div className='relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
				<div className='relative w-full'>
					<div className='relative mx-auto max-w-[78rem]'>
						<HeroScene
							sceneImage={flavour.sceneImage}
							name={flavour.name}
							sceneVisible={sceneVisible}
						/>

						<HeroJar
							jarImage={flavour.jarImage}
							name={flavour.name}
							jarVisible={jarVisible}
						/>

						<HeroTitle title={flavour.name} titleVisible={titleVisible} />

						<HeroControls
							currentIndex={sceneIndex}
							total={flavours.length}
							isTransitioning={isTransitioning}
							onPrev={() => changeFlavour('prev')}
							onNext={() => changeFlavour('next')}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
