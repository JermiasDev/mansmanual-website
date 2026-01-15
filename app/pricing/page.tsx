import { Metadata } from 'next'
import DownloadButton from '@/components/DownloadButton'

export const metadata: Metadata = {
  title: 'Pricing',
  description: "Choose the perfect plan for your journey. Man's Manual offers a free tier with essential features and a premium subscription with unlimited AI assistance and advanced tools.",
}

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with the essentials',
      features: [
        'Daily task and habit tracking',
        'Unlimited tasks and habits',
        'Streak tracking and badges',
        'Bible study (KJV translation)',
        'Prayer journal',
        'Notes and folders',
        'Basic progress tracking',
        '10 AI messages per month',
      ],
      cta: 'Download Free',
      popular: false,
    },
    {
      name: 'Premium',
      price: '$4.99',
      originalPrice: '$9.99',
      period: 'per month',
      yearlyPrice: '$39.99/year',
      originalYearlyPrice: '$99.99/year',
      badge: 'Early Adopter Price',
      description: 'Unlock your full potential with unlimited features',
      features: [
        'Everything in Free, plus:',
        'Unlimited AI messages (fair-use limits)',
        'All Bible translations (KJV, ESV, NIV, NKJV)',
        'AI-generated workout plans',
        'Advanced progress analytics',
        'Priority support',
        'Early access to new features',
        'Ad-free experience',
      ],
      cta: 'Lock In This Price',
      popular: true,
    },
  ]

  const faqs = [
    {
      question: 'How do I subscribe to Premium?',
      answer: 'Download the app and tap on the Premium button in settings. You can subscribe through the App Store with your Apple ID. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes! You can cancel your subscription at any time through your iPhone Settings > [Your Name] > Subscriptions. Your premium features will remain active until the end of your current billing period.',
    },
    {
      question: 'What are the "fair-use limits" for AI messages?',
      answer: 'Premium subscribers get unlimited AI messages under normal use. Fair-use limits prevent abuse and ensure quality service for all users. Most users never reach these limits - they\'re designed to prevent automated/excessive usage, not to restrict genuine use.',
    },
    {
      question: 'Is there a free trial for Premium?',
      answer: 'New users may be eligible for a free trial period when subscribing to Premium. Check the app for current trial offers. Trial periods vary and are managed through the App Store.',
    },
    {
      question: 'What happens to my data if I downgrade to Free?',
      answer: 'Your data is never deleted. If you downgrade, you\'ll lose access to premium features (additional Bible translations, unlimited AI, workout plans), but all your tasks, prayers, notes, and streaks remain intact.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Refunds are handled by Apple through the App Store. Generally, App Store purchases are final, but you can request a refund through reportaproblem.apple.com if you believe you qualify under Apple\'s refund policy.',
    },
    {
      question: 'Are there discounts for students or groups?',
      answer: 'We currently don\'t offer special discounts, but we do offer yearly pricing that saves you over 30% compared to monthly billing. Check the app for any limited-time promotional offers.',
    },
    {
      question: 'Which Bible translations are included?',
      answer: 'Free users get the King James Version (KJV). Premium subscribers get access to KJV, English Standard Version (ESV), New International Version (NIV), and New King James Version (NKJV).',
    },
    {
      question: 'Will my subscription work on multiple devices?',
      answer: 'Yes! Your subscription is tied to your Apple ID and will work on any iOS device where you\'re signed in with the same Apple ID.',
    },
    {
      question: 'How does the AI assistant work?',
      answer: 'Our AI uses advanced language models to provide personalized guidance. It can create Bible-linked devotionals, help organize your goals, generate workout plans, and answer questions about faith and personal growth. Free users get 10 messages/month; Premium users get unlimited access.',
    },
  ]

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Limited Time: 50% Off for Early Adopters
          </div>
          <h1 className="font-display font-bold text-gray-900 mb-6">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Start free and upgrade to Premium at our <strong className="text-primary">special early adopter price</strong>
          </p>
          <p className="text-gray-600">
            Regular price will be $9.99/month after launch. Lock in $4.99/month now.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative card ${
                  plan.popular
                    ? 'border-2 border-primary shadow-2xl'
                    : ''
                }`}
              >
                {plan.popular && plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  {plan.originalPrice && (
                    <div className="mb-2">
                      <span className="text-gray-500 line-through text-xl">
                        {plan.originalPrice}
                      </span>
                      <span className="ml-2 text-primary font-semibold text-sm">
                        Save 50%
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="font-display font-bold text-5xl text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  {plan.yearlyPrice && (
                    <div>
                      <p className="text-sm text-gray-600">
                        or {' '}
                        {plan.originalYearlyPrice && (
                          <span className="line-through text-gray-400">{plan.originalYearlyPrice}</span>
                        )}
                        {' '}<strong className="text-primary">{plan.yearlyPrice}</strong>
                        {' '}(save 33% + lock in early pricing)
                      </p>
                    </div>
                  )}
                  <p className="text-gray-600 mt-2">
                    {plan.description}
                  </p>
                  {plan.popular && (
                    <div className="mt-3 p-2 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-semibold">
                        🔒 Lock in this price forever
                      </p>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary dark:text-accent flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={feature.startsWith('Everything') ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  {plan.popular ? (
                    <a
                      href="#download"
                      className="btn-primary w-full block text-center"
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <a
                      href="#download"
                      className="btn-secondary w-full block text-center"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Fair Use Disclosure */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h4 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
              About Fair-Use Limits
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Premium subscribers enjoy unlimited AI messages under normal, personal use. Fair-use limits are in place to prevent abuse and ensure quality service for all users. These limits are generous and designed to accommodate genuine personal use - most users never approach them. Automated usage, sharing accounts, or commercial use may be subject to restrictions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about pricing and subscriptions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light dark:from-accent dark:to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download Man's Manual for free and experience the power of disciplined growth. Upgrade to Premium anytime.
          </p>
          <DownloadButton variant="light" />
        </div>
      </section>
    </div>
  )
}
