'use client'

import Link from 'next/link'
import styles from './FlipButton.module.css'

type FlipButtonProps = {
	text: string
	width?: number
	rightIcon?: React.ReactNode
	onClick?: () => void
	href?: string
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
}

export default function FlipButton({
	text,
	width,
	rightIcon,
	onClick,
	href,
	disabled = false,
	type = 'button',
}: FlipButtonProps) {
	const style = width ? { width: `${width}px` } : undefined

	const content = (
		<div className={styles.inner}>
			<div className={`${styles.face} ${styles.front}`}>
				<span className={styles.content}>
					<span>{text}</span>
					{rightIcon ? <span className={styles.icon}>{rightIcon}</span> : null}
				</span>
			</div>

			<div className={`${styles.face} ${styles.back}`}>
				<span className={styles.content}>
					<span>{text}</span>
					{rightIcon ? <span className={styles.icon}>{rightIcon}</span> : null}
				</span>
			</div>
		</div>
	)

	if (href) {
		return (
			<Link href={href} className={styles.flipButton} style={style}>
				{content}
			</Link>
		)
	}

	return (
		<button
			type={type}
			className={styles.flipButton}
			style={style}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	)
}
