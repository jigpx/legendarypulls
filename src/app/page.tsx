export default function Home() {
  // Force deployment - updated at 2026-02-20
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="mb-8 text-6xl font-bold font-sans text-white md:text-8xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Legendary
            </span>
            <br />
            <span className="text-white">Pulls</span>
          </h1>

          {/* Under Construction Message */}
          <div className="mb-12">
            <div className="mb-4 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/20 px-6 py-3">
              <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-yellow-400"></div>
              <span className="text-lg font-semibold font-sans text-yellow-200">
                Under Construction
              </span>
            </div>
            <p className="mx-auto max-w-md text-xl leading-relaxed font-semibold font-sans text-slate-300">
              We're working hard to bring you something amazing. Stay tuned for
              legendary pull requests! TEST
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="text-sm font-semibold font-sans uppercase tracking-wider text-slate-400">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  )
}
