import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const rules = [
  { left: 'Parceiro', right: 'Fornecedor' },
  { left: 'ROI', right: 'Preço' },
  { left: 'Confiança', right: 'Pitch' },
];

export const Slide13B = () => (
  <div className="relative w-full h-full slide-bg flex flex-col items-center justify-center overflow-hidden p-16">
    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(123,47,255,0.12) 0%, transparent 65%)' }}
      />
    </div>

    {/* Quote mark */}
    <div
      className="gradient-text font-black leading-none mb-2 select-none"
      style={{ fontSize: 'clamp(72px, 10vw, 120px)', opacity: 0.18, lineHeight: 0.8 }}
    >
      "
    </div>

    {/* Main quote */}
    <blockquote
      className="text-center text-white font-black leading-tight max-w-4xl"
      style={{ fontSize: 'clamp(22px, 3vw, 42px)', letterSpacing: '-0.025em' }}
    >
      Não vendes um serviço.{' '}
      <span className="gradient-text">
        Vendes o que o cliente ganha<br />quando para de perder.
      </span>
    </blockquote>

    {/* Divider */}
    <div
      className="my-10 glow-line"
      style={{ width: '120px', height: '1px', opacity: 0.4 }}
    />

    {/* 3 mini-rules */}
    <div className="flex items-center gap-6">
      {rules.map((r, i) => (
        <div key={i} className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <span
              className="text-white font-bold"
              style={{ fontSize: 'clamp(14px, 1.6vw, 20px)' }}
            >
              {r.left}
            </span>
            <span
              className="gradient-text font-black"
              style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}
            >
              &gt;
            </span>
            <span
              className="text-white/35 font-light"
              style={{ fontSize: 'clamp(14px, 1.6vw, 20px)' }}
            >
              {r.right}
            </span>
          </div>
          {i < rules.length - 1 && (
            <div
              className="w-px h-5 shrink-0"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);
