import HeroScrollSection from '@/components/landing/HeroScrollSection'
import JamCarouselSection from '@/components/landing/JamCarouselSection'
import ShowcaseGrid from '@/components/landing/ShowcaseGrid'
import StatementSection from '@/components/landing/StatementSection'

export default function Home() {
	return (
		<main>
			<HeroScrollSection />
			<StatementSection />
			<ShowcaseGrid />
			<JamCarouselSection />
		</main>
	)
}
