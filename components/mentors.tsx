'use client'

const mentors = [
  {
    name: 'Ashish Patel',
    title: 'Entrepreneur, Clinical Researcher',
    company: 'Healthcare Innovation Ventures'
  },
  {
    name: 'Dev Brahmbhatt',
    title: 'Tech CEO',
    company: 'Karnavati University'
  },
  {
    name: 'Elena Rodriguez',
    title: 'Product Designer',
    company: 'Design Studio'
  },
  {
    name: 'Arun Patel',
    title: 'Business Mentor',
    company: 'Venture Partner'
  },
  {
    name: 'Lisa Zhang',
    title: 'Marketing Expert',
    company: 'Growth Co.'
  },
  {
    name: 'James Wilson',
    title: 'VC Investor',
    company: 'Innovation Fund'
  }
]

export function Mentors() {
  return (
    <section id="mentors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Personalized Mentorship from Industry Leaders
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get personalized mentorship for your startup ideas with guidance on funding, incubation, and scaling from experienced founders and industry experts
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">
                {mentor.name.split(' ')[0][0]}{mentor.name.split(' ')[1][0]}
              </span>
            </div>
            <h3 className="font-bold text-foreground mb-1">{mentor.name}</h3>
            <p className="text-sm text-primary font-semibold mb-1">{mentor.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
