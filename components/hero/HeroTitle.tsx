import { HERO_SCENE_IN_MS, heroTitleFont } from './hero.constants'

type HeroTitleProps = {
	title: string
	titleVisible: boolean
}

export default function HeroTitle({ title, titleVisible }: HeroTitleProps) {
	return (
		<div className='pointer-events-none absolute inset-x-0 top-[8%] z-20 flex justify-center md:left-[23%] md:right-auto md:top-[23%] md:block'>
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
					className={`${heroTitleFont.className} text-center text-3xl leading-none text-[#B8914E] sm:text-4xl md:text-left md:text-4xl lg:text-5xl`}
				>
					{title}
				</h1>
			</div>
		</div>
	)
}
