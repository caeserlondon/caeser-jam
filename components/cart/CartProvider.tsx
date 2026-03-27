'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getProductPrice } from './cartData'

export type CartItem = {
	id: string
	name: string
	image: string
	quantity: number
	price: number
}

type AddCartItemInput = {
	id: string
	name: string
	image: string
	quantity: number
}

type CartContextValue = {
	items: CartItem[]
	isOpen: boolean
	openCart: () => void
	closeCart: () => void
	addItem: (item: AddCartItemInput) => void
	removeItem: (id: string) => void
	updateQuantity: (id: string, quantity: number) => void
	clearCart: () => void
	itemCount: number
	subtotal: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'caeser-jam-cart'

export function useCart() {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('useCart must be used inside CartProvider')
	}

	return context
}

export default function CartProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [items, setItems] = useState<CartItem[]>([])
	const [isOpen, setIsOpen] = useState(false)
	const [isHydrated, setIsHydrated] = useState(false)

	useEffect(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY)

			if (!raw) {
				setIsHydrated(true)
				return
			}

			const parsed = JSON.parse(raw)

			if (Array.isArray(parsed)) {
				setItems(parsed)
			}
		} catch {
			// ignore bad localStorage data
		} finally {
			setIsHydrated(true)
		}
	}, [])

	useEffect(() => {
		if (!isHydrated) return
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	}, [items, isHydrated])

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''

		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	const openCart = () => setIsOpen(true)
	const closeCart = () => setIsOpen(false)

	const addItem = (item: AddCartItemInput) => {
		setItems((prevItems) => {
			const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)

			if (existingItem) {
				return prevItems.map((cartItem) =>
					cartItem.id === item.id
						? {
								...cartItem,
								quantity: cartItem.quantity + item.quantity,
							}
						: cartItem,
				)
			}

			return [
				...prevItems,
				{
					...item,
					price: getProductPrice(item.id),
				},
			]
		})

		openCart()
	}

	const removeItem = (id: string) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id))
	}

	const updateQuantity = (id: string, quantity: number) => {
		if (quantity <= 0) {
			removeItem(id)
			return
		}

		setItems((prevItems) =>
			prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
		)
	}

	const clearCart = () => {
		setItems([])
	}

	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

	const subtotal = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	)

	return (
		<CartContext.Provider
			value={{
				items,
				isOpen,
				openCart,
				closeCart,
				addItem,
				removeItem,
				updateQuantity,
				clearCart,
				itemCount,
				subtotal,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
