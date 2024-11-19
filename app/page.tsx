// page.tsx
import { Metadata } from 'next'
import WaitlistForm from './components/waitlistForm'

export const metadata: Metadata = {
  title: 'ProblemProof - Turn uncertainty into evidence',
  description: 'Validate startup ideas before building. Join the waitlist for early access.',
}

export default function Home() {
  return (
    <main>
      {/* Hero Section with Terminal-style interface */}
      <div className="gradient-animate relative overflow-hidden text-white min-h-screen">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="terminal-window mb-8 mx-auto max-w-3xl text-left">
              <span className="text-green-400">$ </span>
              <span className="typing-text">problemproof validate startup-idea</span>
              <div className="mt-2 text-gray-300">
                Running validation sequence...
                <br/>Found: 89% of startups fail due to unproven problems
                <br/>Solution: Start proving, stop assuming
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Problem<span className="text-blue-400">Proof</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
            Because &ldquo;just build it&rdquo; is the most expensive way to validate.
            </p>
            
            {/* Waitlist Form Component */}
            <WaitlistForm />
            
            <p className="text-gray-400 mt-4 font-light">
              Currently accepting YC, Techstars, and select startup founders
            </p>
          </div>
        </div>
      </div>

      {/* Rest of your sections */}
      {/* ... */}
    </main>
  )
}