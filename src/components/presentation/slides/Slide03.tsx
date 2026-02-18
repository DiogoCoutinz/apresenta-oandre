import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';
import { PlaceholderBox } from '../PlaceholderBox';

interface TimelineNode {
  title: string;
  desc: string;
  isFinal?: boolean;
}

const nodes: TimelineNode[] = [
  { title: 'Erasmus Barcelona', desc: '"Aproveitem esta revolução."' },
  { title: 'Janeiro — All‑In', desc: '+8h/dia. Zero euros. Sem garantias.' },
  { title: 'Agente IA — Falhado', desc: '2‑3 meses. Grande demais sozinho.' },
  { title: 'Pictus — Falhado', desc: 'Verão inteiro perdido. Não resultou.' },
  { title: 'N8N — Tudo clicou', desc: 'Primeiro cliente. Os 10 meses deram frutos.' },
  { title: '150K Views ✦', desc: '15 de dezembro. Vídeo viral. Centenas de leads.', isFinal: true },
];

export const Slide03 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-between overflow-hidden p-12 pb-10">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Title */}
    <div className="pt-8">
      <h2 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">A Jornada</h2>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
        A História do <span className="gradient-text">Diogo</span>
      </h1>
    </div>

    {/* Timeline */}
    <div className="flex-1 flex flex-col justify-center">
      {/* Timeline row */}
      <div className="flex items-start gap-0 relative mt-4">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-start flex-1 min-w-0">
            <div className="flex flex-col items-center w-full">
              {/* Label above */}
              <div className="text-center mb-3 px-1" style={{ minHeight: '52px' }}>
                <p className={`font-bold text-white leading-tight ${node.isFinal ? 'gradient-text' : ''}`}
                  style={{ fontSize: 'clamp(9px, 1vw, 12px)' }}>
                  {node.title}
                </p>
                <p className="text-white/40 mt-1 leading-tight" style={{ fontSize: 'clamp(8px, 0.8vw, 10px)' }}>
                  {node.desc}
                </p>
              </div>
              {/* Node + line */}
              <div className="flex items-center w-full">
                {i > 0 && <div className="timeline-line" />}
                <div className={node.isFinal ? 'timeline-node-final' : 'timeline-node'} />
                {i < nodes.length - 1 && <div className="timeline-line" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder prints */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <PlaceholderBox label="Pictus App — prints da app e produtos" className="h-24" />
        <PlaceholderBox label="N8N Dashboards — projetos iniciais" className="h-24" />
        <PlaceholderBox label="Vídeo viral — 150K views + DMs" className="h-24" />
      </div>
    </div>

    {/* Bottom statement */}
    <div className="border-t border-white/10 pt-6">
      <p className="text-white font-black" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', letterSpacing: '-0.02em' }}>
        "Não fechei nenhum lead sozinho."
      </p>
      <p className="text-white/40 mt-2 font-light" style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}>
        Sabia construir. Não sabia vender.
      </p>
    </div>
  </div>
);
