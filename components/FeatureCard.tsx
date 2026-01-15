'use client'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div
      className="card group animate-fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-accent/10 dark:to-accent-light/10 flex items-center justify-center text-primary dark:text-accent mb-4 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}
