import { SolutionSlide } from './SolutionSlide';

const DatabaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <defs><linearGradient id="s2i" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1A6FFF"/><stop offset="100%" stopColor="#C026D3"/></linearGradient></defs>
    <ellipse cx="16" cy="8" rx="10" ry="3.5" stroke="url(#s2i)" strokeWidth="1.5"/>
    <path d="M6 8v8c0 1.9 4.5 3.5 10 3.5S26 17.9 26 16V8" stroke="url(#s2i)" strokeWidth="1.5"/>
    <path d="M6 16v4c0 1.9 4.5 3.5 10 3.5S26 21.9 26 20v-4" stroke="url(#s2i)" strokeWidth="1.5"/>
    <path d="M22 17l3 3M25 17l-3 3" stroke="url(#s2i)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const Slide09 = () => (
  <SolutionSlide
    number="02"
    speaker="MARCELO"
    icon={<DatabaseIcon />}
    title="Agente de Reativação de Base de Dados"
    problema="Clínicas com centenas ou milhares de contactos antigos que nunca mais voltaram."
    oQueFaz="Envia campanhas personalizadas via WhatsApp com IA. Reativa pacientes inativos automaticamente."
    resultado="Receita gerada de uma base de dados que estava a dormir."
    price="€ — — —"
  />
);
