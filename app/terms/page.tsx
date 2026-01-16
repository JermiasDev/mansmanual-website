import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: "Man's Manual Terms of Service - Read our terms and conditions for using the Man's Manual app.",
}

export default function Terms() {
  const lastUpdated = 'January 11, 2026'

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-custom max-w-4xl">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Man's Manual LLC ("Company," "we," "us," or "our") concerning your access to and use of the Man's Manual mobile application (the "App").
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By downloading, installing, or using the App, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the App.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to change or modify these Terms at any time and in our sole discretion. If we make changes to these Terms, we will provide notice through the App or by other means. Your continued use of the App following such notice constitutes your acceptance of the changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Eligibility
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You must be at least 13 years of age to use the App. By using the App, you represent and warrant that you meet this age requirement. If you are under 18 years of age, you represent that you have obtained consent from your parent or legal guardian to use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              License and Access
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the App for your personal, non-commercial use.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Copy, modify, distribute, sell, or lease any part of the App</li>
              <li>Reverse engineer or attempt to extract the source code of the App</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Circumvent any security features or technological measures</li>
              <li>Use automated systems to access the App</li>
              <li>Share your account credentials with others</li>
              <li>Use the App in any way that could damage, disable, or impair our servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Subscriptions and Payments
            </h2>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Subscription Plans
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App offers both free and premium subscription tiers. Premium features require a paid subscription, which can be purchased on a monthly or yearly basis. Current pricing:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Monthly Premium: $4.99/month</li>
              <li>Yearly Premium: $39.99/year</li>
            </ul>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Auto-Renewal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period. You will be charged for the renewal within 24 hours prior to the end of the current period at the same price you initially paid.
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Managing Subscriptions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can manage and cancel your subscription through your iPhone Settings &gt; [Your Name] &gt; Subscriptions. Subscriptions are managed by Apple through the App Store.
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Refunds
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All purchases are final and non-refundable except as required by law or as determined by Apple. Refund requests should be submitted to Apple through reportaproblem.apple.com. We do not process refunds directly.
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Free Trial
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you sign up for a free trial, you will have access to premium features for the duration of the trial period. At the end of the trial period, you will automatically be charged the subscription fee unless you cancel before the trial period ends.
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Price Changes
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right to change subscription prices at any time. Price changes will apply to new subscriptions and renewals after the change. We will provide advance notice of price changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              User Content
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App allows you to create, upload, and store content such as tasks, notes, prayers, Bible highlights, and other materials ("User Content"). You retain all ownership rights to your User Content.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By creating User Content, you grant us a limited license to store, process, and display your User Content solely for the purpose of providing the App's services to you. We do not claim ownership of your User Content.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You are solely responsible for your User Content and represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate any laws or third-party rights</li>
              <li>Your User Content does not contain viruses, malware, or harmful code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Acceptable Use Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You agree not to use the App to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Harass, abuse, or harm others</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the App or servers</li>
              <li>Attempt to gain unauthorized access to the App or related systems</li>
              <li>Use the App for commercial purposes without authorization</li>
              <li>Collect or harvest information about other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              AI Features and Fair-Use Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App includes AI-powered features that use third-party artificial intelligence services. Premium subscribers have access to unlimited AI messages subject to fair-use limits.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fair-use limits are designed to prevent abuse and ensure quality service for all users. Prohibited uses include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Automated or scripted access to AI features</li>
              <li>Sharing accounts or credentials</li>
              <li>Commercial use of AI features</li>
              <li>Excessive usage that impacts service quality for other users</li>
              <li>Using AI features to generate harmful, illegal, or inappropriate content</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right to suspend or terminate access to AI features for violations of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Spiritual Guidance Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Man's Manual is designed as a scripture study tool and personal development aid. It is NOT a replacement for spiritual guidance, pastoral counseling, or religious leadership.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The AI-generated content, including devotionals and spiritual guidance, should be viewed as supplementary material for personal reflection. Always consult with qualified spiritual leaders, pastors, or counselors for important spiritual decisions and guidance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We make no representations or warranties about the theological accuracy, denominational alignment, or spiritual efficacy of AI-generated content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Health and Fitness Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The fitness and workout features of the App are for informational purposes only and are not intended as medical advice. Before beginning any fitness program, consult with your physician or qualified healthcare provider.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You assume all risks associated with any exercise or fitness activities. We are not responsible for any injuries, damages, or health issues that may result from using the App's fitness features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App and its entire contents, features, and functionality (including but not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design, and the selection and arrangement thereof) are owned by Man's Manual LLC, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Bible translations included in the App are used under appropriate licenses or are in the public domain. All rights to these translations remain with their respective copyright holders.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App integrates with third-party services including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>RevenueCat for subscription management</li>
              <li>OpenAI API for AI features</li>
              <li>Apple App Store for distribution and payments</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the actions, content, or policies of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Disclaimers and Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              WE DO NOT WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>The App will meet your requirements or expectations</li>
              <li>The App will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the App will be accurate or reliable</li>
              <li>Any errors in the App will be corrected</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MAN'S MANUAL LLC, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You agree to indemnify, defend, and hold harmless Man's Manual LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your access to or use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your User Content</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Upon termination, your right to use the App will cease immediately. If you wish to terminate your account, you may simply discontinue using the App and cancel any active subscriptions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of [YOUR STATE], without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Severability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Entire Agreement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Man's Manual LLC regarding the App and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Man's Manual LLC</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Email: <a href="mailto:Messenger@mansmanualapp.com" className="text-primary dark:text-accent hover:underline">Messenger@mansmanualapp.com</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Website: <a href="https://mansmanual.com" className="text-primary dark:text-accent hover:underline">https://mansmanual.com</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 italic">
              By using Man's Manual, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
