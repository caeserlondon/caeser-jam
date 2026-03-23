'use client'

import { useState } from 'react'
import { HERO_BG_MS, HERO_JAR_DELAY, HERO_OUT_MS } from './hero.constants'

type Direction = 'next' | 'prev'

export function useHeroTransition(totalFlavours: number) {
	const [sceneIndex, setSceneIndex] = useState(0)
	const [baseBgIndex, setBaseBgIndex] = useState(0)
	const [overlayBgIndex, setOverlayBgIndex] = useState<number | null>(null)
	const [bgOverlayVisible, setBgOverlayVisible] = useState(false)

	const [sceneVisible, setSceneVisible] = useState(true)
	const [jarVisible, setJarVisible] = useState(true)
	const [titleVisible, setTitleVisible] = useState(true)
	const [isTransitioning, setIsTransitioning] = useState(false)

	const changeFlavour = (direction: Direction) => {
		if (isTransitioning) return

		const targetIndex =
			direction === 'next'
				? (sceneIndex + 1) % totalFlavours
				: (sceneIndex - 1 + totalFlavours) % totalFlavours

		setIsTransitioning(true)
		setOverlayBgIndex(targetIndex)

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setBgOverlayVisible(true)
			})
		})

		setJarVisible(false)
		setTitleVisible(false)
		setSceneVisible(false)

		window.setTimeout(() => {
			setSceneIndex(targetIndex)
			setSceneVisible(true)
			setTitleVisible(true)
		}, HERO_OUT_MS)

		window.setTimeout(() => {
			setJarVisible(true)
		}, HERO_OUT_MS + HERO_JAR_DELAY)

		window.setTimeout(() => {
			setBaseBgIndex(targetIndex)
			setBgOverlayVisible(false)
			setOverlayBgIndex(null)
			setIsTransitioning(false)
		}, HERO_BG_MS)
	}

	return {
		sceneIndex,
		baseBgIndex,
		overlayBgIndex,
		bgOverlayVisible,
		sceneVisible,
		jarVisible,
		titleVisible,
		isTransitioning,
		changeFlavour,
	}
}
