import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

interface TimelineNode {
  title: string;
  desc: string;
  isFinal?: boolean;
}

const nodes: TimelineNode[] = [
  { title: 'Engenharia Informática', desc: 'Sempre com o bichinho do empreendedorismo.' },
  { title: 'BMW — Software Developer', desc: 'Background técnico sólido.' },
  { title: '6 Anos a 300€/site', desc: '40+ websites. Um teto invisível.' },
  { title: 'Transição para IA', desc: 'Usei a IA para multiplicar o meu valor.' },
  { title: 'N8N — As peças encaixaram', desc: 'APIs, webhooks — já sabia tudo. Só faltava ligar.' },
  { title: 'Primeira Clínica ✦', desc: 'Agente de atendimento. Funcionou desde o primeiro dia.', isFinal: true },
];

export const Slide04 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-between overflow-hidden p-12 pb-10">
    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    {/* Title */}
    <div className="pt-8">
      <h2 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">A Jornada</h2>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
        A História do <span className="gradient-text">Marcelo</span>
      </h1>
    </div>

    {/* Timeline */}
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex items-start gap-0 relative mt-4">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-start flex-1 min-w-0">
            <div className="flex flex-col items-center w-full">
              <div className="text-center mb-3 px-1" style={{ minHeight: '52px' }}>
                <p className={`font-bold text-white leading-tight ${node.isFinal ? 'gradient-text' : ''}`}
                  style={{ fontSize: 'clamp(9px, 1vw, 12px)' }}>
                  {node.title}
                </p>
                <p className="text-white/40 mt-1 leading-tight" style={{ fontSize: 'clamp(8px, 0.8vw, 10px)' }}>
                  {node.desc}
                </p>
              </div>
              <div className="flex items-center w-full">
                {i > 0 && <div className="timeline-line" />}
                <div className={node.isFinal ? 'timeline-node-final' : 'timeline-node'} />
                {i < nodes.length - 1 && <div className="timeline-line" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom statement */}
    <div className="border-t border-white/10 pt-6">
      <p className="text-white font-black" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', letterSpacing: '-0.02em' }}>
        "Não estava a vender tecnologia."
      </p>
      <p className="gradient-text font-black mt-1" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', letterSpacing: '-0.02em' }}>
        "Estava a resolver um problema."
      </p>
    </div>
  </div>
);
