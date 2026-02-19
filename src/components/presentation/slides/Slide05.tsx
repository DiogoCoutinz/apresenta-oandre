import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide05 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* Ambient glow */}
    <div
      className="absolute top-[15%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.08) 0%, transparent 60%)', filter: 'blur(80px)' }}
    />
    <div
      className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full p-14">

      {/* Tag */}
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3 pt-4">A União</p>

      {/* Headline */}
      <h1
        className="text-white font-black leading-[0.95] mb-4"
        style={{ fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '-0.03em' }}
      >
        Um jantar do André.<br />
        <span className="gradient-text">Tudo mudou.</span>
      </h1>

      {/* Story text */}
      <p
        className="text-white/60 font-light leading-relaxed max-w-2xl mb-6"
        style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}
      >
        Já nos conhecíamos das redes. Mesmo perfil, mesma ambição.
        Sentámo-nos e percebemos que nos complementávamos na perfeição.
      </p>

      {/* Photos row: Diogo + Marcelo + small dinner photo */}
      <div className="flex items-start gap-5 mb-6">
        {/* Diogo photo */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-28 h-28 rounded-full overflow-hidden"
            style={{
              border: '2px solid rgba(26,111,255,0.4)',
              boxShadow: '0 0 30px rgba(26,111,255,0.15)',
            }}
          >
            <img src="/fotohistoria/diogofoto.jpeg" alt="Diogo" className="w-full h-full object-cover" />
          </div>
          <p className="text-white/50 text-xs font-medium tracking-wider uppercase">Diogo</p>
        </div>

        {/* Flowzi logo connector */}
        <div className="flex flex-col items-center gap-1 pt-8">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, rgba(26,111,255,0.5), rgba(123,47,255,0.5))' }} />
          <div
            className="rounded-lg p-2"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(123,47,255,0.2)' }}
          >
            <img src={flowziLogo} alt="Flowzi" className="h-5 object-contain" />
          </div>
          <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, rgba(123,47,255,0.5), rgba(192,38,211,0.5))' }} />
        </div>

        {/* Marcelo photo */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-28 h-28 rounded-full overflow-hidden"
            style={{
              border: '2px solid rgba(192,38,211,0.4)',
              boxShadow: '0 0 30px rgba(192,38,211,0.15)',
            }}
          >
            <img src="/fotomarcelo.png" alt="Marcelo" className="w-full h-full object-cover" />
          </div>
          <p className="text-white/50 text-xs font-medium tracking-wider uppercase">Marcelo</p>
        </div>

        {/* Small dinner photo */}
        <div className="ml-auto">
          <div
            className="w-40 h-28 rounded-lg overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <img src="/fotojantar.png" alt="Jantar do André" className="w-full h-full object-cover" />
          </div>
          <p className="text-white/25 text-[9px] mt-1 text-center">Jantar do André</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom cards — skills */}
      <div className="flex gap-5">
        {/* Diogo card */}
        <div
          className="flex-1 rounded-2xl p-5 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(26,111,255,0.2)',
            boxShadow: '0 0 40px rgba(26,111,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.2), rgba(123,47,255,0.2))',
                border: '1.5px solid rgba(26,111,255,0.4)',
              }}
            >
              <span className="gradient-text font-black text-xs">DC</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Diogo</p>
              <p className="text-white/30 text-[10px]">Tech & Produto</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Automatização', 'IA', 'N8N', 'Produto'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[9px] font-medium text-white/60"
                style={{ background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Marcelo card */}
        <div
          className="flex-1 rounded-2xl p-5 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(192,38,211,0.2)',
            boxShadow: '0 0 40px rgba(192,38,211,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(123,47,255,0.2), rgba(192,38,211,0.2))',
                border: '1.5px solid rgba(192,38,211,0.4)',
              }}
            >
              <span className="gradient-text font-black text-xs">MS</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Marcelo</p>
              <p className="text-white/30 text-[10px]">Comercial & Estratégia</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Vendas', 'Negócios', 'Estratégia', 'Ads'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[9px] font-medium text-white/60"
                style={{ background: 'rgba(192,38,211,0.1)', border: '1px solid rgba(192,38,211,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
