import Image from 'next/image'

interface FeatureSectionProps {
  title: string
  description: string
  icon: React.ReactNode
  details: string[]
  screenshot: string
  premium?: boolean
  reversed?: boolean
}

export default function FeatureSection({
  title,
  description,
  icon,
  details,
  screenshot,
  premium = false,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-950">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={reversed ? 'md:order-2' : ''}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-accent/10 dark:to-accent-light/10 flex items-center justify-center text-primary dark:text-accent">
                {icon}
              </div>
              {premium && (
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-primary-light dark:from-accent dark:to-accent-light text-white text-sm font-semibold rounded-full">
                  Premium
                </span>
              )}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
            <ul className="space-y-3">
              {details.map((detail, index) => (
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
                  <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot */}
          <div className={reversed ? 'md:order-1' : ''}>
            <div className="relative">
              {screenshot.startsWith('/images/') ? (
                <div className="max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src={screenshot}
                    alt={`${title} Screenshot`}
                    width={390}
                    height={844}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-primary/20 to-primary-light/20 dark:from-accent/20 dark:to-accent-light/20 rounded-3xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-center px-8">
                    {screenshot}<br />
                    <span className="text-sm">Add screenshot here</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
