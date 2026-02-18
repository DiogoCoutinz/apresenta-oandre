interface PlaceholderBoxProps {
  label: string;
  className?: string;
}

export const PlaceholderBox = ({ label, className = '' }: PlaceholderBoxProps) => (
  <div className={`placeholder-box flex items-center justify-center ${className}`}>
    <span className="text-xs text-center" style={{ color: 'rgba(26,111,255,0.5)', fontSize: '11px', letterSpacing: '0.1em' }}>
      [ {label} ]
    </span>
  </div>
);
