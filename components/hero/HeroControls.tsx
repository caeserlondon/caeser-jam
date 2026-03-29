import FlipButton from '@/components/ui/FlipButton'

type HeroControlsProps = {
	currentIndex: number
	total: number
	isTransitioning: boolean
	onPrev: () => void
	onNext: () => void
}

export default function HeroControls({
	currentIndex,
	total,
	isTransitioning,
	onPrev,
	onNext,
}: HeroControlsProps) {
	return (
		<div className='flex items-center justify-center gap-3'>
			<FlipButton text='Prev' onClick={onPrev} disabled={isTransitioning} />

			<div className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.22em] text-[#B8914E] backdrop-blur-xl'>
				{String(currentIndex + 1).padStart(2, '0')} /{' '}
				{String(total).padStart(2, '0')}
			</div>

			<FlipButton text='Next' onClick={onNext} disabled={isTransitioning} />
		</div>
	)
}
