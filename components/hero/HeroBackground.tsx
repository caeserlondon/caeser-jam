import { flavours } from '@/data/flavours'
import { HERO_BG_MS } from './hero.constants'

type HeroBackgroundProps = {
	baseBgIndex: number
	overlayBgIndex: number | null
	bgOverlayVisible: boolean
}

export default function HeroBackground({
	baseBgIndex,
	overlayBgIndex,
	bgOverlayVisible,
}: HeroBackgroundProps) {
	const baseBg = flavours[baseBgIndex]
	const overlayBg = overlayBgIndex !== null ? flavours[overlayBgIndex] : null

	return (
		<>
			<div
				className='absolute inset-0'
				style={{
					background: `linear-gradient(to bottom, ${baseBg.bgFrom}, ${baseBg.bgTo})`,
				}}
			/>

			{overlayBg && (
				<div
					className='absolute inset-0 transition-opacity'
					style={{
						background: `linear-gradient(to bottom, ${overlayBg.bgFrom}, ${overlayBg.bgTo})`,
						opacity: bgOverlayVisible ? 1 : 0,
						transitionDuration: `${HERO_BG_MS}ms`,
						transitionTimingFunction: 'ease-in-out',
					}}
				/>
			)}
		</>
	)
}
