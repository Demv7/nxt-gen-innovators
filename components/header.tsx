'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground tracking-tight">NxtGen Innovators</span>
              <span className="text-xs text-primary font-medium italic">Build . Break . Build Again</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">
              Our Programs
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#curriculum" className="text-foreground hover:text-primary transition-colors">
              Curriculum
            </a>
            <a href="#mentors" className="text-foreground hover:text-primary transition-colors">
              Mentors
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="/apply.html" className="bg-primary text-primary-foreground px-6 py-2 font-semibold rounded hover:opacity-90 transition-opacity flex items-center gap-2">
              Apply now
              <span>→</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">
              Our Programs
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#curriculum" className="text-foreground hover:text-primary transition-colors">
              Curriculum
            </a>
            <a href="#mentors" className="text-foreground hover:text-primary transition-colors">
              Mentors
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="/apply.html" className="bg-primary text-primary-foreground px-6 py-2 font-semibold rounded hover:opacity-90 transition-opacity w-full flex items-center justify-center gap-2">
              Apply now
              <span>→</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
