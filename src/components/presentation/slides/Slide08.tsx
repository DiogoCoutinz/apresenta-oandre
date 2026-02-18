import { SolutionSlide } from './SolutionSlide';

const ChatIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <defs><linearGradient id="s1i" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1A6FFF"/><stop offset="100%" stopColor="#7B2FFF"/></linearGradient></defs>
    <path d="M4 6a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H10l-6 4V6z" stroke="url(#s1i)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="12" r="1.5" fill="url(#s1i)"/><circle cx="16" cy="12" r="1.5" fill="url(#s1i)"/><circle cx="21" cy="12" r="1.5" fill="url(#s1i)"/>
  </svg>
);

export const Slide08 = () => (
  <SolutionSlide
    number="01"
    speaker="MARCELO"
    icon={<ChatIcon />}
    title="Agente de Atendimento 24/7"
    problema="Clínicas com 3 pessoas sem tempo para responder a leads no WhatsApp e website."
    oQueFaz="Responde automaticamente 24/7 no WhatsApp e website. Qualifica leads. Agenda consultas."
    resultado="Taxa de conversão aumenta 10‑20%. Nenhuma lead fica sem resposta."
    price="€ — — —"
  />
);
