import type { Flavour } from '@/types/flavour'
import Image from 'next/image'
import { nutritionRows } from './productPageData'

type ProductNutritionProps = {
	flavour: Flavour
}

export default function ProductNutrition({ flavour }: ProductNutritionProps) {
	return (
		<section className='px-6 pb-24 pt-10'>
			<div className='mx-auto max-w-7xl'>
				<div className='grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start'>
					<div className='flex justify-center lg:justify-start'>
						<div className='relative h-[420px] w-full max-w-[420px] md:h-[520px] md:max-w-[580px]'>
							<Image
								src={flavour.jarImage}
								alt={`${flavour.name} jar`}
								fill
								className='object-contain scale-[1.08] drop-shadow-[0_30px_42px_rgba(0,0,0,0.14)]'
							/>
						</div>
					</div>

					<div>
						<p className='text-[11px] uppercase tracking-[0.24em] text-[#555555]'>
							Nutrition
						</p>

						<div className='mt-5 overflow-hidden rounded-[28px] border border-black/14 bg-transparent'>
							<div className='grid grid-cols-[minmax(0,1fr)_120px] border-b border-black/16 px-5 py-4 text-sm font-medium text-black/82'>
								<div>Typical value</div>
								<div className='text-right'>Per 100g</div>
							</div>

							{nutritionRows.map((row) => (
								<div
									key={row.label}
									className='grid grid-cols-[minmax(0,1fr)_120px] border-b border-black/16 px-5 py-4 text-[15px] text-black/78 last:border-b-0'
								>
									<div>{row.label}</div>
									<div className='text-right'>{row.value}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
