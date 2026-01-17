import { Metadata } from 'next'
import WaitlistForm from '@/components/WaitlistForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Join the Waitlist',
  description: "Be among the first to experience Man's Manual. Join our waitlist and lock in exclusive founder pricing - $4.99/month instead of $9.99/month.",
}

export default function Waitlist() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '50% Off Forever',
      description: 'Lock in $4.99/month (regular price $9.99) for life. Never pay full price.',
      highlight: true,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Early Access',
      description: 'Be the first to use Man\'s Manual before the public launch.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Founder\'s Badge',
      description: 'Exclusive badge showing you\'re an original supporter.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: 'Shape the Future',
      description: 'Your feedback will directly influence features and development.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Priority Support',
      description: 'Get dedicated support as a founding member.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Referral Bonuses',
      description: 'Invite friends and earn free months. More details after signup.',
    },
  ]

  const referralTiers = [
    { referrals: 3, reward: '1 free month promo code' },
  ]

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Limited Founder's Pricing Available
            </div>

            <h1 className="font-display font-bold text-gray-900 mb-6">
              Join the <span className="text-gradient">Founder's Circle</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Be among the first 1,000 believers to experience Man's Manual and lock in <strong className="text-primary">50% off for life</strong>.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-lg mb-8">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <span className="text-gray-500 line-through text-2xl">$9.99/mo</span>
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-primary font-display font-bold text-4xl">$4.99/mo</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>50% savings</strong> - Lock in this price forever
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Join the waitlist now to secure your founder's discount. When the app launches, you'll get immediate access at this exclusive price.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom max-w-2xl">
          <WaitlistForm />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Exclusive Founder Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a founding member, you'll receive special perks that later users won't have access to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`card ${benefit.highlight ? 'border-2 border-primary ring-4 ring-primary/10' : ''}`}
              >
                <div className={`w-12 h-12 rounded-lg ${benefit.highlight ? 'bg-primary' : 'bg-primary/10'} ${benefit.highlight ? 'text-white' : 'text-primary'} flex items-center justify-center mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Earn Free Months by Referring Friends
            </h2>
            <p className="text-lg text-gray-600">
              Share Man's Manual with other believers who want to grow. The more friends you invite, the more you earn.
            </p>
          </div>

          <div className="space-y-4">
            {referralTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary/5 to-primary-light/5 border-2 border-primary/20 rounded-xl p-6 flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-2xl">
                  {tier.referrals}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold mb-1">
                    Refer {tier.referrals} friends
                  </p>
                  <p className="text-gray-600">
                    Get <strong className="text-primary">{tier.reward}</strong>
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
              How It Works
            </h3>
            <ol className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>Join the waitlist and receive your unique referral link via email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>Share your link with 3 friends who would benefit from Man's Manual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>When all 3 friends join using your link, we'll email you a promo code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">4.</span>
                <span>Redeem your code in the app for 1 free month when you subscribe</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Beta Testers</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">50%</div>
              <div className="text-gray-600">Discount</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">1000</div>
              <div className="text-gray-600">Spots Left</div>
            </div>
          </div>

          <blockquote className="text-xl italic text-gray-700 mb-4">
            "The early adopters who believe in our vision deserve to be rewarded. This founder's pricing is our way of saying thank you for joining us at the beginning."
          </blockquote>
          <p className="text-gray-600 font-semibold">— Man's Manual Team</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-xl p-6">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Is the $4.99 price really forever?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! When you join the waitlist and become a founding member, you lock in $4.99/month (or $39.99/year) for as long as you remain a subscriber. Even when we raise prices to $9.99/month for new users, your rate stays the same.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                When will the app launch?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                We're aiming for launch in Q1 2026. Waitlist members will be notified via email 1 week before launch with instructions on how to download and activate your founder's discount.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                Do I have to pay to join the waitlist?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                No! Joining the waitlist is completely free. You only pay when the app launches and you decide to subscribe. But by joining now, you secure the $4.99 founder's pricing.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                How do referrals work?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                After joining the waitlist, you'll receive a unique referral link via email. Share it with 3 friends. When all 3 join using your link, we'll email you a one-time promo code for 1 free month. You can redeem this code in the app after subscribing.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                What if I change my mind?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">
                There's no commitment. You can leave the waitlist anytime, and you're not obligated to subscribe when the app launches. However, if you leave, you'll lose your spot and may not be able to get the founder's pricing later.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Don't Miss Your Chance
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Only <strong>1,000 founder spots</strong> available. Once they're gone, the price goes up to $9.99/month for everyone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist-form" className="btn-primary bg-white text-primary hover:bg-gray-50">
              Join the Waitlist Now
            </a>
            <Link href="/features" className="btn-secondary border-white text-white hover:bg-white/10">
              See All Features
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • Free to join • Lock in 50% off forever
          </p>
        </div>
      </section>
    </div>
  )
}
