import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Man\'s Manual. Find answers to common questions or contact our support team.',
}

export default function Support() {
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I download Man\'s Manual?',
          answer: 'Man\'s Manual is available on the Apple App Store for iPhone and iPad. Search for "Man\'s Manual" in the App Store or use the download button on our homepage. The app requires iOS 15.0 or later.',
        },
        {
          question: 'Do I need to create an account?',
          answer: 'No account is required to use Man\'s Manual. All your data is stored locally on your device. However, we recommend backing up your device regularly through iCloud to preserve your data.',
        },
        {
          question: 'Is the app really free?',
          answer: 'Yes! Man\'s Manual offers a robust free tier that includes daily task tracking, Bible study (KJV translation), prayer journal, notes, and 10 AI messages per month. Premium features are available for $4.99/month or $39.99/year.',
        },
      ],
    },
    {
      category: 'Subscriptions & Billing',
      questions: [
        {
          question: 'How do I subscribe to Premium?',
          answer: 'Open the app and navigate to Settings > Premium. Choose either the monthly ($4.99) or yearly ($39.99) plan. Payment will be processed through your Apple ID via the App Store.',
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'Go to your iPhone Settings > [Your Name] > Subscriptions > Man\'s Manual. Tap "Cancel Subscription." Your premium features will remain active until the end of your current billing period.',
        },
        {
          question: 'How do I restore my purchase on a new device?',
          answer: 'Your subscription is tied to your Apple ID. Simply sign in with the same Apple ID on your new device, open the app, and go to Settings > Restore Purchases. Your premium features will be activated automatically.',
        },
        {
          question: 'Can I get a refund?',
          answer: 'Refunds are handled by Apple. Visit reportaproblem.apple.com, sign in with your Apple ID, find Man\'s Manual in your purchase history, and request a refund. Apple will review your request according to their refund policy.',
        },
        {
          question: 'Why was I charged twice?',
          answer: 'If you see duplicate charges, it\'s likely due to overlapping subscriptions or Apple\'s billing cycle. Check your subscriptions in iPhone Settings > [Your Name] > Subscriptions. If the issue persists, contact Apple Support or reach out to us.',
        },
      ],
    },
    {
      category: 'Features & Usage',
      questions: [
        {
          question: 'How do AI messages work?',
          answer: 'Free users get 10 AI messages per month. Premium users get unlimited messages under fair-use limits. Messages reset on the first of each month. The AI can create devotionals, help organize goals, generate workout plans, and answer questions about faith and growth.',
        },
        {
          question: 'What Bible translations are available?',
          answer: 'Free users have access to the King James Version (KJV). Premium subscribers can access KJV, English Standard Version (ESV), New International Version (NIV), and New King James Version (NKJV).',
        },
        {
          question: 'How do streaks work?',
          answer: 'Streaks track how many consecutive days you\'ve completed a task or habit. Complete a task every day to build your streak. If you miss a day, your streak resets to zero. You\'ll earn badges for reaching streak milestones.',
        },
        {
          question: 'Can I sync my data across devices?',
          answer: 'Currently, data is stored locally on your device and does not sync across devices. We recommend using one primary device for the app and backing up regularly through iCloud. Cloud sync is planned for a future update.',
        },
        {
          question: 'How do I back up my data?',
          answer: 'Enable iCloud backup on your iPhone (Settings > [Your Name] > iCloud > iCloud Backup). This will backup your app data along with your other iPhone data. You can also export your notes as PDFs within the app.',
        },
      ],
    },
    {
      category: 'Troubleshooting',
      questions: [
        {
          question: 'The app is crashing or freezing',
          answer: 'Try these steps: 1) Force close the app and reopen it. 2) Restart your iPhone. 3) Check for app updates in the App Store. 4) Ensure you have enough storage space. 5) If the issue persists, uninstall and reinstall the app (your data will be preserved if you have iCloud backup enabled).',
        },
        {
          question: 'My data is missing or disappeared',
          answer: 'If your data is missing, first check if you\'re signed in with the correct Apple ID. If you recently reset your device, restore from your iCloud backup. If you didn\'t have backup enabled, unfortunately the data cannot be recovered. We strongly recommend enabling iCloud backup.',
        },
        {
          question: 'AI features aren\'t working',
          answer: 'Ensure you have an active internet connection - AI features require connectivity. If you\'re a free user, check if you\'ve used all 10 monthly messages. Premium users experiencing issues should check their subscription status in Settings > Premium.',
        },
        {
          question: 'I\'m not receiving notifications',
          answer: 'Go to iPhone Settings > Notifications > Man\'s Manual and ensure notifications are enabled. Within the app, check Settings > Notifications and verify your preferences. You may need to grant notification permissions when prompted.',
        },
        {
          question: 'The app won\'t download or update',
          answer: 'Check your internet connection and available storage space. Ensure you\'re signed in to the App Store with your Apple ID. Try restarting your device. If the issue persists, contact Apple Support.',
        },
      ],
    },
    {
      category: 'Account & Privacy',
      questions: [
        {
          question: 'Is my data private and secure?',
          answer: 'Yes. All your personal content (tasks, prayers, notes, Bible highlights) is stored locally on your device and never uploaded to our servers. AI conversations are processed through OpenAI\'s API but are not stored by us. Read our Privacy Policy for complete details.',
        },
        {
          question: 'How do I delete my data?',
          answer: 'Your data is stored on your device. To delete all data, simply uninstall the app from your iPhone. This will permanently delete all tasks, prayers, notes, and other content. Make sure this is what you want before proceeding.',
        },
        {
          question: 'Can other people see my data?',
          answer: 'No. Your data is completely private and stored only on your device. We do not have access to your personal content, prayers, or notes. Only you can see your data unless you share your device with others.',
        },
      ],
    },
  ]

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container-custom text-center">
          <h1 className="font-display font-bold text-gray-900 dark:text-white mb-6">
            How Can We <span className="text-gradient">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions or reach out to our support team
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <details
                    key={questionIndex}
                    className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <svg
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4"
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
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-accent/10 dark:to-accent-light/10 flex items-center justify-center text-primary dark:text-accent mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Get help via email
              </p>
              <a
                href="mailto:Messenger@mansmanualapp.com"
                className="text-primary dark:text-accent hover:underline font-medium"
              >
                Messenger@mansmanualapp.com
              </a>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-accent/10 dark:to-accent-light/10 flex items-center justify-center text-primary dark:text-accent mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
                Response Time
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                We typically respond within
              </p>
              <p className="text-gray-900 dark:text-white font-semibold">
                24-48 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-8">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="/features"
              className="card group hover:border-primary dark:hover:border-accent border-2 border-transparent transition-colors duration-200"
            >
              <svg className="w-10 h-10 text-primary dark:text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Feature Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Learn about all app features
              </p>
            </a>

            <a
              href="/privacy"
              className="card group hover:border-primary dark:hover:border-accent border-2 border-transparent transition-colors duration-200"
            >
              <svg className="w-10 h-10 text-primary dark:text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Privacy Policy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                How we protect your data
              </p>
            </a>

            <a
              href="/terms"
              className="card group hover:border-primary dark:hover:border-accent border-2 border-transparent transition-colors duration-200"
            >
              <svg className="w-10 h-10 text-primary dark:text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Terms of Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Read our terms and conditions
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
