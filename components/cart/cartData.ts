export const demoProductPrices: Record<string, number> = {
	blackberry: 5.5,
	strawberry: 4.5,
	raspberry: 5,
	orange: 3.5,
	kiwi: 4,
	apple: 6,
}

export function getProductPrice(productId: string) {
	return demoProductPrices[productId] ?? 14
}

export function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	}).format(amount)
}
