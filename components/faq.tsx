'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is NxtGen Innovators and who can apply?',
    answer: 'NxtGen Innovators is a student entrepreneurship program that identifies, nurtures, and accelerates entrepreneurial talent among college students. We work through strategic partnerships with colleges to deliver comprehensive entrepreneurship development programs to students seeking real-world startup experience.'
  },
  {
    question: 'Do I need prior experience or technical skills?',
    answer: 'No prior experience required! Our curriculum is designed for beginners and experienced entrepreneurs alike. We teach everything from ideation to pitching, with mentors supporting you at every step.'
  },
  {
    question: 'What are the main benefits of the program?',
    answer: 'You\'ll gain exposure to real startup ecosystems, develop leadership and problem-solving skills, get mentorship from industry founders and investors, and build a portfolio of entrepreneurial projects.'
  },
  {
    question: 'Will we actually launch a startup?',
    answer: 'Yes! One of our key outcomes is delivering at least one real startup launch. You\'ll go through the full journey from ideation to pitching to investors and stakeholders.'
  },
  {
    question: 'How does this benefit colleges and institutions?',
    answer: 'Institutions see enhanced student engagement, improved placement readiness, industry-aligned programs with minimal infrastructure burden, and recognition as an innovation-driven campus.'
  },
  {
    question: 'What support does NxtGen Innovators provide to colleges?',
    answer: 'We design and deliver all programs, provide expert speakers and mentors, supply mentorship and content, and even deliver a real startup launch. Your college simply provides venue and student facilitation.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground">
          Get answers to common questions about our program
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded hover:border-primary transition-colors duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-bold text-foreground text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
