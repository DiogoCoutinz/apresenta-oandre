import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const principles = [
  {
    number: '01',
    headline: 'Entra pela porta pequena',
    desc: 'Produto simples, preço acessível, implementação rápida. Ganhas a confiança. O upsell vem sozinho.',
  },
  {
    number: '02',
    headline: 'Vende ROI, nunca preço',
    desc: 'Calcula o valor antes de falar em dinheiro. O cliente não compra automações — compra tempo, receita e tranquilidade.',
  },
  {
    number: '03',
    headline: 'Prova social é tudo',
    desc: 'Diz que já trabalhas com outros clientes do mesmo setor. Não é arrogância. É conforto. Ele não quer ser cobaia.',
  },
];

export const Slide13 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-center overflow-hidden p-16">
    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    <div className="mb-12">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">A Metodologia</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}>
        Como Vendemos: <span className="gradient-text">3 Princípios</span>
      </h1>
    </div>

    <div className="flex flex-col gap-6 max-w-3xl">
      {principles.map((p, i) => (
        <div key={i} className="glow-border-left pl-6 py-4">
          <div className="flex items-baseline gap-5">
            <span className="gradient-text font-black shrink-0" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, opacity: 0.6 }}>
              {p.number}
            </span>
            <div>
              <h3 className="text-white font-bold mb-1" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
                {p.headline}
              </h3>
              <p className="text-white/50 font-light" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
