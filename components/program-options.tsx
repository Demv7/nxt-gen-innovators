'use client'

const programs = [
  {
    title: 'Entrepreneurship Development Programs (EDP)',
    duration: 'Flexible | Workshop Series',
    description: 'Comprehensive workshops covering startup ideation, design thinking, and business model development',
    features: [
      'Startup ideation workshops',
      'Design thinking & problem-solving sessions',
      'Business model & pitch training',
      'Industry expert sessions',
      'Certificate of completion'
    ]
  },
  {
    title: 'Innovation & Startup Bootcamps',
    duration: '3-5 Sessions | Intensive',
    description: 'Hands-on bootcamp with real-world startup simulations and case studies',
    features: [
      'Intensive startup simulations',
      'Real-world case studies',
      'Business planning workshops',
      'Pitch preparation training',
      'Live startup project launch'
    ],
    featured: true
  },
  {
    title: 'Mentorship & Industry Exposure',
    duration: 'Ongoing | Personalized',
    description: 'Direct mentorship from startup founders and industry experts',
    features: [
      'Personalized startup mentorship',
      'Sessions with founders & experts',
      'Funding & incubation guidance',
      'Scaling strategy support',
      'Industry network access'
    ]
  },
  {
    title: 'Internship & Live Projects',
    duration: 'Flexible | Experiential',
    description: 'Real startup internships and live project opportunities',
    features: [
      'Startup internship placements',
      'Live industry projects',
      'Certificate-based learning',
      'Portfolio development',
      'Industry exposure'
    ]
  }
]

export function ProgramOptions() {
  return (
    <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Program Offerings
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive entrepreneurship programs designed for college students and institutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`border rounded p-8 transition-all duration-300 ${
              program.featured
                ? 'border-primary bg-background shadow-lg scale-105'
                : 'border-border bg-background'
            }`}
          >
            {program.featured && (
              <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded mb-4">
                FEATURED PROGRAM
              </div>
            )}
            <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
            <p className="text-muted-foreground mb-2 font-semibold">{program.duration}</p>
            <p className="text-sm text-muted-foreground mb-6">{program.description}</p>

            <ul className="space-y-3 mb-8">
              {program.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded font-semibold transition-all duration-300 ${
                program.featured
                  ? 'bg-primary text-primary-foreground hover:opacity-90'
                  : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
              }`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
