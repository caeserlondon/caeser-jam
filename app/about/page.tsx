import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About | Caeser Ibrahim',
	description:
		'Graphic designer and full stack software engineer building modern, high-performance digital experiences.',
}

const capabilities = [
	{
		title: 'Design-led product websites',
		text: 'I design and build polished, brand-led websites that feel considered visually while still being fast, maintainable, and production-ready.',
	},
	{
		title: 'Full stack engineering',
		text: 'I work across frontend and backend, building robust user experiences, APIs, authentication flows, data models, and scalable application architecture.',
	},
	{
		title: 'Performance, SEO & accessibility',
		text: 'I optimise for speed, clean markup, responsive layouts, technical SEO, and accessible user experiences that support better reach and usability.',
	},
	{
		title: 'Testing, debugging & maintenance',
		text: 'I help teams improve code quality with test suites, bug fixing, refactoring, CI/CD workflows, and long-term maintainability for existing products.',
	},
]
const serviceAreas = [
	'Build responsive websites and web applications',
	'Collaborate with product, design, and engineering teams',
	'Run QA, code testing, and improve frontend quality',
	'Carry out website audits and fix performance, SEO, accessibility, and GDPR issues',
	'Implement authentication and secure user flows',
	'Build payment flows, paywalls, and subscriptions with Stripe and PayPal',
	'Build and maintain REST APIs and backend services',
	'Build, maintain, and optimise databases',
	'Improve SQL queries, data validation, indexing, and normalisation',
	'Work with maps, geolocation features, and location-based experiences',
	'Build dashboards and data visualisation interfaces',
	'Debug, test, optimise, and maintain existing codebases',
	'Support deployment workflows and CI/CD pipelines',
]

const stack = {
	Frontend: [
		'React',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'HTML5',
		'CSS3',
		'Tailwind',
		'Styled Components',
		'SCSS',
		'TanStack Query',
		'Redux',
	],
	Backend: [
		'Node.js',
		'Express',
		'Python',
		'Django',
		'Flask',
		'REST APIs',
		'GraphQL',
	],
	Databases: [
		'PostgreSQL',
		'MySQL',
		'Supabase',
		'MongoDB',
		'DynamoDB',
		'Firebase',
	],
	'DevOps & Tools': [
		'GitHub Actions',
		'CI/CD',
		'Docker',
		'AWS',
		'GCP',
		'Lambda',
		'Serverless',
		'Webpack',
		'Jira',
		'Trello',
	],
	Testing: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Vitest'],
	Practices: [
		'Agile / Scrum',
		'TDD',
		'WCAG 2.1 AA',
		'Responsive Design',
		'SEO',
		'GDPR',
		'Figma',
	],
}

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span className='inline-flex rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-sm text-black/70 backdrop-blur-sm'>
			{children}
		</span>
	)
}

