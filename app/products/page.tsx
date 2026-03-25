import CraftSection from '@/components/landing/CraftSection'
import { flavours } from '@/data/flavours'
import Image from 'next/image'
import Link from 'next/link'

type FlavourItem = {
	id: string
	name: string
	jarImage?: string
	gradient?: string
	backgroundGradient?: string
	gradientFrom?: string
	gradientTo?: string
	colors?: string[]
}

type ProductCardItem = {
	id: string
	name: string
	slug: string
	jarImage: string
	gradient: string
	comingSoon?: boolean
}

function getGradient(flavour: FlavourItem) {
	if (typeof flavour.gradient === 'string' && flavour.gradient.trim()) {
		return flavour.gradient
	}

	if (
		typeof flavour.backgroundGradient === 'string' &&
		flavour.backgroundGradient.trim()
	) {
		return flavour.backgroundGradient
	}

	if (
		typeof flavour.gradientFrom === 'string' &&
		typeof flavour.gradientTo === 'string'
	) {
		return `linear-gradient(135deg, ${flavour.gradientFrom}, ${flavour.gradientTo})`
	}

	if (Array.isArray(flavour.colors) && flavour.colors.length >= 2) {
		return `linear-gradient(135deg, ${flavour.colors[0]}, ${flavour.colors[1]})`
	}

	const fallbackById: Record<string, string> = {
		blackberry:
			'linear-gradient(135deg, #1b1322 0%, #3d2952 55%, #6a4a86 100%)',
		strawberry:
			'linear-gradient(135deg, #57131f 0%, #9c2638 52%, #d84d63 100%)',
		raspberry: 'linear-gradient(135deg, #3f1022 0%, #7a1e3d 54%, #b93a68 100%)',
		orange: 'linear-gradient(135deg, #733200 0%, #b85600 54%, #f0a13c 100%)',
		kiwi: 'linear-gradient(135deg, #35540e 0%, #6d9823 52%, #b5d86a 100%)',
	}

	return (
		fallbackById[flavour.id] ??
		'linear-gradient(135deg, #2a2a2f 0%, #555565 100%)'
	)
}

const productCards: ProductCardItem[] = [
	...(flavours as FlavourItem[]).map((flavour) => ({
		id: flavour.id,
		name: flavour.name,
		slug: flavour.id,
		jarImage: flavour.jarImage!,
		gradient: getGradient(flavour),
	})),
	{
		id: 'apple',
		name: 'Apple',
		slug: 'apple',
		jarImage: '/images/jars/apple-jar.png',
		gradient: 'linear-gradient(135deg, #556f17 0%, #87b82f 52%, #d9ec9e 100%)',
		comingSoon: true,
	},
]

function ProductCard({ item }: { item: ProductCardItem }) {
	const content = (
		<div
			className='group relative min-h-[760px] overflow-hidden border border-black/8'
			style={{ backgroundImage: item.gradient }}
		>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0.10))]' />

			<div className='relative z-10 flex h-full flex-col'>
				<div className='flex items-start justify-between px-7 pb-2 pt-7 md:px-8 md:pt-8'>
					<div>
						<p className='text-[11px] uppercase tracking-[0.22em] text-white/72'>
							{item.comingSoon ? 'New flavour' : 'Product'}
						</p>

						<h2 className='mt-3 text-3xl font-light uppercase tracking-[-0.03em] text-white md:text-4xl'>
							{item.name}
						</h2>
					</div>

					{item.comingSoon ? (
						<span className='rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm'>
							Coming soon
						</span>
					) : (
						<span className='rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm transition group-hover:bg-white/14'>
							View
						</span>
					)}
				</div>

				<div className='relative flex flex-1 items-center justify-center px-6 pb-10 pt-4 md:px-8'>
					<div className='relative h-[720px] w-full max-w-[520px] transition duration-500 group-hover:scale-[1.03]'>
						<Image
							src={item.jarImage}
							alt={item.name}
							fill
							className='object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.28)]'
							priority={item.id === 'blackberry'}
						/>
					</div>
				</div>

				<div className='relative z-10 px-7 pb-7 md:px-8 md:pb-8'>
					<p className='max-w-sm text-sm leading-6 text-white/82'>
						{item.comingSoon
							? 'Apple flavour coming soon.'
							: `Explore the ${item.name.toLowerCase()} product page.`}
					</p>
				</div>
			</div>
		</div>
	)

	if (item.comingSoon) {
		return <div className='block'>{content}</div>
	}

	return (
		<Link href={`/products/${item.slug}`} className='block'>
			{content}
		</Link>
	)
}

export default function ProductsPage() {
	return (
		<main className='bg-[#ede7da] pt-55 text-[#111111]'>
			<CraftSection />

			<section className='w-full overflow-hidden'>
				<div className='grid grid-cols-1 gap-0 lg:grid-cols-3'>
					{productCards.map((item) => (
						<ProductCard key={item.id} item={item} />
					))}
				</div>
			</section>
		</main>
	)
}
