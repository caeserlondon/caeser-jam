'use client'

import Link from 'next/link'
import React from 'react'
import styles from './CircleGlassButton.module.css'

type BaseProps = {
	children: React.ReactNode
	className?: string
	disabled?: boolean
	ariaLabel: string
	size?: number
}

type ButtonProps = BaseProps & {
	href?: undefined
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	target?: never
	rel?: never
}

type LinkProps = BaseProps & {
	href: string
	onClick?: never
	type?: never
	target?: string
	rel?: string
}

type CircleGlassButtonProps = ButtonProps | LinkProps

export default function CircleGlassButton(props: CircleGlassButtonProps) {
	const {
		children,
		className = '',
		disabled = false,
		ariaLabel,
		size = 38,
	} = props

	const mergedClassName = [styles.circleButton, className]
		.filter(Boolean)
		.join(' ')

	const style = {
		['--circle-size' as string]: `${size}px`,
	} as React.CSSProperties

	const content = (
		<span className={styles.inner}>
			<span className={`${styles.face} ${styles.front}`} aria-hidden='true'>
				{children}
			</span>
			<span className={`${styles.face} ${styles.back}`} aria-hidden='true'>
				{children}
			</span>
		</span>
	)

	if ('href' in props && props.href) {
		const isInternal = props.href.startsWith('/')

		if (isInternal) {
			return (
				<Link
					href={props.href}
					aria-label={ariaLabel}
					className={mergedClassName}
					style={style}
				>
					{content}
				</Link>
			)
		}

		return (
			<a
				href={props.href}
				target={props.target ?? '_blank'}
				rel={props.rel ?? 'noreferrer'}
				aria-label={ariaLabel}
				className={mergedClassName}
				style={style}
			>
				{content}
			</a>
		)
	}

	return (
		<button
			type={props.type ?? 'button'}
			onClick={props.onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			className={mergedClassName}
			style={style}
		>
			{content}
		</button>
	)
}
