import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide12 = () => (
  <div className="relative w-full h-full slide-bg flex overflow-hidden">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Ambient glow */}
    <div
      className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
    />

    {/* Left: content */}
    <div className="flex-1 flex flex-col justify-center p-14 z-10">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">Demo ao Vivo</p>

      <h1 className="text-white font-black mb-3" style={{ fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
        Solução de Faturas
      </h1>

      <p className="text-white/50 font-light leading-relaxed mb-8 max-w-md" style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}>
        Vai buscar as tuas faturas ao email e por upload. Organiza tudo em Sheets e Drives. Mostra os gastos mensais organizados.
      </p>

      {/* What it does — minimal bullets */}
      <div className="flex flex-col gap-3 mb-10 max-w-md">
        {[
          { icon: '📧', text: 'Extração automática do email' },
          { icon: '📁', text: 'Upload manual de faturas' },
          { icon: '📊', text: 'Sheets & Drive organizados' },
          { icon: '💰', text: 'Dashboard de gastos mensais' },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-3">
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <p className="text-white/60 font-light" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Pack info */}
      <div
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl max-w-max"
        style={{
          background: 'rgba(26,111,255,0.06)',
          border: '1px solid rgba(26,111,255,0.15)',
        }}
      >
        <p className="text-white/40 text-sm">Parte do pack vendido por</p>
        <p className="font-black" style={{
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #1A6FFF, #7B2FFF, #C026D3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          4.000&euro;
        </p>
      </div>
    </div>

    {/* Right: payment screenshot */}
    <div className="w-[35%] flex items-center justify-center p-8 z-10">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(26,111,255,0.2)',
          boxShadow: '0 8px 60px rgba(0,0,0,0.5), 0 0 40px rgba(26,111,255,0.06)',
          maxHeight: '80vh',
        }}
      >
        <img
          src="/fotohistoria/4000.png"
          alt="Transferência — +4000€"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
);
