import CraftSection from '@/components/landing/CraftSection'
import HeroScrollSection from '@/components/landing/HeroScrollSection'
import JamFlavoursShowcaseSection from '@/components/landing/JamFlavoursShowcaseSection'
import ShowcaseGrid from '@/components/landing/ShowcaseGrid'
import StatementSection from '@/components/landing/StatementSection'

export default function Home() {
	return (
		<main>
			<HeroScrollSection />
			<StatementSection />
			<CraftSection />
			<ShowcaseGrid />
			<JamFlavoursShowcaseSection />
		</main>
	)
}
