'use client'

import React from "react"

import { Mail } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Join the Community</h3>
            <p className="mb-4 opacity-90">
              Get updates on bootcamps, mentor sessions, and startup launches
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l bg-background text-foreground placeholder-muted-foreground"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-r font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-sm text-green-300">Thank you for subscribing!</p>
              )}
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#programs" className="hover:opacity-100 transition-opacity">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:opacity-100 transition-opacity">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#mentors" className="hover:opacity-100 transition-opacity">
                  Our Mentors
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 opacity-90">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@nxtgeninnovators.com" className="hover:opacity-100 transition-opacity">
                  info@nxtgeninnovators.com
                </a>
              </li>
              <li>
                <a href="https://www.nxtgeninnovators.com" className="hover:opacity-100 transition-opacity">
                  www.nxtgeninnovators.com
                </a>
              </li>
              <li>
                Specialized in Student Entrepreneurship Programs
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2026 NxtGenInnovators. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
