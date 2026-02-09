'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 tracking-tight text-balance">
          For Young Minds (@ schools & colleges)
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-4 leading-relaxed">
          Are you craving to make impact in real world? Do you want to unlock your full potential? Academic learning alone won't be enough. Mindset with real world problem solving skills will make you future ready.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mb-4 leading-relaxed">
          Transform your Ideas into Reality!
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mb-4 leading-relaxed">
          Join Us from Anywhere (Online – Join from Anywhere & Offline @ Ahmedabad office)
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mb-4 leading-relaxed">
          Become a startup founder before college. Real world learning through Real world projects/start-ups! Students transforming ideas into impact through real-world startup experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/apply.html" className="bg-primary text-primary-foreground px-8 py-4 font-semibold rounded hover:opacity-90 transition-opacity text-lg inline-block text-center">
            Apply Now
          </a>
          <button className="border-2 border-primary text-primary px-8 py-4 font-semibold rounded hover:bg-primary hover:text-primary-foreground transition-colors text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
