import { SpeakerTag } from '../SpeakerTag';

const T = 'transition-all duration-700 ease-out';

const learnings = [
  {
    number: '01',
    title: 'Estar nas redes sociais não é opcional. 1 mês e o efeito composto começa.',
    accent: 'Ou jogas, ou ficas a ver. Depois de sentires o momentum, não vais querer parar.',
    gradient: 'linear-gradient(135deg, #1A6FFF, #7B2FFF)',
    glow: 'rgba(26,111,255,0.15)',
    glowColor: '#1A6FFF',
  },
  {
    number: '02',
    title: 'Os falhanços não são tempo perdido — são treino invisível.',
    accent: 'Quando o veículo certo apareceu, conectei tudo num instante. Os 10 meses de zero foram 10 meses de fundação.',
    gradient: 'linear-gradient(135deg, #7B2FFF, #C026D3)',
    glow: 'rgba(123,47,255,0.15)',
    glowColor: '#7B2FFF',
  },
  {
    number: '03',
    title: 'O teu círculo define os teus próximos 12 meses.',
    accent: 'Se te rodeas de quem fala de sair à noite, vais sair à noite. Se te rodeas de quem faz negócios, vais fazer negócios.',
    gradient: 'linear-gradient(135deg, #C026D3, #EF4444)',
    glow: 'rgba(192,38,211,0.15)',
    glowColor: '#C026D3',
  },
  {
    number: '04',
    title: 'Dá ship. Ouve o mercado. Não esperes que fique perfeito.',
    accent: 'Feito é melhor que perfeito. Lança, recolhe feedback, melhora. Repete.',
    gradient: 'linear-gradient(135deg, #1A6FFF, #7B2FFF)',
    glow: 'rgba(26,111,255,0.12)',
    glowColor: '#1A6FFF',
  },
  {
    number: '05',
    title: 'Só perdes quando desistes. Mete tanto volume que a sorte deixa de ter efeito.',
    accent: '"The only way you can lose is if you quit." — Alex Hormozi',
    gradient: 'linear-gradient(135deg, #7B2FFF, #1A6FFF)',
    glow: 'rgba(123,47,255,0.12)',
    glowColor: '#7B2FFF',
  },
];

