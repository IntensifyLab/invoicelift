export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="120" rx="28" fill="rgba(46,29,9,0.94)" />
      <rect x="30" y="34" width="60" height="44" rx="6" stroke="#ffc684" strokeWidth="5" fill="rgba(255,198,132,0.1)" />
      <path d="M42 52 H78 M42 64 H72" stroke="#fff1b8" strokeWidth="4" strokeLinecap="round" />
      <path d="M62 76 L78 52 L92 62" stroke="url(#il)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="il" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffc684" />
          <stop offset="100%" stopColor="#fff1b8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
