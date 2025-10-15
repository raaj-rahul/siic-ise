interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(200, 85%, 55%)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(160, 75%, 50%)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Outer circle representing global impact */}
      <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="3" fill="none" opacity="0.3" />
      
      {/* Three interconnected circles representing People, Planet, Profit */}
      <circle cx="50" cy="30" r="12" fill="url(#logoGradient)" opacity="0.8" />
      <circle cx="35" cy="55" r="12" fill="url(#logoGradient)" opacity="0.8" />
      <circle cx="65" cy="55" r="12" fill="url(#logoGradient)" opacity="0.8" />
      
      {/* Connecting lines showing integration */}
      <line x1="50" y1="30" x2="35" y2="55" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="30" x2="65" y2="55" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="35" y1="55" x2="65" y2="55" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      
      {/* Upward arrow in center representing growth and positive impact */}
      <path
        d="M 50 65 L 50 45 M 45 50 L 50 45 L 55 50"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function LogoIcon({ className = "", size = 24 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.7 }} />
        </linearGradient>
      </defs>
      
      <circle cx="50" cy="30" r="12" fill="url(#logoIconGradient)" />
      <circle cx="35" cy="55" r="12" fill="url(#logoIconGradient)" />
      <circle cx="65" cy="55" r="12" fill="url(#logoIconGradient)" />
      
      <line x1="50" y1="30" x2="35" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="50" y1="30" x2="65" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="35" y1="55" x2="65" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      
      <path
        d="M 50 65 L 50 45 M 45 50 L 50 45 L 55 50"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
