import React from 'react';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

interface SolutionSlideProps {
  number: string;
  speaker: 'DIOGO' | 'MARCELO' | 'MARCELO + DIOGO';
  icon: React.ReactNode;
  title: string;
  problema: string;
  oQueFaz: string;
  resultado: string;
  price?: string;
  bottomCaption?: string;
}

export const SolutionSlide = ({
  number,
  speaker,
  icon,
  title,
  problema,
  oQueFaz,
  resultado,
  price = '€X.XXX',
  bottomCaption,
}: SolutionSlideProps) => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden p-12">
    <SpeakerTag speaker={speaker} />
    <FlowziWatermark />

    {/* Number + Icon + Title row */}
    <div className="flex items-start gap-6 pt-8 mb-10">
      <span
        className="gradient-text font-black leading-none"
        style={{ fontSize: 'clamp(56px, 7vw, 96px)', opacity: 0.9, lineHeight: 1 }}
      >
        {number}
      </span>
      <div className="flex flex-col justify-center pt-3">
        {icon}
        <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
          {title}
        </h1>
      </div>
    </div>

    {/* Three blocks */}
    <div className="flex-1 flex flex-col gap-0">
      {[
        { label: 'PROBLEMA', content: problema },
        { label: 'O QUE FAZ', content: oQueFaz },
        { label: 'RESULTADO', content: resultado },
      ].map((block, i) => (
        <div key={i}>
          <div className="flex items-start gap-5 py-5 pl-4 glow-border-left">
            <span
              className="text-white/25 font-black shrink-0"
              style={{ fontSize: '10px', letterSpacing: '0.25em', marginTop: '3px', minWidth: '80px' }}
            >
              {block.label}
            </span>
            <p className="text-white/80 font-light" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.6 }}>
              {block.content}
            </p>
          </div>
          {i < 2 && <div className="glow-line h-px opacity-30 ml-4" />}
        </div>
      ))}
    </div>

    {/* Price bottom right */}
    <div className="flex items-end justify-between mt-6">
      {bottomCaption ? (
        <p className="text-white/30 italic" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
          {bottomCaption}
        </p>
      ) : <div />}
      <span
        className="gradient-text font-black glow-metric"
        style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}
      >
        {price}
      </span>
    </div>
  </div>
);
