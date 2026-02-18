import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

interface SolutionCard {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

const ChatIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <defs>
      <linearGradient id="i1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A6FFF" /><stop offset="100%" stopColor="#7B2FFF" />
      </linearGradient>
    </defs>
    <path d="M6 8a3 3 0 013-3h18a3 3 0 013 3v14a3 3 0 01-3 3H12l-6 4V8z" stroke="url(#i1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="15" r="1.5" fill="url(#i1)"/>
    <circle cx="18" cy="15" r="1.5" fill="url(#i1)"/>
    <circle cx="24" cy="15" r="1.5" fill="url(#i1)"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <defs>
      <linearGradient id="i2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A6FFF" /><stop offset="100%" stopColor="#C026D3" />
      </linearGradient>
    </defs>
    <ellipse cx="18" cy="9" rx="12" ry="4" stroke="url(#i2)" strokeWidth="1.5"/>
    <path d="M6 9v9c0 2.2 5.4 4 12 4s12-1.8 12-4V9" stroke="url(#i2)" strokeWidth="1.5"/>
    <path d="M6 18v4.5c0 2.2 5.4 4 12 4s12-1.8 12-4V18" stroke="url(#i2)" strokeWidth="1.5"/>
    <path d="M24 19l4 4" stroke="url(#i2)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <defs>
      <linearGradient id="i3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7B2FFF" /><stop offset="100%" stopColor="#C026D3" />
      </linearGradient>
    </defs>
    <path d="M14 6a8 8 0 018 8v10h-8a8 8 0 010-16v-2z" stroke="url(#i3)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 14a8 8 0 01-8 8" stroke="url(#i3)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="16" r="2" stroke="url(#i3)" strokeWidth="1.5"/>
    <circle cx="26" cy="16" r="2" stroke="url(#i3)" strokeWidth="1.5"/>
    <path d="M18 24v4M14 28h8" stroke="url(#i3)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const InvoiceIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <defs>
      <linearGradient id="i4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A6FFF" /><stop offset="100%" stopColor="#C026D3" />
      </linearGradient>
    </defs>
    <rect x="7" y="4" width="18" height="24" rx="2" stroke="url(#i4)" strokeWidth="1.5"/>
    <path d="M11 10h10M11 15h10M11 20h6" stroke="url(#i4)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 24l5-5M29 24l-5-5" stroke="url(#i4)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="27" cy="27" r="4" stroke="url(#i4)" strokeWidth="1.5"/>
    <path d="M27 25v4M25 27h4" stroke="url(#i4)" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const cards: SolutionCard[] = [
  { icon: <ChatIcon />, name: 'Agente de Atendimento 24/7', desc: 'Responde, qualifica e agenda automaticamente.' },
  { icon: <DatabaseIcon />, name: 'Agente de Reativação de Base de Dados', desc: 'Reativa contactos inativos via WhatsApp com IA.' },
  { icon: <BrainIcon />, name: 'RAG Agent Interno', desc: 'Conhecimento da empresa + CRM em tempo real.' },
  { icon: <InvoiceIcon />, name: 'Automação de Faturas com IA', desc: 'Foto → processamento automático → zero erros.' },
];

export const Slide07 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col items-center justify-center overflow-hidden p-12">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    <div className="text-center mb-10">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">O Portfólio</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}>
        As <span className="gradient-text">4 Soluções</span>
      </h1>
    </div>

    {/* 2x2 grid */}
    <div className="grid grid-cols-2 gap-5 w-full max-w-3xl">
      {cards.map((card, i) => (
        <div key={i} className="card-solution p-7 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            {card.icon}
            <span className="gradient-text font-black text-lg">€ — — —</span>
          </div>
          <div>
            <h3 className="text-white font-bold mb-1" style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}>
              {card.name}
            </h3>
            <p className="text-white/40" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    <p className="text-white/40 mt-8 text-center" style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}>
      4 soluções. Todas vendidas. Todas replicáveis.
    </p>
  </div>
);
