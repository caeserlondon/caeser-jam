'use client'

import React from 'react'
import styles from './FlipButton.module.css'

type FlipButtonProps = {
	text: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	className?: string
	disabled?: boolean
	ariaLabel?: string
	rightIcon?: React.ReactNode
	width?: number
}

export default function FlipButton({
	text,
	onClick,
	type = 'button',
	className = '',
	disabled = false,
	ariaLabel,
	rightIcon,
	width,
}: FlipButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel ?? text}
			className={`${styles.flipButton} ${className}`}
			style={width ? { width: `${width}px` } : undefined}
		>
			<span className={styles.inner}>
				<span className={`${styles.face} ${styles.front}`}>
					<span className={styles.content}>
						<span>{text}</span>
						{rightIcon ? (
							<span className={styles.icon}>{rightIcon}</span>
						) : null}
					</span>
				</span>

				<span className={`${styles.face} ${styles.back}`}>
					<span className={styles.content}>
						<span>{text}</span>
						{rightIcon ? (
							<span className={styles.icon}>{rightIcon}</span>
						) : null}
					</span>
				</span>
			</span>
		</button>
	)
}
