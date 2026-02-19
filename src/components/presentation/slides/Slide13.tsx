import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const principles = [
  {
    number: '01',
    headline: 'Entra pela porta pequena',
    desc: 'Produto simples, preço acessível, implementação rápida. Ganhas confiança. O upsell vem sozinho.',
  },
  {
    number: '02',
    headline: 'Amplifica a dor antes da solução',
    desc: 'Faz o cliente sentir o custo do problema agora. Só depois mostras a saída.',
  },
  {
    number: '03',
    headline: 'Vende ROI, nunca preço',
    desc: 'Calcula o valor antes de falar em dinheiro. Ele não compra automações — compra tempo e receita.',
  },
  {
    number: '04',
    headline: 'Prova social é tudo',
    desc: 'Diz que já trabalhas com outros do mesmo setor. Não é arrogância — é conforto. Ele não quer ser cobaia.',
  },
  {
    number: '05',
    headline: 'Elimina o risco',
    desc: 'Oferece garantia, piloto gratuito ou resultado antes de pagar. Retira o medo de errar a decisão.',
  },
  {
    number: '06',
    headline: 'Flexibiliza o pagamento',
    desc: 'Fracionamento, subscrição, sucesso partilhado. Remove a barreira financeira e acelera o sim.',
  },
  {
    number: '07',
    headline: 'Trata a lead por tu',
    desc: 'Usa o nome, faz perguntas reais, sê direto. Parceiro bate fornecedor sempre.',
  },
];

export const Slide13 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-center overflow-hidden p-12">
    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    <div className="mb-8">
      <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">A Metodologia</p>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(24px, 3vw, 42px)', letterSpacing: '-0.02em' }}>
        Como Vendemos: <span className="gradient-text">7 Princípios</span>
      </h1>
    </div>

    <div
      className="grid gap-x-8 gap-y-3"
      style={{ gridTemplateColumns: '1fr 1fr' }}
    >
      {principles.map((p, i) => (
        <div key={i} className="glow-border-left pl-4 py-3 flex items-baseline gap-4">
          <span
            className="gradient-text font-black shrink-0"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', lineHeight: 1, opacity: 0.55 }}
          >
            {p.number}
          </span>
          <div>
            <h3 className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(13px, 1.3vw, 17px)' }}>
              {p.headline}
            </h3>
            <p className="text-white/45 font-light mt-0.5" style={{ fontSize: 'clamp(11px, 1vw, 13px)', lineHeight: 1.5 }}>
              {p.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
