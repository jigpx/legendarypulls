export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Legendary
            </span>
            <br />
            <span className="text-white">
              Pulls
            </span>
          </h1>
          
          {/* Under Construction Message */}
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-yellow-200 font-medium text-lg">
                Under Construction
              </span>
            </div>
            <p className="text-slate-300 text-xl max-w-md mx-auto leading-relaxed">
              We're working hard to bring you something amazing. Stay tuned for legendary pull requests!
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="text-slate-400 text-sm font-medium tracking-wider uppercase">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
