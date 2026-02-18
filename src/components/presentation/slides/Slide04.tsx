import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const nodes = [
  { label: 'Engenharia\nInformática' },
  { label: 'BMW\nSoftware Dev' },
  { label: '6 anos\n300€/site' },
  { label: 'IA\na favor' },
  { label: 'n8n\nautomação' },
];

export const Slide04 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-between overflow-hidden p-12 pb-10">
    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    <div className="pt-8">
      <h2 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">A Jornada</h2>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
        A História do <span className="gradient-text">Marcelo</span>
      </h1>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <div className="w-full relative" style={{ paddingTop: '80px', paddingBottom: '80px' }}>

        {/* Gradient line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(26,111,255,0.9) 0%, rgba(123,47,255,0.9) 50%, rgba(192,38,211,0.9) 100%)',
            boxShadow: '0 0 12px rgba(26,111,255,0.5)',
          }}
        />

        {/* Nodes */}
        <div className="relative flex justify-between items-center">
          {nodes.map((node, i) => {
            const isAbove = i % 2 === 0;
            const isFinal = i === nodes.length - 1;
            const progress = i / (nodes.length - 1);
            const blue = Math.round(26 + (123 - 26) * progress);
            const green = Math.round(111 + (47 - 111) * progress);
            const red2 = Math.round(255 + (255 - 255) * progress);
            const color1 = `rgb(${26 + Math.round((192 - 26) * progress)}, ${111 + Math.round((38 - 111) * progress)}, ${255 + Math.round((211 - 255) * progress)})`;
            const color2 = `rgb(${123 + Math.round((192 - 123) * progress)}, ${47 + Math.round((38 - 47) * progress)}, ${255 + Math.round((211 - 255) * progress)})`;
            void blue; void green; void red2;

            return (
              <div key={i} className="flex flex-col items-center relative">
                {/* Text above */}
                <div
                  className="text-center mb-5"
                  style={{
                    minHeight: '60px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    opacity: isAbove ? 1 : 0,
                  }}
                >
                  <p
                    className="font-bold whitespace-pre-line leading-tight"
                    style={{
                      fontSize: 'clamp(11px, 1.1vw, 15px)',
                      color: isFinal ? 'transparent' : 'rgba(255,255,255,0.85)',
                      ...(isFinal ? {
                        background: 'linear-gradient(135deg, #1A6FFF, #7B2FFF, #C026D3)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      } : {}),
                    }}
                  >
                    {node.label}
                  </p>
                </div>

                {/* Dot */}
                <div
                  style={{
                    width: isFinal ? '22px' : '14px',
                    height: isFinal ? '22px' : '14px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${color1}, ${color2})`,
                    boxShadow: isFinal
                      ? `0 0 20px ${color1}, 0 0 40px ${color2}`
                      : `0 0 10px ${color1}`,
                    flexShrink: 0,
                    zIndex: 10,
                    position: 'relative',
                  }}
                />

                {/* Text below */}
                <div
                  className="text-center mt-5"
                  style={{
                    minHeight: '60px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    opacity: isAbove ? 0 : 1,
                  }}
                >
                  <p
                    className="font-bold whitespace-pre-line leading-tight"
                    style={{
                      fontSize: 'clamp(11px, 1.1vw, 15px)',
                      color: 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {node.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 pt-5">
      <p className="text-white font-black" style={{ fontSize: 'clamp(20px, 2.5vw, 34px)', letterSpacing: '-0.02em' }}>
        "Não mudei de área.{' '}
        <span className="gradient-text">Mudei de perspetiva."</span>
      </p>
    </div>
  </div>
);
