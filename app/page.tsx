'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DownloadButton from '@/components/DownloadButton'
import FeatureCard from '@/components/FeatureCard'
import WaitlistModal from '@/components/WaitlistModal'

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Daily Task Management',
      description: 'Track your habits and goals with our intelligent streak system. Build consistency and watch your discipline grow.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Bible Study',
      description: 'Access multiple translations (KJV, ESV, NIV, NKJV) with highlighting, notes, and devotional creation tools.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Prayer Journal',
      description: 'Document your prayers, track answers, and grow your faith through guided prayer prompts and personal reflection.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Assistant',
      description: 'Get personalized guidance with our AI that creates devotionals, organizes goals, and tailors fitness plans to your needs.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Workout Planning',
      description: 'AI-generated workout plans, exercise tracking, and progress monitoring to help you achieve your fitness goals.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Notes & Organization',
      description: 'Keep your thoughts organized with folders, tags, and powerful search. Everything in one place.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Badges & Achievements',
      description: 'Earn badges and unlock achievements as you build consistency and reach milestones in your journey.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Progress Tracking',
      description: 'Visualize your growth with detailed metrics, streaks, and insights across faith, fitness, and focus.',
    },
  ]

  const testimonials = [
    {
      quote: "Man's Manual has transformed how I approach my daily routine. The combination of faith and fitness tracking keeps me accountable.",
      author: "User Testimonial",
      role: "Beta Tester",
    },
    // TODO: Add real testimonials when available
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <h1 className="font-display font-bold text-gray-900 dark:text-white">
                Unlock Your <span className="text-gradient">Full Potential</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Build discipline. Strengthen faith. Transform your life through the power of accountability in Faith, Fitness, and Focus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <DownloadButton onClick={() => setIsWaitlistOpen(true)} />
                <Link href="/features" className="btn-secondary text-center">
                  Explore Features
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">4.9/5 Rating</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="text-gray-600 dark:text-gray-400">iOS 15.0+</div>
              </div>
            </div>
            <div className="relative animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/home.png"
                  alt="Man's Manual App Home Screen"
                  width={390}
                  height={844}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive platform designed to help you grow in faith, build physical discipline, and sharpen mental clarity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display font-bold text-gray-900 dark:text-white mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Man's Manual helps you build a lifestyle of discipline and purpose.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '01',
                title: 'Faith',
                description: 'Deepen your relationship with God through daily Bible study, prayer journals, and scripture-linked devotionals.',
              },
              {
                step: '02',
                title: 'Fitness',
                description: 'Build physical discipline with AI-generated workout plans, progress tracking, and achievement milestones.',
              },
              {
                step: '03',
                title: 'Focus',
                description: 'Organize your life with task management, habit tracking, and AI assistance for goal achievement.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light dark:from-accent dark:to-accent-light text-white font-display font-bold text-2xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="section-padding bg-gradient-to-br from-primary to-primary-light dark:from-accent dark:to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of men who are transforming their lives through discipline, faith, and focus.
          </p>
          <DownloadButton variant="light" onClick={() => setIsWaitlistOpen(true)} />
          <p className="mt-6 text-sm opacity-75">
            Join the waitlist for early access!
          </p>
        </div>
      </section>

      {/* Social Proof Section - Prepared for future testimonials */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Men Seeking Growth
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what users are saying about Man's Manual
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Man's Manual has completely transformed my morning routine. The combination of scripture reading and workout tracking keeps me focused and motivated every single day.",
                author: "Joshua M.",
                role: "Beta Tester"
              },
              {
                quote: "I've tried countless productivity apps, but nothing brings together faith and discipline like this. The AI assistant helps me stay accountable in ways I never expected.",
                author: "David R.",
                role: "Early Adopter"
              },
              {
                quote: "The streak system is a game-changer. Watching my daily consistency grow has pushed me to be more disciplined in every area of my life. Highly recommend!",
                author: "Jonah T.",
                role: "Beta Tester"
              }
            ].map((testimonial, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  )
}
