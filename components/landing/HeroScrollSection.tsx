'use client'

import HeroBackground from '@/components/hero/HeroBackground'
import HeroControls from '@/components/hero/HeroControls'
import HeroJar from '@/components/hero/HeroJar'
import HeroScene from '@/components/hero/HeroScene'
import HeroTitle from '@/components/hero/HeroTitle'
import { useHeroTransition } from '@/components/hero/useHeroTransition'
import { flavours } from '@/data/flavours'
import { useEffect, useRef, useState } from 'react'

function clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max)
}

export default function HeroScrollSection() {
	const sectionRef = useRef<HTMLElement | null>(null)
	const [progress, setProgress] = useState(0)

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

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return

			const rect = sectionRef.current.getBoundingClientRect()
			const viewportHeight = window.innerHeight
			const totalScrollable = rect.height - viewportHeight
			const passed = clamp(-rect.top, 0, totalScrollable)
			const nextProgress = totalScrollable > 0 ? passed / totalScrollable : 0

			setProgress(nextProgress)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		window.addEventListener('resize', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
		}
	}, [])

	const stageTranslateY = -progress * 260
	const stageOpacity = clamp(1 - progress * 1.25, 0, 1)

	const controlsTranslateY = progress * 220
	const controlsOpacity = clamp(1 - progress * 1.8, 0, 1)

	return (
		<section ref={sectionRef} className='relative h-[180vh]'>
			<div className='sticky top-0 h-screen overflow-hidden bg-black'>
				<HeroBackground
					baseBgIndex={baseBgIndex}
					overlayBgIndex={overlayBgIndex}
					bgOverlayVisible={bgOverlayVisible}
				/>

				<div className='relative z-10 mx-auto flex h-screen max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
					<div className='relative w-full'>
						<div className='relative mx-auto max-w-[82rem]'>
							<div
								className='relative transition-transform'
								style={{
									transform: `translateY(${stageTranslateY}px)`,
									opacity: stageOpacity,
								}}
							>
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
							</div>

							<div
								style={{
									transform: `translateY(${controlsTranslateY}px)`,
									opacity: controlsOpacity,
								}}
							>
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
			</div>
		</section>
	)
}
