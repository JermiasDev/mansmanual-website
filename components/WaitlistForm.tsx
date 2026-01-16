'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralCode: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [referralLink, setReferralLink] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // TODO: Replace with your actual waitlist API endpoint
      // You can use services like:
      // - Waitlist API (waitlistapi.com)
      // - ConvertKit
      // - MailerLite
      // - Custom backend

      const response = await fetch('https://api.waitlistapi.com/api/v1/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          referral_code: formData.referralCode || null,
          // TODO: Add your Waitlist API key
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setStatus('success')
        // Generate unique referral link for the user
        // TODO: Replace with actual domain and referral code from API
        setReferralLink(`https://mansmanual.com/waitlist?ref=${data.referral_code || 'UNIQUE_CODE'}`)
        setFormData({ name: '', email: '', referralCode: '' })
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    // You could add a toast notification here
  }

  if (status === 'success') {
    return (
      <div id="waitlist-form" className="card bg-gradient-to-br from-primary/5 to-primary-light/5 border-2 border-primary/20">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
            Welcome to the Founder's Circle! 🎉
          </h3>
          <p className="text-gray-600 mb-4">
            You've successfully secured your <strong className="text-primary">50% founder's discount</strong> at $4.99/month (regular price $9.99).
          </p>
          <p className="text-gray-600 mb-6">
            Check your email for confirmation and next steps.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 mb-4">
          <h4 className="font-display font-semibold text-lg text-gray-900 mb-3">
            Your Unique Referral Link
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Share this link with friends to earn free months!
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
            />
            <button
              onClick={copyReferralLink}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 text-sm font-medium"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Earn a Free Month
          </h4>
          <p className="text-sm text-gray-700">
            Refer 3 friends who join the waitlist and we'll email you a promo code for 1 free month!
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="https://www.instagram.com/mans.manual/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary text-center text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow on Instagram
          </a>
          <button
            onClick={() => setStatus('idle')}
            className="flex-1 btn-secondary text-center text-sm"
          >
            Add Another Email
          </button>
        </div>
      </div>
    )
  }

  return (
    <div id="waitlist-form" className="card">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
          Secure Your Founder's Pricing
        </h3>
        <p className="text-gray-600">
          Join {' '}<strong className="text-primary">1,000 founding members</strong> and lock in 50% off for life
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="referralCode" className="label">
            Referral Code (Optional)
          </label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter a friend's code"
          />
          <p className="text-xs text-gray-500 mt-1">
            If a friend referred you, enter their code to give them credit
          </p>
        </div>

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
            Oops! Something went wrong. Please try again or email us at Messenger@mansmanualapp.com
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {status === 'submitting' ? 'Joining Waitlist...' : 'Lock In My 50% Discount'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By joining, you agree to our <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. No spam, ever.
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Free to join</span>
          </div>
        </div>
      </div>
    </div>
  )
}
