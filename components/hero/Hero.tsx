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
		<section className='relative overflow-hidden bg-black'>
			<HeroBackground
				baseBgIndex={baseBgIndex}
				overlayBgIndex={overlayBgIndex}
				bgOverlayVisible={bgOverlayVisible}
			/>

			{/* MOBILE */}
			<div className='relative z-10 px-4 pb-10 pt-24 md:hidden'>
				<div className='mx-auto max-w-md'>
					<div className='relative h-[410px]'>
						<HeroJar
							jarImage={flavour.jarImage}
							name={flavour.name}
							jarVisible={jarVisible}
						/>
					</div>

					<div className='m-4 flex justify-center'>
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

			{/* DESKTOP / TABLET */}
			<div className='relative z-10 mx-auto hidden min-h-screen max-w-7xl items-center justify-center px-4 py-8 sm:px-6 md:flex lg:px-8'>
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

						<div className='mt-[420px] flex justify-center'>
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
			</div>
		</section>
	)
}
