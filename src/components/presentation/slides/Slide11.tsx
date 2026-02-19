import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const InvoiceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <defs><linearGradient id="s4i" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1A6FFF"/><stop offset="100%" stopColor="#C026D3"/></linearGradient></defs>
    <rect x="5" y="3" width="16" height="22" rx="2" stroke="url(#s4i)" strokeWidth="1.5"/>
    <path d="M9 9h8M9 13h8M9 17h5" stroke="url(#s4i)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="5" stroke="url(#s4i)" strokeWidth="1.5"/>
    <path d="M24 21.5v5M21.5 24h5" stroke="url(#s4i)" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const Slide11 = () => (
  <div className="relative w-full h-full slide-bg flex overflow-hidden">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Left content */}
    <div className="flex-1 flex flex-col p-12">
      {/* Number + Icon + Title */}
      <div className="flex items-start gap-6 pt-8 mb-8">
        <span
          className="gradient-text font-black leading-none"
          style={{ fontSize: 'clamp(56px, 7vw, 96px)', opacity: 0.9, lineHeight: 1 }}
        >
          04
        </span>
        <div className="flex flex-col justify-center pt-3">
          <InvoiceIcon />
          <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>
            Automação de Faturas com IA
          </h1>
        </div>
      </div>

      {/* Three blocks */}
      <div className="flex-1 flex flex-col gap-0">
        {[
          { label: 'PROBLEMA', content: 'Empresas a processar faturas manualmente. Horas perdidas. Erros humanos. Pastas desorganizadas.' },
          { label: 'O QUE FAZ', content: 'Tiras foto à fatura no telemóvel. A IA lê, processa e organiza automaticamente nas pastas certas. Zero intervenção humana.' },
          { label: 'RESULTADO', content: 'Horas de trabalho manual eliminadas por semana. Processo auditável e sem erros.' },
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

      {/* Tech badge + caption */}
      <div className="flex items-center gap-3 mt-4">
        <span
          className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white/70"
          style={{ background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.2)' }}
        >
          100% N8N + Frontend
        </span>
        <p className="text-white/30 italic" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
          Vamos mostrar isto ao vivo agora →
        </p>
      </div>
    </div>

    {/* Right: N8N workflow screenshot */}
    <div className="w-[45%] flex items-center p-8">
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(26,111,255,0.25)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(26,111,255,0.08)',
        }}
      >
        <img
          src="/n8nfatura.png"
          alt="N8N Workflow — Automação de Faturas"
          className="w-full h-auto object-contain"
          style={{ background: '#1a1a2e' }}
        />
        <div
          className="px-4 py-2"
          style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.95), rgba(11,15,26,0.7))' }}
        >
          <p className="text-white/60 font-medium" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>
            Solução 100% desenvolvida em N8N com frontend para complementar
          </p>
        </div>
      </div>
    </div>
  </div>
);
