'use client'

const curriculumModules = [
  {
    module: 'Entrepreneurship Development Programs (EDP)',
    title: 'Startup Ideation & Design Thinking',
    description: 'Comprehensive workshops covering startup ideation, design thinking methodologies, and problem-solving techniques to identify and validate market opportunities.',
    highlights: ['Design Thinking Workshops', 'Market Research & Validation', 'Problem-Solving Sessions', 'Business Model Canvas Training', 'Pitch Preparation']
  },
  {
    module: 'Innovation & Startup Bootcamps',
    title: 'Hands-on Startup Simulations',
    description: '3–5 intensive bootcamp sessions focused on real-world startup scenarios, case studies, business planning, and practical simulations.',
    highlights: ['Startup Simulations', 'Real-world Case Studies', 'Business Planning Workshops', 'Financial Modeling', 'Pitch Deck Creation']
  },
  {
    module: 'Mentorship & Industry Exposure',
    title: 'Founder & Expert Mentorship',
    description: 'Direct mentorship from startup founders and industry experts, providing personalized guidance on funding, incubation, scaling, and business execution.',
    highlights: ['Personalized Startup Mentorship', 'Founder Sessions', 'Industry Expert Panels', 'Funding Strategy Guidance', 'Scaling & Growth Planning']
  },
  {
    module: 'Internship & Live Projects',
    title: 'Experiential Learning Program',
    description: 'Real startup internships and live project opportunities with certificate-based learning, industry exposure, and hands-on problem-solving.',
    highlights: ['Startup Internship Placements', 'Live Industry Projects', 'Certificate-based Learning', 'Portfolio Development', 'Industry Networking']
  },
  {
    module: 'E-Cell & IIC Support',
    title: 'Institution Innovation Support',
    description: 'Comprehensive support for strengthening Entrepreneurship Cells (E-Cell) and Institution\'s Innovation Council (IIC) initiatives.',
    highlights: ['E-Cell Development', 'Innovation Council Support', 'Hackathon Organization', 'Pitch Events', 'Startup Ecosystem Building']
  }
]

export function Curriculum() {
  return (
    <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Complete Entrepreneurship Development Program
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          NxtGen Innovators bridges academic learning with real-world startup execution through comprehensive workshops, bootcamps, mentorship, and hands-on experiences aligned with NEP 2020
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {curriculumModules.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-primary pl-6 py-4 hover:translate-y-[-4px] transition-transform duration-300"
          >
            <div className="text-primary font-bold text-sm mb-1 uppercase tracking-wide">{item.module}</div>
            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
            <ul className="space-y-2">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
