interface GradientIconProps {
  children: React.ReactNode;
  size?: number;
}

export const GradientIcon = ({ children, size = 48 }: GradientIconProps) => (
  <div
    className="flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A6FFF" />
          <stop offset="50%" stopColor="#7B2FFF" />
          <stop offset="100%" stopColor="#C026D3" />
        </linearGradient>
      </defs>
      <g stroke="url(#iconGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {children}
      </g>
    </svg>
  </div>
);
