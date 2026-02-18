import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const AvatarGlow = ({ id, label }: { id: string; label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative">
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-40"
        style={{ background: 'radial-gradient(circle, #1A6FFF 0%, #7B2FFF 50%, transparent 70%)', transform: 'scale(1.8)' }}
      />
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(26,111,255,0.15), rgba(123,47,255,0.15))',
          border: '1.5px solid rgba(26,111,255,0.4)',
          boxShadow: '0 0 30px rgba(26,111,255,0.2), inset 0 0 20px rgba(26,111,255,0.05)',
        }}
      >
        <span className="gradient-text font-black" style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
          {id}
        </span>
      </div>
    </div>
    <p className="gradient-text-muted font-bold tracking-[0.2em] text-sm uppercase">{label}</p>
  </div>
);

export const Slide05 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden p-16">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* Ambient glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
      style={{ background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)' }} />

    {/* TOP: Headline */}
    <div className="pt-6 mb-auto z-10">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">A Uniao</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.03em' }}>
        Mesmo perfil. Mesma ambicao.{' '}
        <span className="gradient-text">Complementares.</span>
      </h1>
    </div>

    {/* CENTER: Three columns */}
    <div className="flex items-center justify-center gap-10 w-full max-w-4xl mx-auto z-10">
      {/* Diogo */}
      <div className="flex flex-col items-center gap-4 flex-1">
        <AvatarGlow id="DC" label="Diogo" />
        <div className="text-center mt-1">
          <p className="text-white font-bold text-lg">Constroi</p>
          <p className="text-white/30 text-xs mt-1 leading-relaxed">Automatizacoes, IA, N8N</p>
        </div>
      </div>

      {/* Center: logo */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 opacity-40">
          <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF)' }} />
          <span className="text-white/30 text-xs font-mono">+</span>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full opacity-30 blur-xl"
            style={{ background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)', transform: 'scale(2.5)' }} />
          <div className="relative bg-white/5 rounded-xl p-5 glow-border">
            <img src={flowziLogo} alt="Flowzi" className="h-8 object-contain" />
          </div>
        </div>
        <div className="flex items-center gap-3 opacity-40">
          <span className="text-white/30 text-xs font-mono">=</span>
          <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #7B2FFF, #C026D3)' }} />
        </div>
      </div>

      {/* Marcelo */}
      <div className="flex flex-col items-center gap-4 flex-1">
        <AvatarGlow id="MS" label="Marcelo" />
        <div className="text-center mt-1">
          <p className="text-white font-bold text-lg">Vende</p>
          <p className="text-white/30 text-xs mt-1 leading-relaxed">Comercial, estrategia, negocios</p>
        </div>
      </div>
    </div>

    {/* BOTTOM: caption */}
    <div className="mt-auto pt-6 z-10">
      <p className="text-white/30 text-xs text-center">
        Ja nos conheciamos das redes. Um jantar do Andre. Tudo mudou.
      </p>
    </div>
  </div>
);
