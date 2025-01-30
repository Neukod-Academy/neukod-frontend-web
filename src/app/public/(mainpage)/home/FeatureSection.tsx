import { GraduationCap, TreesIcon as Tree, FileCheck, Tag, Lightbulb } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Best Tutors",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      icon: Tree,
      title: "Best Curriculum",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: FileCheck,
      title: "Certificate",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Tag,
      title: "Best Price",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
      iconColor: "text-sky-500",
      bgColor: "bg-sky-100",
    },
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-800">
          Why we are different than others?
        </h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-gray-700" />
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
        <button className="bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Get Started
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-gray-100 hover:scale-105 duration-200 transform-all"
            >
              <div className="mb-4">
                <div className={`w-14 h-14 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