// Steps: 0=intro, 1-5=each learning full-screen, 6=all+CTA
export const Slide15 = ({ step = 0 }: { step?: number }) => {
  const showAll = step >= 6;
  const activeIdx = step >= 1 && step <= 5 ? step - 1 : -1;
  const active = activeIdx >= 0 ? learnings[activeIdx] : null;

  const glowBg = active ? active.glow : 'rgba(26,111,255,0.06)';

  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ background: '#050810' }}
    >
      <SpeakerTag speaker="MARCELO + DIOGO" />

      {/* Dynamic background glow */}
      <div
        className={`absolute inset-0 pointer-events-none ${T}`}
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${glowBg} 0%, transparent 60%)` }}
      />
      <div
        className={`absolute w-[500px] h-[500px] rounded-full pointer-events-none ${T}`}
        style={{
          background: `radial-gradient(circle, ${glowBg} 0%, transparent 60%)`,
          filter: 'blur(100px)', top: '-10%', left: '-5%',
        }}
      />
      <div
        className={`absolute w-[400px] h-[400px] rounded-full pointer-events-none ${T}`}
        style={{
          background: `radial-gradient(circle, ${step === 1 ? 'rgba(123,47,255,0.1)' : glowBg} 0%, transparent 60%)`,
          filter: 'blur(80px)', bottom: '-10%', right: '-5%',
        }}
      />

      {/* ===== STEP 0: INTRO ===== */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-16 ${T}`}
        style={{
          opacity: step === 0 ? 1 : 0,
          transform: step === 0 ? 'scale(1)' : 'scale(0.9)',
          pointerEvents: step === 0 ? 'auto' : 'none',
        }}
      >
        <div
          className="rounded-2xl overflow-hidden px-6 py-3 mb-8"
          style={{
            background: 'rgba(255,255,255,0.95)',
            boxShadow: '0 4px 30px rgba(26,111,255,0.2), 0 0 60px rgba(123,47,255,0.1)',
          }}
        >
          <img src="/logo-lettering-preto.png" alt="Flowzi" className="h-12 object-contain" />
        </div>
        <h1
          className="text-white font-black"
          style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          O que <span className="gradient-text">aprendemos.</span>
        </h1>
        <p className="text-white/30 mt-4 font-light" style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}>
          5 lições que mudaram tudo.
        </p>
      </div>

      {/* ===== STEPS 1-5: EACH LEARNING FULL-SCREEN ===== */}
      {learnings.map((l, i) => {
        const isActive = activeIdx === i;
        return (
          <div
            key={l.number}
            className={`absolute inset-0 z-10 flex ${T}`}
            style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? 'auto' : 'none' }}
          >
            {/* Left progress */}
            <div className="w-16 flex flex-col justify-center gap-3 pl-6 flex-shrink-0">
              {learnings.map((_, pi) => (
                <div
                  key={pi}
                  className={T}
                  style={{
                    width: '4px',
                    height: pi === i ? '32px' : '16px',
                    borderRadius: '2px',
                    background: pi < i ? learnings[pi].gradient : pi === i ? l.gradient : 'rgba(255,255,255,0.1)',
                    boxShadow: pi === i ? `0 0 12px ${l.glowColor}80` : 'none',
                  }}
                />
              ))}
            </div>

            <div className="flex-1 flex flex-col items-start justify-center px-16">
              <span
                className="font-black"
                style={{
                  fontSize: 'clamp(80px, 12vw, 160px)',
                  letterSpacing: '-0.06em', lineHeight: 0.85,
                  background: l.gradient,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  filter: `drop-shadow(0 0 40px ${l.glow})`,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {l.number}
              </span>
              <h2
                className="text-white font-black mt-4"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 64px)',
                  letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '85%',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
                }}
              >
                {l.title}
              </h2>
              <p
                className="text-white/40 font-light mt-4 max-w-2xl"
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 22px)', lineHeight: 1.5,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                }}
              >
                {l.accent}
              </p>
              <div
                style={{
                  height: '3px', marginTop: '32px', borderRadius: '2px',
                  width: isActive ? '120px' : '0px',
                  background: l.gradient,
                  boxShadow: `0 0 20px ${l.glowColor}60`,
                  transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                }}
              />
            </div>
          </div>
        );
      })}

      {/* ===== STEP 6: ALL VISIBLE + CTA ===== */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-center px-16 py-12 ${T}`}
        style={{ opacity: showAll ? 1 : 0, pointerEvents: showAll ? 'auto' : 'none' }}
      >
        <div className="flex flex-col gap-3 mb-10">
          {learnings.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-5"
              style={{
                opacity: showAll ? 1 : 0,
                transform: showAll ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
              }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{
                  fontSize: 'clamp(22px, 2.5vw, 36px)',
                  letterSpacing: '-0.04em',
                  background: l.gradient,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  width: '50px',
                }}
              >
                {l.number}
              </span>
              <div className="h-px flex-shrink-0" style={{ width: '24px', background: l.gradient }} />
              <p
                className="text-white font-bold"
                style={{ fontSize: 'clamp(16px, 2vw, 26px)', letterSpacing: '-0.02em' }}
              >
                {l.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="h-px flex-1" style={{
            background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3, transparent)',
            boxShadow: '0 0 15px rgba(26,111,255,0.4)',
          }} />
          <div className="rounded-xl overflow-hidden px-4 py-2 flex-shrink-0" style={{
            background: 'rgba(255,255,255,0.95)',
            boxShadow: '0 4px 20px rgba(26,111,255,0.15)',
          }}>
            <img src="/logo-lettering-preto.png" alt="Flowzi" className="h-7 object-contain" />
          </div>
          <div className="h-px flex-1" style={{
            background: 'linear-gradient(90deg, transparent, #C026D3, #7B2FFF, #1A6FFF)',
            boxShadow: '0 0 15px rgba(192,38,211,0.4)',
          }} />
        </div>
      </div>
    </div>
  );
};
