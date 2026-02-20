export default function Home() {
  // Force deployment - updated at 2026-02-20
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-pink-500/20 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative flex min-h-screen items-center justify-center px-4">
        {/* Trading card-style container */}
        <div className="relative w-full max-w-lg">
          {/* Card border glow */}
          <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-amber-400/60 via-purple-400/40 to-pink-400/60 opacity-80 blur-[1px]" />
          {/* Card */}
          <div className="relative rounded-[20px] border-2 border-amber-400/50 bg-slate-900/90 p-10 shadow-2xl shadow-black/40 backdrop-blur-sm md:p-14">
            {/* Inner card frame */}
            <div className="absolute inset-3 rounded-[14px] border border-white/10 pointer-events-none" aria-hidden />
            <div className="relative text-center">
              {/* Glow behind title */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-48 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl" />

              {/* Main Title */}
              <h1 className="relative mb-2 text-5xl font-bold text-white drop-shadow-lg md:text-7xl">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Legendary
                </span>{' '}
                <span className="text-white">Pulls</span>
              </h1>
              <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <p className="mb-10 text-xl font-semibold tracking-wide text-white/95 md:text-2xl">
                Parimal Patel
              </p>

              {/* Under Construction Message */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 rounded-full border-2 border-yellow-400/50 bg-gradient-to-r from-yellow-500/25 to-amber-500/25 px-7 py-3.5 shadow-lg shadow-yellow-500/20">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                  <span className="text-lg font-semibold text-yellow-100">
                    Under Construction
                  </span>
                </div>
              </div>

              {/* Accent line */}
              <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

              {/* Coming Soon - more punch */}
              <div className="inline-block rounded-lg border border-white/20 bg-white/5 px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Coming Soon
                </span>
              </div>

              {/* Decorative dots */}
              <div className="mt-12 flex justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-2 w-2 animate-pulse rounded-full bg-purple-400/60"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
