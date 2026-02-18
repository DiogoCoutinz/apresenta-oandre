import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const Silhouette = ({ side }: { side: 'left' | 'right' }) => (
  <svg
    width="120"
    height="160"
    viewBox="0 0 120 160"
    fill="none"
    style={{ opacity: 0.15 }}
  >
    <defs>
      <linearGradient id={`silGrad${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A6FFF" />
        <stop offset="100%" stopColor="#7B2FFF" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="35" rx="28" ry="30" fill={`url(#silGrad${side})`} />
    <path d="M10 160 Q10 90 60 90 Q110 90 110 160Z" fill={`url(#silGrad${side})`} />
  </svg>
);

export const Slide05 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col items-center justify-center overflow-hidden p-12">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 pointer-events-none"
      style={{ background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)' }} />

    <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center">A União</p>

    {/* Three columns: Diogo | Logo | Marcelo */}
    <div className="flex items-center justify-center gap-8 w-full max-w-3xl">
      {/* Diogo */}
      <div className="flex flex-col items-center gap-4 flex-1">
        <Silhouette side="left" />
        <p className="gradient-text-muted font-bold tracking-[0.2em] text-sm uppercase">Diogo</p>
        <div className="text-center">
          <p className="text-white/60 text-sm mb-1">Habilidade</p>
          <p className="text-white font-bold text-lg">Constrói</p>
        </div>
        <p className="text-white/30 text-xs text-center">Automatizações, IA, N8N, desenvolvimento técnico</p>
      </div>

      {/* Center connection */}
      <div className="flex flex-col items-center gap-4">
        {/* Connection arrows */}
        <div className="flex items-center gap-2 opacity-40">
          <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF)' }} />
          <span className="text-white/40 text-xs">→</span>
        </div>

        {/* Flowzi logo glowing */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full opacity-30 blur-lg"
            style={{ background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)', transform: 'scale(2)' }} />
          <div className="relative bg-white/5 rounded-xl p-5 glow-border">
            <img
              src={flowziLogo}
              alt="Flowzi"
              className="h-8 object-contain"
              style={{ filter: 'invert(1)' }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 opacity-40">
          <span className="text-white/40 text-xs">←</span>
          <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #7B2FFF, #C026D3)' }} />
        </div>
      </div>

      {/* Marcelo */}
      <div className="flex flex-col items-center gap-4 flex-1">
        <Silhouette side="right" />
        <p className="gradient-text-muted font-bold tracking-[0.2em] text-sm uppercase">Marcelo</p>
        <div className="text-center">
          <p className="text-white/60 text-sm mb-1">Habilidade</p>
          <p className="text-white font-bold text-lg">Vende</p>
        </div>
        <p className="text-white/30 text-xs text-center">Comercial, cliente, estratégia, fechar negócios</p>
      </div>
    </div>

    {/* Caption */}
    <p className="text-white/30 text-xs text-center mt-8 mb-4">
      Já nos conhecíamos das redes. Um jantar do André. Tudo mudou.
    </p>

    {/* Bottom statement */}
    <div className="mt-4 text-center">
      <p className="text-white font-black" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
        Mesmo perfil. Mesma ambição. <span className="gradient-text">Complementares.</span>
      </p>
    </div>
  </div>
);
