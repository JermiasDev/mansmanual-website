import { Metadata } from 'next'
import Link from 'next/link'
import FeatureSection from '@/components/FeatureSection'

export const metadata: Metadata = {
  title: 'Features',
  description: "Discover all the powerful features of Man's Manual - from Bible study and prayer journaling to AI-powered workout planning and habit tracking.",
}

export default function Features() {
  const features = [
    {
      title: 'AI Assistant',
      description: 'Get personalized guidance from an AI trained to help you grow in faith, fitness, and focus.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      details: [
        'Create Bible-linked devotionals on any topic',
        'Get help organizing and prioritizing your goals',
        'Draft journal entries with thoughtful prompts',
        'Receive personalized spiritual guidance',
        'Ask questions about scripture and theology',
        'Free: 10 messages/month | Premium: Unlimited (fair-use)',
      ],
      screenshot: '/images/ai.png',
      premium: true,
    },
    {
      title: 'Bible Study',
      description: 'Deepen your faith with comprehensive Bible study tools and multiple translations.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      details: [
        'Access KJV, ESV, NIV, and NKJV translations (Premium)',
        'Highlight and annotate verses with custom colors',
        'Create personal notes linked to specific passages',
        'Save favorite verses for quick reference',
        'Search the entire Bible with powerful filters',
        'Reading plans to guide your study',
      ],
      screenshot: '/images/bible.png',
    },
    {
      title: 'Daily Task Management',
      description: 'Stay on track with powerful task and habit tracking designed to build discipline and consistency.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        'Create and organize daily tasks with priorities',
        'Build habits with intelligent streak tracking',
        'Set recurring tasks for daily, weekly, or custom schedules',
        'Visual progress tracking with charts and statistics',
        'Never miss a day with smart reminders',
        'Earn badges for maintaining consistent streaks',
      ],
      screenshot: '/images/tasks.png',
    },
    {
      title: 'Notes & Folders',
      description: 'Keep your thoughts, insights, and ideas organized in one powerful note-taking system.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: [
        'Rich text formatting for beautiful notes',
        'Organize notes into custom folders',
        'Tag system for easy categorization',
        'Powerful search across all notes',
        'Link notes to Bible verses or prayers',
        'Export notes as PDF or text',
      ],
      screenshot: '/images/notes.png',
    },
    {
      title: 'Prayer Journal',
      description: 'Document your prayer life and witness God\'s faithfulness through answered prayers.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      details: [
        'Guided prayer prompts for daily reflection',
        'Track prayer requests and answers',
        'Categorize prayers (personal, family, church, etc.)',
        'Review answered prayers to build faith',
        'Set reminders for specific prayer commitments',
        'Private and secure - your prayers stay between you and God',
      ],
      screenshot: '/images/prayer.png',
    },
    {
      title: 'Workout Planning',
      description: 'Build physical discipline with AI-generated workout plans tailored to your goals.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      details: [
        'AI-generated workout plans based on your fitness level',
        'Exercise library with instructions and demonstrations',
        'Track sets, reps, and weights for each exercise',
        'Customizable routines for home or gym workouts',
        'Integration with task system for workout accountability',
      ],
      screenshot: '/images/workout.png',
      premium: true,
    },
    {
      title: 'Progress Tracking',
      description: 'Visualize your growth with detailed analytics and insights across all areas of your life.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: [
        'Visual charts showing your streak progress',
        'Weekly and monthly completion statistics',
        'Compare progress across faith, fitness, and focus',
        'Export your data for personal records',
        'Identify trends and patterns in your habits',
        'Set and track long-term goals with milestones',
      ],
      screenshot: '/images/progress.png',
    },
    {
      title: 'Badges & Achievements',
      description: 'Celebrate your progress and stay motivated with a comprehensive achievement system.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      details: [
        'Earn badges for completing challenges',
        'Unlock achievements for reaching milestones',
        'Streak-based rewards for consistency',
        'Special badges for faith, fitness, and focus',
        'Share achievements with the community (optional)',
        'Track your badge collection and progress',
      ],
      screenshot: '/images/badges.png',
    },
  ]

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container-custom text-center">
          <h1 className="font-display font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for <span className="text-gradient">Complete Growth</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to build discipline, strengthen your faith, and achieve your goals - all in one comprehensive platform.
          </p>
          <Link href="/pricing" className="btn-primary">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          details={feature.details}
          screenshot={feature.screenshot}
          premium={feature.premium}
          reversed={index % 2 !== 0}
        />
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light dark:from-accent dark:to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download Man's Manual today and start your journey toward discipline, faith, and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#download" className="btn-primary bg-white text-gray-900 hover:bg-gray-50">
              Download Now
            </a>
            <Link href="/pricing" className="btn-secondary border-white text-white hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
