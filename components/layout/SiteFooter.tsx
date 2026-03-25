'use client'

import CircleGlassButton from '@/components/ui/CircleGlassButton'
import FlipButton from '@/components/ui/FlipButton'
import Link from 'next/link'

function GlobeIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.7'
		>
			<circle cx='12' cy='12' r='9' />
			<path d='M3 12h18' />
			<path d='M12 3c3 3.2 4.5 6.2 4.5 9s-1.5 5.8-4.5 9c-3-3.2-4.5-6.2-4.5-9S9 6.2 12 3Z' />
		</svg>
	)
}

function GitHubIcon() {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor'>
			<path d='M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.17c-3.2.69-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.78 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.45-2.69 5.42-5.26 5.71.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.56a11.53 11.53 0 0 0 7.85-10.9C23.5 5.66 18.35.5 12 .5Z' />
		</svg>
	)
}

function LinkedInIcon() {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor'>
			<path d='M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4Z' />
		</svg>
	)
}

export default function SiteFooter() {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-[#ede7da] px-6 pb-10 pt-24 text-[#111111]'>
			<div className='mx-auto max-w-7xl border-t border-black/10 pt-12'>
				<div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
					<div className='max-w-xl'>
						<p className='text-[11px] uppercase tracking-[0.24em] text-black/40'>
							Designed & built by
						</p>

						<h2 className='mt-4 text-3xl font-extralight tracking-[-0.03em] md:text-5xl'>
							Caeser Ibrahim
						</h2>

						<p className='mt-4 text-base text-black/60 md:text-lg'>
							Full Stack Software Engineer, London, UK
						</p>
					</div>

					<div className='flex flex-wrap items-center gap-4'>
						<Link href='/contact' className='ml-1'>
							<FlipButton text='Contact' width={170} />
						</Link>

						<CircleGlassButton
							href='https://caeser-ibrahim.vercel.app'
							ariaLabel='Portfolio'
							size={68}
						>
							<GlobeIcon />
						</CircleGlassButton>

						<CircleGlassButton
							href='https://github.com/caeserlondon'
							ariaLabel='GitHub'
							size={68}
						>
							<GitHubIcon />
						</CircleGlassButton>

						<CircleGlassButton
							href='https://linkedin.com/in/caeser-ibrahim'
							ariaLabel='LinkedIn'
							size={68}
						>
							<LinkedInIcon />
						</CircleGlassButton>
					</div>
				</div>

				<div className='mt-12 border-t border-black/10 pt-5'>
					<p className='text-sm text-black/45 text-center'>
						© {year} Caeser Ibrahim. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
