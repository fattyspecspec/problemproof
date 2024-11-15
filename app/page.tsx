export default function Home() {
  return (
    <>
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-bold text-xl">ProblemProof</div>
          <div className="flex gap-4">
            <div className="cursor-pointer">How it Works</div>
            <div className="cursor-pointer">Pricing</div>
            <div className="cursor-pointer">Login</div>
          </div>
        </div>
      </div>
    </nav>

    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ProblemProof
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Validate your startup idea before building
          </p>
          <div className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-block hover:bg-blue-700 cursor-pointer">
            Start Validating
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Test Your Idea</h3>
            <p className="text-gray-600">Get real feedback before investing time and money</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Find Domain Experts</h3>
            <p className="text-gray-600">Connect with industry experts who understand your space</p>
          </div>
          <div className="p-6 border rounded-lg">
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
  )
}
