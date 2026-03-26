import type { Flavour } from '@/types/flavour'

export type ProductSlide =
	| {
			id: string
			label: string
			kind: 'gradient-jar'
	  }
	| {
			id: string
			label: string
			kind: 'image'
			src: string
	  }

export const nutritionRows = [
	{ label: 'Fat (g)', value: '0.1' },
	{ label: 'Saturates (g)', value: '0' },
	{ label: 'Carbohydrates (g)', value: '39' },
	{ label: 'Sugars (g)', value: '19' },
	{ label: 'Fibre (g)', value: '1.2' },
	{ label: 'Proteins (g)', value: '0.4' },
	{ label: 'Salt (g)', value: '0' },
	{ label: 'Energy (kJ)', value: '1023' },
	{ label: 'Energy (kcal)', value: '241' },
]

const fruitNameById: Record<string, string> = {
	blackberry: 'Blackberries',
	strawberry: 'Strawberries',
	raspberry: 'Raspberries',
	orange: 'Oranges',
	kiwi: 'Kiwi',
}

export function getIngredients(id: string) {
	const fruit = fruitNameById[id] ?? 'Fruit'

	return [
		fruit,
		'Organic',
		'Cane sugar',
		'Concentrated lemon juice',
		'Gelling agent (fruit pectin)',
		'Prepared with 70 g of fruit per 100 g finished product.',
	]
}

export function getProductDescription(flavour: Flavour) {
	return `A small-batch preserve with a ${flavour.subtitle.toLowerCase().replace(/\.$/, '')} character, presented with a clean, premium finish.`
}

export function getProductSlides(flavour: Flavour): ProductSlide[] {
	return [
		{
			id: 'jar-gradient',
			label: `${flavour.name} jar`,
			kind: 'gradient-jar',
		},
		{
			id: 'kitchen',
			label: `${flavour.name} kitchen`,
			kind: 'image',
			src: `/images/scenes/${flavour.id}-kitchen.png`,
		},
		{
			id: 'sandwich',
			label: `${flavour.name} sandwich`,
			kind: 'image',
			src: `/images/scenes/${flavour.id}-sandwich.png`,
		},
		{
			id: 'showcase-3',
			label: 'Showcase 3',
			kind: 'image',
			src: '/images/showcase/showcase-3.png',
		},
		{
			id: 'showcase-4',
			label: 'Showcase 4',
			kind: 'image',
			src: '/images/showcase/showcase-4.png',
		},
	]
}
