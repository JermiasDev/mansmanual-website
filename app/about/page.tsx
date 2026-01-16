import { Metadata } from 'next'
import Link from 'next/link'
import DownloadButton from '@/components/DownloadButton'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Man\'s Manual LLC and our mission to help men grow in faith, fitness, and focus through disciplined accountability.',
}

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Faith',
      description: 'We believe spiritual growth is the foundation of a purposeful life. Our tools help men strengthen their relationship with God through scripture study, prayer, and reflection.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fitness',
      description: 'Physical discipline builds mental strength. We provide the tools to help men take care of their bodies as temples, building consistency through structured workout planning and tracking.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Focus',
      description: 'Intentional living requires mental clarity and organization. We help men build productive habits, set meaningful goals, and maintain focus on what truly matters.',
    },
  ]

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-gray-900 dark:text-white mb-6">
              Building Men of <span className="text-gradient">Purpose and Discipline</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Man's Manual is more than an app—it's a movement to help men live with intention, strengthen their faith, build their bodies, and sharpen their minds through practical, data-driven accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                We exist to empower men to live with greater purpose, discipline, and spiritual depth. Too often, men struggle with consistency, lack clear direction, or feel disconnected from their faith. We built Man's Manual to solve that.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Our platform combines timeless biblical wisdom with modern technology to create a comprehensive accountability system. We believe that when men strengthen their walk with God, take care of their bodies, and organize their lives with intention, they become better husbands, fathers, leaders, and disciples.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Man's Manual isn't about perfection—it's about progress. It's about showing up every day, building streaks, and becoming 1% better through consistent action.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 dark:from-accent/20 dark:to-accent-light/20 rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl font-display italic text-gray-900 dark:text-white mb-4">
                "Discipline is the bridge between goals and accomplishment."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400">— Jim Rohn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything we build is anchored in three pillars of growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-accent/10 dark:to-accent-light/10 flex items-center justify-center text-primary dark:text-accent mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-8 text-center">
            The Story Behind Man's Manual
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Man's Manual was born from a simple observation: many men want to grow but lack the right tools to build sustainable habits. We saw men striving to read their Bibles more consistently, wanting to get in shape, trying to be more productive—but struggling to maintain momentum.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Traditional productivity apps were too secular. Faith apps lacked accountability features. Fitness apps ignored spiritual growth. We realized there wasn't a single platform that addressed the whole man—spirit, body, and mind.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              So we built it. Man's Manual combines powerful habit tracking with deep Bible study tools, prayer journaling, fitness planning, and AI assistance—all designed specifically for men who want to live with purpose.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              We're a small team driven by a big vision: to see men transformed by the daily discipline of showing up, staying consistent, and pursuing growth in every area of life. We believe that faith without action is incomplete, and that small daily wins compound into life-changing transformation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              This is just the beginning. We're constantly improving, adding features, and listening to our community. Thank you for being part of this journey.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-8 text-center">
              Company Information
            </h2>
            <div className="card">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Company Name
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Man's Manual LLC</p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Founded
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">2025</p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">United States</p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">iOS (iPhone & iPad)</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Email:{' '}
                    <a
                      href="mailto:Messenger@mansmanualapp.com"
                      className="text-primary dark:text-accent hover:underline"
                    >
                      Messenger@mansmanualapp.com
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Website:{' '}
                    <a
                      href="https://mansmanual.com"
                      className="text-primary dark:text-accent hover:underline"
                    >
                      https://mansmanual.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light dark:from-accent dark:to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the movement of men building discipline, strengthening faith, and transforming their lives one day at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton variant="light" />
            <Link href="/features" className="btn-secondary border-white text-white hover:bg-white/10">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
