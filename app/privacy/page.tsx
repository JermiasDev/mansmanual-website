import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Man's Manual Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function Privacy() {
  const lastUpdated = 'January 11, 2026'

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-custom max-w-4xl">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Man's Manual LLC ("we," "our," or "us") operates the Man's Manual mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Personal Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Email address (optional, for account recovery)</li>
              <li>Name or username (optional)</li>
              <li>Device information and unique identifiers</li>
            </ul>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              User-Generated Content
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App allows you to create and store content, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Daily tasks and habit tracking data</li>
              <li>Prayer journal entries</li>
              <li>Personal notes and reflections</li>
              <li>Bible study highlights and annotations</li>
              <li>Workout plans and fitness data</li>
              <li>AI conversation history</li>
              <li>Progress metrics and achievement data</li>
            </ul>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you use the App, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Device type, operating system, and version</li>
              <li>App usage statistics and analytics</li>
              <li>Crash reports and error logs</li>
              <li>Feature usage patterns</li>
              <li>Session duration and frequency</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>To provide, maintain, and improve the App's functionality</li>
              <li>To process your subscription and manage payments through RevenueCat</li>
              <li>To provide AI-powered features through OpenAI's API</li>
              <li>To personalize your experience and remember your preferences</li>
              <li>To track your progress and provide insights</li>
              <li>To send you important updates about the App (with your consent)</li>
              <li>To respond to your support requests and inquiries</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To improve our services through usage analytics</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your data is stored locally on your device using Hive database technology. This means:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your personal content (tasks, prayers, notes, Bible highlights) remains on your device</li>
              <li>We do not store your personal content on our servers</li>
              <li>Your data is protected by your device's security features</li>
              <li>You are responsible for backing up your device to preserve your data</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the following third-party services that may collect information:
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              RevenueCat
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use RevenueCat to manage subscriptions and in-app purchases. RevenueCat collects transaction data and device identifiers to facilitate subscription management. For more information, see <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-accent hover:underline">RevenueCat's Privacy Policy</a>.
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              OpenAI API
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you use AI features, your messages are sent to OpenAI's API for processing. OpenAI processes this data according to their API Data Usage Policies. We do not store your AI conversations on our servers. For more information, see <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-accent hover:underline">OpenAI's Privacy Policy</a>.
            </p>

            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3 mt-6">
              Apple App Store
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App is distributed through Apple's App Store. Apple collects certain information when you download and use the App. Please review <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-accent hover:underline">Apple's Privacy Policy</a> for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do NOT sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Service Providers:</strong> With third-party service providers who perform services on our behalf (RevenueCat, OpenAI) under strict confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
              <li><strong>Safety and Protection:</strong> To protect our rights, property, or safety, or that of our users or the public</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified via email and/or App notification)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to our processing of your personal data</li>
              <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To exercise these rights, please contact us at <a href="mailto:Messenger@mansmanualapp.com" className="text-primary dark:text-accent hover:underline">Messenger@mansmanualapp.com</a>. You can also delete your data directly within the App by deleting the App from your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              California Privacy Rights (CCPA)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information held by businesses</li>
              <li>Right to opt-out of the sale of personal information (Note: We do NOT sell your data)</li>
              <li>Right to non-discrimination for exercising your CCPA rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              European Privacy Rights (GDPR)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you are in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). We process your data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Contract Performance:</strong> To provide the App services you've requested</li>
              <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud</li>
              <li><strong>Consent:</strong> For optional features where you've provided consent</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:Messenger@mansmanualapp.com" className="text-primary dark:text-accent hover:underline">Messenger@mansmanualapp.com</a>, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              International Data Transfers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using the App, you consent to such transfers. We take appropriate safeguards to ensure your data is treated securely and in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Since most data is stored locally on your device, you control how long your data is retained. Deleting the App from your device will permanently delete all locally stored data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For significant changes, we may provide additional notice (such as an in-app notification). You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
        </div>
      </div>
    </div>
  )
}
