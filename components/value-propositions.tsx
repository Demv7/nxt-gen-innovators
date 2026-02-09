'use client'

import { Users, BookOpen, Award, Zap, Lightbulb, Rocket, Target, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Experience real-world learning beyond academics',
    description: 'We offer a unique opportunity to explore life beyond traditional academics. Through hands-on projects, you will gain invaluable insights into how the real world works. You will gain a complete understanding of what it takes to succeed.'
  },
  {
    icon: Award,
    title: 'Become exceptional leaders and public speakers',
    description: 'Our program will shape you to confidently express your own ideas. Through practical activities, mentorship, and launching a real product, you\'ll learn to transform innovative concepts into feasible, real-world companies.'
  },
  {
    icon: TrendingUp,
    title: 'Build an outstanding profile for Ivey league college admissions',
    description: 'We will help you to stand out in the competitive college admissions process! Our program offers a tangible outcome that highlights their determination, creativity, and problem-solving skills, making their college application truly shine.'
  },
  {
    icon: Users,
    title: 'Make friendship that will last a lifetime',
    description: 'You will forge deep connections with like-minded peers, cultivating friendships that will endure long after the program concludes. We will introduce them to Business Owners, CEOs, investors, marketers, software engineers, and more, allowing them to begin networking earnestly.'
  }
]

export function ValuePropositions() {
  return (
    <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Our Program is for young minds who wish to:
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform students into innovators and entrepreneurs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <div
              key={index}
              className="border border-border rounded p-8 hover:border-primary transition-colors duration-300"
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
