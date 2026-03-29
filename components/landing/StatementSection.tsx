'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const STATEMENT = 'DESIGN & BUILD BY CAESER IBRAHIM'
const GAP = 250
const SPEED = 110
const ARC_HEIGHT = 260
const TEXT_LAYER_HEIGHT = 380
const OVERSIZE = 1.28

const FONT_SIZE = 72
const TEXT_DY = -55

export default function StatementSection() {
	const sectionRef = useRef<HTMLElement>(null)
	const pathRef = useRef<SVGPathElement>(null)
	const measureTextRef = useRef<SVGTextElement>(null)

	const [containerWidth, setContainerWidth] = useState(1400)
	const [pathLength, setPathLength] = useState(0)
	const [textLength, setTextLength] = useState(0)
	const [progress, setProgress] = useState(0)

	const arcWidth = Math.max(containerWidth * OVERSIZE, 1200)

	const arcPath = useMemo(() => {
		return `M0,${ARC_HEIGHT} Q${arcWidth / 2},0 ${arcWidth},${ARC_HEIGHT}`
	}, [arcWidth])

	useEffect(() => {
		if (!sectionRef.current) return

		const el = sectionRef.current

		const updateWidth = () => {
			setContainerWidth(el.clientWidth)
		}

		updateWidth()

		const ro = new ResizeObserver(updateWidth)
		ro.observe(el)

		return () => ro.disconnect()
	}, [])

	useEffect(() => {
		const measure = () => {
			if (!pathRef.current || !measureTextRef.current) return

			setPathLength(pathRef.current.getTotalLength())
			setTextLength(measureTextRef.current.getComputedTextLength())
		}

		measure()
		document.fonts?.ready.then(measure)
		window.addEventListener('resize', measure)

		return () => {
			window.removeEventListener('resize', measure)
		}
	}, [arcWidth])

	useEffect(() => {
		if (!textLength) return

		const distance = textLength + GAP
		let frameId = 0
		let lastTime = performance.now()

		const tick = (now: number) => {
			const delta = (now - lastTime) / 1000
			lastTime = now

			setProgress((prev) => (prev + SPEED * delta) % distance)
			frameId = requestAnimationFrame(tick)
		}

		frameId = requestAnimationFrame(tick)

		return () => cancelAnimationFrame(frameId)
	}, [textLength])

	const offsets = useMemo(() => {
		if (!pathLength || !textLength) return []

		const distance = textLength + GAP
		const copyCount =
			Math.ceil((pathLength + textLength + distance * 2) / distance) + 1

		return Array.from({ length: copyCount }, (_, i) => {
			return -distance - progress + i * distance
		})
	}, [pathLength, textLength, progress])

	return (
		<section
			ref={sectionRef}
			className='relative -mt-[120px] overflow-hidden pt-[120px] md:-mt-[220px] md:pt-[220px]'
		>
			<div className='pointer-events-none absolute inset-x-0 top-0 h-[140px] overflow-hidden md:h-[240px]'>
				<svg
					viewBox={`0 0 ${arcWidth} ${ARC_HEIGHT}`}
					preserveAspectRatio='none'
					className='absolute left-1/2 top-0 h-full -translate-x-1/2'
					style={{ width: `${OVERSIZE * 100}%` }}
					aria-hidden='true'
				>
					<path
						d={`${arcPath} L${arcWidth},${ARC_HEIGHT} L0,${ARC_HEIGHT} Z`}
						fill='#ede7da'
					/>
				</svg>
			</div>

			<div className='relative bg-[#ede7da] pb-8 md:pb-16'>
				<div className='hidden md:block relative -mt-[20px] h-[420px] overflow-hidden'>
					<svg
						viewBox={`0 0 ${arcWidth} ${TEXT_LAYER_HEIGHT}`}
						preserveAspectRatio='none'
						className='absolute left-1/2 top-0 h-full -translate-x-1/2'
						style={{ width: `${OVERSIZE * 100}%` }}
						aria-label='Design and build by Caeser Ibrahim'
					>
						<defs>
							<path id='statement-arc-path' d={arcPath} ref={pathRef} />
						</defs>

						<text
							ref={measureTextRef}
							x={-99999}
							y={-99999}
							fontSize={FONT_SIZE}
							fontWeight={300}
							letterSpacing='2px'
							style={{ fontFamily: 'inherit', textTransform: 'uppercase' }}
						>
							{STATEMENT}
						</text>

						{offsets.map((offset, index) => (
							<text
								key={index}
								fill='#111111'
								fontSize={FONT_SIZE}
								fontWeight={300}
								letterSpacing='2px'
								style={{ fontFamily: 'inherit', textTransform: 'uppercase' }}
								dy={TEXT_DY}
							>
								<textPath href='#statement-arc-path' startOffset={offset}>
									{STATEMENT}
								</textPath>
							</text>
						))}
					</svg>
				</div>
			</div>
		</section>
	)
}
