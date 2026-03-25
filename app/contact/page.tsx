'use client'

import FlipButton from '@/components/ui/FlipButton'
import { FormEvent, useMemo, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
	const [status, setStatus] = useState<Status>('idle')
	const [errorMessage, setErrorMessage] = useState('')

	const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

	const statusText = useMemo(() => {
		if (status === 'success') return 'Message sent successfully.'
		if (status === 'error')
			return errorMessage || 'Something went wrong. Please try again.'
		return ''
	}, [status, errorMessage])

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		if (!accessKey) {
			setStatus('error')
			setErrorMessage('Missing Web3Forms access key.')
			return
		}

		setStatus('loading')
		setErrorMessage('')

		const form = event.currentTarget
		const formData = new FormData(form)

		formData.append('access_key', accessKey)
		formData.append('from_name', 'Caeser Ibrahim Contact Page')
		formData.append(
			'subject',
			String(formData.get('subject') || 'New contact form message'),
		)

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()

			if (result.success) {
				setStatus('success')
				form.reset()
				return
			}

			setStatus('error')
			setErrorMessage(result.message || 'Unable to send your message.')
		} catch {
			setStatus('error')
			setErrorMessage('Network error. Please try again.')
		}
	}

	return (
		<main className='relative min-h-screen overflow-hidden bg-[#0f0d11] text-[#ede7da]'>
			<div className='absolute inset-0'>
				<video
					className='h-full w-full object-cover'
					autoPlay
					muted
					loop
					playsInline
					poster='/images/contact/contact-poster.jpg'
				>
					<source src='/videos/contact-bg.mp4' type='video/mp4' />
				</video>
			</div>

			<section className='relative px-6 pb-20 pt-28 md:pb-24 md:pt-36'>
				<div className='mx-auto max-w-3xl'>
					<div className='mb-8 text-center'>
						<p className='text-[11px] uppercase tracking-[0.28em] text-white/70'>
							Contact
						</p>

						<h1 className='mt-5 text-4xl font-extralight leading-[0.95] tracking-[-0.05em] text-white md:text-6xl'>
							Let’s talk.
						</h1>

						<p className='mx-auto mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg'>
							If you have a question, an idea, or a project in mind, send me a
							message.
						</p>
					</div>

					<div className='rounded-[32px] border border-white/16 bg-white/[0.08] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8'>
						<form onSubmit={handleSubmit} className='space-y-4'>
							<input type='hidden' name='botcheck' className='hidden' />

							<div className='grid gap-4 md:grid-cols-2'>
								<div>
									<label
										htmlFor='name'
										className='mb-2 block text-sm text-white/88'
									>
										Name
									</label>
									<input
										id='name'
										name='name'
										type='text'
										required
										autoComplete='name'
										className='min-h-[56px] w-full rounded-2xl border border-white/18 bg-white/[0.07] px-4 text-white placeholder:text-white/45 outline-none transition focus:border-[#b8914e] focus:bg-white/[0.10]'
										placeholder='Your name'
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='mb-2 block text-sm text-white/88'
									>
										Email
									</label>
									<input
										id='email'
										name='email'
										type='email'
										required
										autoComplete='email'
										className='min-h-[56px] w-full rounded-2xl border border-white/18 bg-white/[0.07] px-4 text-white placeholder:text-white/45 outline-none transition focus:border-[#b8914e] focus:bg-white/[0.10]'
										placeholder='you@example.com'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='mb-2 block text-sm text-white/88'
								>
									Subject
								</label>
								<input
									id='subject'
									name='subject'
									type='text'
									required
									className='min-h-[56px] w-full rounded-2xl border border-white/18 bg-white/[0.07] px-4 text-white placeholder:text-white/45 outline-none transition focus:border-[#b8914e] focus:bg-white/[0.10]'
									placeholder='What would you like to discuss?'
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='mb-2 block text-sm text-white/88'
								>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									required
									rows={7}
									className='w-full rounded-2xl border border-white/18 bg-white/[0.07] px-4 py-4 text-white placeholder:text-white/45 outline-none transition focus:border-[#b8914e] focus:bg-white/[0.10]'
									placeholder='Write your message here.'
								/>
							</div>

							<div className='flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between'>
								<FlipButton
									type='submit'
									text={status === 'loading' ? 'Sending...' : 'Send Message'}
									width={190}
									disabled={status === 'loading'}
								/>

								{status !== 'idle' && (
									<p
										className={`text-sm ${
											status === 'success' ? 'text-[#f0d49b]' : 'text-[#ffb8b8]'
										}`}
									>
										{statusText}
									</p>
								)}
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	)
}
