export default function StatementSection() {
	return (
		<section className='relative bg-[#ede7da] pb-20 pt-12 overflow-hidden'>
			{/* top cream arc */}
			<div className='absolute inset-x-0 top-0 -translate-y-full leading-none'>
				<svg
					viewBox='0 0 1440 180'
					preserveAspectRatio='none'
					className='block h-[180px] w-full'
					aria-hidden='true'
				>
					<path
						d='M0,180 C260,70 1180,70 1440,180 L1440,180 L0,180 Z'
						fill='#ede7da'
					/>
				</svg>
			</div>

			<div className='mx-auto max-w-[1800px] px-4'>
				<svg
					viewBox='0 0 2400 650'
					className='h-auto w-full overflow-visible'
					aria-label='Design and build by Caeser Ibrahim'
				>
					<path
						id='statement-arc'
						d='M 120 500 Q 1200 120 2280 500'
						fill='transparent'
					/>

					<text fill='#111111' fontSize='92' fontWeight='300' letterSpacing='1'>
						<textPath
							href='#statement-arc'
							startOffset='50%'
							textAnchor='middle'
						>
							DESIGN &amp; BUILD BY CAESER IBRAHIM
						</textPath>
					</text>
				</svg>
			</div>
		</section>
	)
}
