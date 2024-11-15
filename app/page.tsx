export default function Home() {
  return (
    <>
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-bold text-xl">ProblemProof</div>
          <div className="flex gap-4">
            <div className="cursor-pointer hover:text-blue-600 transition-colors">How it Works</div>
            <div className="cursor-pointer hover:text-blue-600 transition-colors">Pricing</div>
            <div className="cursor-pointer hover:text-blue-600 transition-colors">Login</div>
          </div>
        </div>
      </div>
    </nav>

    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ProblemProof
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Validate your startup idea before building
          </p>
          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">No credit card required</p>
          </div>

          <div className="flex justify-center items-center gap-8 text-gray-500 text-sm">
            <div>
              <div className="font-bold text-2xl text-gray-900">1,000+</div>
              <div>Ideas Validated</div>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div>
              <div className="font-bold text-2xl text-gray-900">5,000+</div>
              <div>Domain Experts</div>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div>
              <div className="font-bold text-2xl text-gray-900">50,000+</div>
              <div>Users Reached</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Test Your Idea</h3>
            <p className="text-gray-600">Get real feedback before investing time and money</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Find Domain Experts</h3>
            <p className="text-gray-600">Connect with industry experts who understand your space</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Prove Demand</h3>
            <p className="text-gray-600">Build a waitlist of interested users</p>
          </div>
        </div>
      </div>
    </main>

    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Features</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">FAQ</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="hover:text-blue-600 cursor-pointer transition-colors">About</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Blog</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Careers</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Documentation</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Support</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Terms</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="hover:text-blue-600 cursor-pointer transition-colors">Twitter</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">LinkedIn</div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors">GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
