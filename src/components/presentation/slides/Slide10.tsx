import { SolutionSlide } from './SolutionSlide';

const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <defs><linearGradient id="s3i" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7B2FFF"/><stop offset="100%" stopColor="#C026D3"/></linearGradient></defs>
    <path d="M12 5a7 7 0 017 7v9h-7a7 7 0 010-14V5z" stroke="url(#s3i)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 12a7 7 0 01-7 7" stroke="url(#s3i)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="2" stroke="url(#s3i)" strokeWidth="1.5"/>
    <circle cx="24" cy="14" r="2" stroke="url(#s3i)" strokeWidth="1.5"/>
    <path d="M16 21v4M13 25h6" stroke="url(#s3i)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const Slide10 = () => (
  <SolutionSlide
    number="03"
    speaker="MARCELO"
    icon={<BrainIcon />}
    title="RAG Agent Interno"
    problema="Cada vez que muda a recepcionista, perde-se todo o conhecimento da empresa. O CRM nunca é consultado."
    oQueFaz="Agente com todo o conhecimento da empresa integrado. Consulta o CRM em tempo real. Responde a qualquer questão interna."
    resultado="O conhecimento da empresa nunca se perde. Onboarding de novos colaboradores 10x mais rápido."
    price="€ — — —"
  />
);
