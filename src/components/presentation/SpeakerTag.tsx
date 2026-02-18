interface SpeakerTagProps {
  speaker: 'DIOGO' | 'MARCELO' | 'MARCELO + DIOGO';
}

export const SpeakerTag = ({ speaker }: SpeakerTagProps) => (
  <div className="absolute top-8 left-10 z-10">
    <span
      className="text-xs font-bold tracking-[0.25em] uppercase gradient-text-muted"
      style={{ fontSize: '11px', letterSpacing: '0.2em' }}
    >
      {speaker}
    </span>
  </div>
);