export default function AboutPage() {
	const year = new Date().getFullYear()

	return (
		<main className='bg-[#ede7da] text-[#111111]'>
			<section className='px-6 pb-16 pt-28 md:pb-20 md:pt-36'>
				<div className='mx-auto max-w-7xl'>
					<div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_360px]'>
						<div className='max-w-3xl'>
							<p className='text-[11px] uppercase tracking-[0.28em] text-[#555555]'>
								About
							</p>

							<h1 className='mt-5 text-4xl font-extralight leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-[82px]'>
								Designer and full stack engineer.
							</h1>

							<p className='mt-6 max-w-2xl text-base leading-7 text-black/68 md:text-lg'>
								I design and build polished websites and digital products with a
								focus on visual quality, performance, maintainability, and
								search visibility. This site was created as a premium jam brand
								demo.
							</p>

							<div className='mt-7 flex flex-wrap gap-3'>
								<Pill>Graphic Design</Pill>
								<Pill>Full Stack Engineering</Pill>
								<Pill>Performance & SEO</Pill>
								<Pill>QA & Testing</Pill>
								<Pill>Accessibility</Pill>
							</div>
						</div>

						<div className='rounded-[28px] border border-black/10 bg-white/35 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm md:p-6'>
							<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
								At a glance
							</p>

							<div className='mt-5 space-y-3'>
								<div className='rounded-2xl border border-black/8 bg-black/[0.03] px-4 py-4'>
									<p className='text-xs uppercase tracking-[0.18em] text-[#555555]'>
										Role
									</p>
									<p className='mt-2 text-sm font-medium text-black/80'>
										Graphic designer + full stack engineer
									</p>
								</div>

								<div className='rounded-2xl border border-black/8 bg-black/[0.03] px-4 py-4'>
									<p className='text-xs uppercase tracking-[0.18em] text-[#555555]'>
										Focus
									</p>
									<p className='mt-2 text-sm font-medium text-black/80'>
										Design-led builds with strong technical quality
									</p>
								</div>

								<div className='rounded-2xl border border-black/8 bg-black/[0.03] px-4 py-4'>
									<p className='text-xs uppercase tracking-[0.18em] text-[#555555]'>
										This website
									</p>
									<p className='mt-2 text-sm font-medium text-black/80'>
										A demonstration project for a premium jam brand
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='px-6 pb-8 md:pb-12'>
				<div className='mx-auto max-w-7xl'>
					<div className='grid gap-px overflow-hidden rounded-[32px] border border-black/10 bg-black/10 lg:grid-cols-4'>
						{capabilities.map((item) => (
							<div key={item.title} className='bg-[#f3eee3] p-7 md:p-8'>
								<h2 className='text-xl font-medium tracking-tight'>
									{item.title}
								</h2>
								<p className='mt-4 text-sm leading-7 text-black/68 md:text-[15px]'>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='px-6 py-12 md:py-16'>
				<div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'>
					<div className='rounded-[32px] border border-black/10 bg-white/30 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]'>
						<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
							How I can support your team
						</p>

						<div className='mt-6 grid gap-3'>
							{serviceAreas.map((item) => (
								<div
									key={item}
									className='rounded-2xl border border-black/8 bg-black/[0.03] px-4 py-3 text-sm text-black/72'
								>
									{item}
								</div>
							))}
						</div>
					</div>

					<div className='rounded-[32px] border border-black/10 bg-white/30 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]'>
						<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
							Featured build
						</p>

						<h2 className='mt-5 text-3xl font-extralight tracking-[-0.03em] md:text-4xl'>
							A premium jam brand demo website
						</h2>

						<p className='mt-4 max-w-2xl text-sm leading-7 text-black/68 md:text-[15px]'>
							This site was built as a demonstration project for a jam brand,
							combining premium visual design with modern frontend engineering..
							The goal was to combine elegant visual presentation with clean
							engineering, smooth interaction, and a structure that could
							support real product content, SEO, performance, and future
							maintenance.
						</p>

						<div className='mt-8 overflow-hidden rounded-[28px] border border-black/10 bg-[#2b1840]'>
							<div className='flex items-center gap-2 border-b border-white/10 px-5 py-4'>
								<span className='h-2.5 w-2.5 rounded-full bg-white/35' />
								<span className='h-2.5 w-2.5 rounded-full bg-white/25' />
								<span className='h-2.5 w-2.5 rounded-full bg-white/15' />
							</div>

							<div className='p-5 md:p-7'>
								<div className='overflow-hidden rounded-[22px] bg-[#ede7da]'>
									<div className='h-16 bg-[#3f235b]' />
									<div className='grid grid-cols-5 gap-0'>
										<div className='h-40 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%),linear-gradient(135deg,#121218,#2b2b36)]' />
										<div className='h-40 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_55%),linear-gradient(135deg,#8c1010,#ff4040)]' />
										<div className='h-40 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_55%),linear-gradient(135deg,#3e0d19,#8b1538)]' />
										<div className='h-40 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_55%),linear-gradient(135deg,#b85c00,#ffae42)]' />
										<div className='h-40 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_55%),linear-gradient(135deg,#456c10,#9bd651)]' />
									</div>
								</div>

								<div className='mt-5 grid gap-3 sm:grid-cols-3'>
									<div className='rounded-2xl bg-white/8 px-4 py-4 text-white/88'>
										<p className='text-xs uppercase tracking-[0.18em] text-white/45'>
											Visual
										</p>
										<p className='mt-2 text-sm'>Luxury brand presentation</p>
									</div>
									<div className='rounded-2xl bg-white/8 px-4 py-4 text-white/88'>
										<p className='text-xs uppercase tracking-[0.18em] text-white/45'>
											Engineering
										</p>
										<p className='mt-2 text-sm'>
											Modern component-driven build
										</p>
									</div>
									<div className='rounded-2xl bg-white/8 px-4 py-4 text-white/88'>
										<p className='text-xs uppercase tracking-[0.18em] text-white/45'>
											Delivery
										</p>
										<p className='mt-2 text-sm'>
											Ready for optimisation and scale
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='px-6 py-12 md:py-16'>
				<div className='mx-auto max-w-7xl rounded-[32px] border border-black/10 bg-white/30 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-10'>
					<div className='max-w-3xl'>
						<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
							Technical stack
						</p>
						<h2 className='mt-5 text-3xl font-extralight tracking-[-0.03em] md:text-4xl'>
							Tools, platforms, and practices I work with
						</h2>
						<p className='mt-4 text-sm leading-7 text-black/68 md:text-[15px]'>
							I work across modern frontend development, backend services,
							databases, testing, deployment workflows, and product delivery. My
							approach is practical: build well, validate carefully, optimise
							where it matters, and maintain code that teams can work with over
							time.
						</p>
					</div>

					<div className='mt-10 grid gap-8 lg:grid-cols-2'>
						{Object.entries(stack).map(([group, items]) => (
							<div key={group}>
								<h3 className='text-lg font-medium tracking-tight'>{group}</h3>
								<div className='mt-4 flex flex-wrap gap-2.5'>
									{items.map((item) => (
										<Pill key={item}>{item}</Pill>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='px-6 pb-24 pt-8 md:pb-28'>
				<div className='mx-auto max-w-7xl rounded-[32px] border border-black/10 bg-[#111111] px-8 py-10 text-[#ede7da] md:px-10 md:py-12'>
					<div className='grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-end'>
						<div>
							<p className='text-[11px] uppercase tracking-[0.24em] text-white/38'>
								Let’s work together
							</p>

							<h2 className='mt-4 max-w-3xl text-3xl font-extralight leading-[0.98] tracking-[-0.04em] md:text-5xl'>
								I build polished, high-performing websites and digital products.
							</h2>

							<p className='mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]'>
								Available for design-led websites, full stack builds, audits,
								testing, optimisation, and long-term product support.
							</p>
						</div>

						<div className='grid gap-3'>
							<div className='rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4'>
								<p className='text-xs uppercase tracking-[0.18em] text-white/38'>
									Services
								</p>
								<p className='mt-2 text-sm text-white/78'>
									Websites, full stack builds, audits, testing
								</p>
							</div>

							<div className='rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4'>
								<p className='text-xs uppercase tracking-[0.18em] text-white/38'>
									Focus
								</p>
								<p className='mt-2 text-sm text-white/78'>
									Performance, SEO, accessibility, maintainability
								</p>
							</div>

							<div className='rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4'>
								<p className='text-xs uppercase tracking-[0.18em] text-white/38'>
									Working style
								</p>
								<p className='mt-2 text-sm text-white/78'>
									Clear communication, careful execution, long-term thinking
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 border-t border-white/10 pt-5 text-sm text-white/34'>
						{year} · Design, engineering, optimisation
					</div>
				</div>
			</section>
		</main>
	)
}
