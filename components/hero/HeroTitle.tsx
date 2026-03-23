import { HERO_SCENE_IN_MS, heroTitleFont } from './hero.constants'

type HeroTitleProps = {
	title: string
	titleVisible: boolean
}

export default function HeroTitle({ title, titleVisible }: HeroTitleProps) {
	return (
		<div className='pointer-events-none absolute left-[23%] top-[23%] z-20'>
			<div
				className='transition-all'
				style={{
					opacity: titleVisible ? 1 : 0,
					transform: titleVisible ? 'translateY(0px)' : 'translateY(10px)',
					transitionDuration: `${HERO_SCENE_IN_MS}ms`,
					transitionTimingFunction: 'ease-in-out',
				}}
			>
				<h1
					className={`${heroTitleFont.className} text-2xl leading-none text-white sm:text-3xl md:text-4xl lg:text-5xl`}
				>
					{title}
				</h1>
			</div>
		</div>
	)
}
