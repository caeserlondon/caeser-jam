export default function StatementSection() {
	return (
		<section className='relative overflow-hidden bg-[#a9c986] pt-10'>
			<div className='relative mt-10 rounded-t-[50%_14%] bg-[#ede7da] pt-24 pb-20'>
				<div className='mx-auto max-w-[1800px] px-4'>
					<svg
						viewBox='0 0 1800 520'
						className='h-auto w-full'
						aria-label='Design and build by Caeser Ibrahim'
					>
						<path
							id='statement-arc'
							d='M 80 380 Q 900 80 1720 380'
							fill='transparent'
						/>
						<text
							fill='#111111'
							fontSize='118'
							fontWeight='300'
							letterSpacing='2'
						>
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
			</div>
		</section>
	)
}
