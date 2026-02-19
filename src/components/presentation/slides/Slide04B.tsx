import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide04B = ({ step = 0 }: { step?: number }) => (
  <div
    className="relative w-full h-full flex flex-col overflow-hidden"
    style={{ background: '#0B0F1A' }}
  >
    <style>{`
      @keyframes stamp-drop {
        0%   { transform: rotate(-10deg) scale(2.8); opacity: 0; }
        55%  { transform: rotate(-10deg) scale(0.9);  opacity: 1; }
        72%  { transform: rotate(-10deg) scale(1.05); }
        100% { transform: rotate(-10deg) scale(1);   opacity: 1; }
      }
      @keyframes scan-sweep {
        0%   { top: -2px; opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
      @keyframes stamp-pulse {
        0%,100% { box-shadow: 0 0 20px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.15); }
        50%      { box-shadow: 0 0 40px rgba(34,197,94,0.7), 0 0 100px rgba(34,197,94,0.25); }
      }
      @keyframes rise-fade {
        from { opacity: 0; transform: translateY(12px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes slide-left {
        from { opacity: 0; transform: translateX(-18px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes photo-in {
        from { opacity: 0; transform: scale(0.94); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes inset-in {
        from { opacity: 0; transform: translateY(10px) scale(0.9); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}</style>

    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    {/* Ambient */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: step >= 4
        ? 'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(34,197,94,0.05) 0%, transparent 70%)'
        : 'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(26,111,255,0.06) 0%, transparent 70%)',
      transition: 'background 1s ease',
    }} />

    <div className="relative z-10 flex flex-col h-full px-11 pt-14 pb-5">

      {/* ── Header ── */}
      <div className="flex-shrink-0 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded font-mono font-bold tracking-widest" style={{ fontSize: '7.5px', background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.35)', color: '#5599FF' }}>
            PRIMEIRO CLIENTE
          </span>
        </div>
        <h1 className="text-white font-black" style={{ fontSize: 'clamp(26px, 3.2vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Clínica de <span className="gradient-text">Fisioterapia</span>
        </h1>
      </div>

      {/* ── Body: 2-col ── */}
      <div className="flex-1 flex gap-5 min-h-0">

        {/* ── LEFT: Story ── */}
        <div className="flex flex-col gap-3" style={{ width: '38%', flexShrink: 0 }}>

          {/* Desafio */}
          <div
            className="rounded-2xl p-4"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              opacity: step >= 2 ? 1 : 0,
              animation: step >= 2 ? 'slide-left 0.55s cubic-bezier(0.34,1.2,0.64,1) forwards' : 'none',
            }}
          >
            <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: '7px', color: 'rgba(255,85,85,0.8)' }}>// O Desafio</p>
            {[
              'Clínica pequena — só 3 pessoas',
              'Sem tempo para responder pedidos',
              'Perdia marcações todos os dias',
            ].map((txt, i) => (
              <div key={i} className="flex items-start gap-2.5 mb-2" style={{ opacity: step >= 2 ? 1 : 0, transition: `opacity 0.35s ease ${0.1 + i * 0.08}s` }}>
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF5555', boxShadow: '0 0 5px rgba(255,85,85,0.8)' }} />
                <p className="text-white/70 font-medium leading-snug" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>{txt}</p>
              </div>
            ))}
          </div>

          {/* Solução */}
          <div
            className="rounded-2xl p-4"
            style={{
              background: 'rgba(26,111,255,0.04)',
              border: '1px solid rgba(26,111,255,0.14)',
              opacity: step >= 3 ? 1 : 0,
              animation: step >= 3 ? 'slide-left 0.55s cubic-bezier(0.34,1.2,0.64,1) forwards' : 'none',
            }}
          >
            <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: '7px', color: 'rgba(85,153,255,0.8)' }}>// A Solução</p>
            {[
              'Agente IA no WhatsApp',
              'Widget de marcação no site',
              'Respondeu 24/7 desde dia 1',
            ].map((txt, i) => (
              <div key={i} className="flex items-start gap-2.5 mb-2" style={{ opacity: step >= 3 ? 1 : 0, transition: `opacity 0.35s ease ${0.1 + i * 0.08}s` }}>
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#5599FF', boxShadow: '0 0 5px rgba(85,153,255,0.8)' }} />
                <p className="text-white/70 font-medium leading-snug" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>{txt}</p>
              </div>
            ))}
          </div>

          {/* Key insight — donos de negócio */}
          <div
            className="flex-1 rounded-2xl p-4 flex flex-col justify-center"
            style={{
              background: 'rgba(192,38,211,0.05)',
              border: '1px solid rgba(192,38,211,0.18)',
              opacity: step >= 4 ? 1 : 0,
              animation: step >= 4 ? 'rise-fade 0.5s ease forwards' : 'none',
            }}
          >
            <div className="text-2xl mb-2">🤝</div>
            <p className="text-white font-black leading-tight" style={{ fontSize: 'clamp(12px, 1.2vw, 17px)', letterSpacing: '-0.01em' }}>
              Donos de negócio<br />
              <span style={{ color: '#C026D3' }}>conhecem outros</span><br />
              donos de negócio.
            </p>
            <p className="text-white/40 font-medium mt-2" style={{ fontSize: '10px', lineHeight: 1.5 }}>
              O primeiro cliente abre<br />as portas para os seguintes.
            </p>
          </div>
        </div>

        {/* ── RIGHT: Photos ── */}
        <div className="flex-1 relative rounded-2xl overflow-hidden min-h-0">

          {/* Clinic photo — main */}
          <div
            className="absolute inset-0"
            style={{
              opacity: step >= 1 ? 1 : 0,
              animation: step >= 1 ? 'photo-in 0.75s cubic-bezier(0.34,1.1,0.64,1) forwards' : 'none',
            }}
          >
            <img
              src="/fotohistoriamarcelo/clinicafisio.jpg"
              alt="Clínica de Fisioterapia"
              className="w-full h-full object-cover"
            />
            {/* Scan line on reveal */}
            {step === 1 && (
              <div className="absolute left-0 right-0 pointer-events-none" style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.9), transparent)',
                animation: 'scan-sweep 1.3s ease-out forwards',
                zIndex: 10,
              }} />
            )}
            {/* Gradient */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(11,15,26,0.92) 0%, rgba(11,15,26,0.2) 50%, rgba(11,15,26,0.05) 100%)',
            }} />
            {/* Border */}
            <div className="absolute inset-0 rounded-2xl" style={{
              border: step >= 4 ? '1px solid rgba(34,197,94,0.45)' : '1px solid rgba(26,111,255,0.3)',
              transition: 'border-color 0.6s ease',
              pointerEvents: 'none',
            }} />
          </div>

          {/* n8n automation — inset bottom-left */}
          <div
            className="absolute rounded-xl overflow-hidden"
            style={{
              bottom: '52px', left: '14px',
              width: '42%', height: '36%',
              border: '1px solid rgba(192,38,211,0.45)',
              boxShadow: '0 0 30px rgba(192,38,211,0.2), 0 8px 32px rgba(0,0,0,0.7)',
              opacity: step >= 3 ? 1 : 0,
              animation: step >= 3 ? 'inset-in 0.5s cubic-bezier(0.34,1.2,0.64,1) forwards' : 'none',
              zIndex: 10,
            }}
          >
            <img
              src="/fotohistoriamarcelo/n8nautomacao.jpeg"
              alt="N8N Automação"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-2 left-2.5 right-2">
              <p className="font-bold uppercase tracking-widest" style={{ fontSize: '6.5px', color: 'rgba(192,38,211,0.85)', marginBottom: '1px' }}>// Automação entregue</p>
              <p className="text-white font-bold" style={{ fontSize: '10px' }}>N8N · WhatsApp · IA</p>
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10" style={{ opacity: step >= 1 ? 1 : 0, transition: 'opacity 0.5s ease 0.3s' }}>
            <div>
              <p className="text-white font-black" style={{ fontSize: '13px', letterSpacing: '-0.01em' }}>Clínica de Fisioterapia</p>
              <p className="font-mono" style={{ fontSize: '8px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>CLIENTE #001 · AMIGO DO MARCELO</p>
            </div>
            <div className="px-2 py-1 rounded-lg" style={{
              background: step >= 4 ? 'rgba(34,197,94,0.15)' : 'rgba(26,111,255,0.15)',
              border: step >= 4 ? '1px solid rgba(34,197,94,0.5)' : '1px solid rgba(26,111,255,0.4)',
              transition: 'all 0.5s ease',
            }}>
              <p className="font-black" style={{ fontSize: '8px', letterSpacing: '0.1em', color: step >= 4 ? '#22C55E' : '#5599FF', transition: 'color 0.5s ease' }}>
                {step >= 4 ? '✓ ATIVO' : 'IDENTIFICADO'}
              </p>
            </div>
          </div>

          {/* FECHADO stamp */}
          {step >= 4 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 20 }}>
              <div style={{
                padding: '14px 28px',
                borderRadius: '12px',
                border: '3px solid rgba(34,197,94,0.85)',
                background: 'rgba(11,15,26,0.55)',
                backdropFilter: 'blur(3px)',
                transform: 'rotate(-10deg)',
                animation: 'stamp-drop 0.4s cubic-bezier(0.34,1.1,0.64,1) forwards, stamp-pulse 2s ease-in-out 0.5s infinite',
              }}>
                <p className="font-black uppercase text-green-400 text-center" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '0.12em', lineHeight: 1 }}>
                  FECHADO
                </p>
                <p className="text-center font-bold uppercase" style={{ fontSize: '7px', letterSpacing: '0.2em', color: 'rgba(34,197,94,0.65)', marginTop: '2px' }}>
                  Confiança desbloqueada
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex-shrink-0 border-t pt-4 mt-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <p className="text-white font-black" style={{ fontSize: 'clamp(15px, 1.9vw, 26px)', letterSpacing: '-0.02em' }}>
          O primeiro cliente não precisa de ser perfeito.{' '}
          <span className="gradient-text">Precisa de ser real.</span>
        </p>
      </div>
    </div>
  </div>
);
