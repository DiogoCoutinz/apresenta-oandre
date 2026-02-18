import { SolutionSlide } from './SolutionSlide';

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
  <SolutionSlide
    number="04"
    speaker="DIOGO"
    icon={<InvoiceIcon />}
    title="Automação de Faturas com IA"
    problema="Empresas a processar faturas manualmente. Horas perdidas. Erros humanos. Pastas desorganizadas."
    oQueFaz="Tiras foto à fatura no telemóvel. A IA lê, processa e organiza automaticamente nas pastas certas. Zero intervenção humana."
    resultado="Horas de trabalho manual eliminadas por semana. Processo auditável e sem erros."
    price="€ — — —"
    bottomCaption="Vamos mostrar isto ao vivo agora →"
  />
);
