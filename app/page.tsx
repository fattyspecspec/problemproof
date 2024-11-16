export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">ProblemProof</h1>
            <p className="text-xl text-gray-600 mb-8">Validate your startup idea before building</p>
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
          </div>

          {/* Statistics Section */}
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

          {/* Features Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Test Your Idea</h3>
              <p className="text-gray-600">Get real feedback before investing time and money</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Find Domain Experts</h3>
              <p className="text-gray-600">Connect with industry experts who understand your space</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Prove Demand</h3>
              <p className="text-gray-600">Build a waitlist of interested users</p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-16">How ProblemProof Works</h2>
            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <div className="w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Describe Your Idea</h3>
                  <p className="text-gray-600">
                    Tell us about your startup idea and what problem you&apos;re trying to solve.
                  </p>
                </div>
                <div className="w-1/2 bg-gray-100 h-64 rounded-lg"></div>
              </div>
              <div className="flex items-center gap-8 flex-row-reverse">
                <div className="w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Connect with Experts</h3>
                  <p className="text-gray-600">
                    We&apos;ll match you with domain experts who understand your industry.
                  </p>
                </div>
                <div className="w-1/2 bg-gray-100 h-64 rounded-lg"></div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Validate with Users</h3>
                  <p className="text-gray-600">
                    Build a waitlist of potential users and get real feedback on your solution.
                  </p>
                </div>
                <div className="w-1/2 bg-gray-100 h-64 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-16">What Founders Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-gray-600">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;
                </p>
              </div>
              <div className="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-gray-600">
                  &quot;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.&quot;
                </p>
              </div>
              <div className="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
                <p className="text-gray-600">
                  &quot;Duis aute irure dolor in reprehenderit in voluptate velit esse.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Features</div>
                <div>Pricing</div>
                <div>FAQ</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Documentation</div>
                <div>Support</div>
                <div>Terms</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>GitHub</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}



