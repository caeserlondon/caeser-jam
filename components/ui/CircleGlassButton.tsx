'use client'

import React from 'react'
import styles from './CircleGlassButton.module.css'

type CircleGlassButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	className?: string
	disabled?: boolean
	ariaLabel: string
}

export default function CircleGlassButton({
	children,
	onClick,
	type = 'button',
	className = '',
	disabled = false,
	ariaLabel,
}: CircleGlassButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			className={`${styles.circleButton} ${className}`}
		>
			<span className={styles.inner}>
				<span className={`${styles.face} ${styles.front}`}>{children}</span>
				<span className={`${styles.face} ${styles.back}`}>{children}</span>
			</span>
		</button>
	)
}
