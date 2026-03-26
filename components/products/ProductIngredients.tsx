import { CheckIcon } from './ProductIcons'

type ProductIngredientsProps = {
	ingredients: string[]
}

export default function ProductIngredients({
	ingredients,
}: ProductIngredientsProps) {
	const left = ingredients.slice(0, 3)
	const right = ingredients.slice(3)

	return (
		<section className='px-6 pb-8'>
			<div className='mx-auto max-w-7xl'>
				<p className='text-[11px] uppercase tracking-[0.24em] text-black/42'>
					Ingredients
				</p>

				<div className='mt-5 grid gap-x-6 md:grid-cols-2'>
					<div>
						{left.map((item) => (
							<div
								key={item}
								className='flex items-center justify-between border-b border-black/20 py-4 text-[15px] uppercase tracking-[-0.01em] text-black/82'
							>
								<span>{item}</span>
								<span className='flex h-8 w-8 items-center justify-center rounded-full border border-black/40'>
									<CheckIcon />
								</span>
							</div>
						))}
					</div>

					<div>
						{right.map((item) => (
							<div
								key={item}
								className='flex items-center justify-between border-b border-black/20 py-4 text-[15px] uppercase tracking-[-0.01em] text-black/82'
							>
								<span>{item}</span>
								<span className='flex h-8 w-8 items-center justify-center rounded-full border border-black/40'>
									<CheckIcon />
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
