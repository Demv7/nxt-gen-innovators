import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ValuePropositions } from '@/components/value-propositions'
import { Curriculum } from '@/components/curriculum'
import { Mentors } from '@/components/mentors'
import ParallaxCollage from '@/components/parallax-collage'
import { ProgramOptions } from '@/components/program-options'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ParallaxCollage />
      <Hero />
      <ValuePropositions />
      <Curriculum />
      <Mentors />
      <ProgramOptions />
      <FAQ />
      <Footer />
    </main>
  )
}
