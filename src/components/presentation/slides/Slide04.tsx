import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

/* ─── Types & Data ──────────────────────────────────────── */
interface Chapter {
  num: string;
  era: string;
  title: string;
  sub: string;
  tag: string;
  quote: string;
  photo: string;
  rgb: string;
}

const chapters: Chapter[] = [
  {
    num: '01', era: 'Capítulo I',
    title: 'O Código\nNasce',
    sub: 'Engenharia Informática',
    tag: 'A Origem',
    quote: 'A base que tudo sustenta',
    photo: '/fotohistoriamarcelo/engenharia informatica.jpeg',
    rgb: '26,111,255',
  },
  {
    num: '02', era: 'Capítulo II',
    title: 'Dentro\nda BMW',
    sub: 'Software Developer',
    tag: 'A Grande Liga',
    quote: 'Onde os gigantes trabalham',
    photo: '/fotohistoriamarcelo/bmw cracha.jpeg',
    rgb: '75,63,255',
  },
  {
    num: '03', era: 'Capítulo III',
    title: '300€\npor Site',
    sub: 'Sitesfeitos',
    tag: '6 Meses Solo',
    quote: 'O primeiro cliente, o primeiro euro',
    photo: '/fotohistoriamarcelo/sites feitos.png',
    rgb: '123,47,255',
  },
  {
    num: '04', era: 'Capítulo IV',
    title: 'A Máquina\nTrabalha',
    sub: 'IA a Favor',
    tag: 'A Virada',
    quote: 'Quando a IA se tornou aliada',
    photo: '/fotohistoriamarcelo/IA a favor.jpeg',
    rgb: '160,37,211',
  },
  {
    num: '05', era: 'Capítulo V',
    title: 'O\nSuperpoder',
    sub: 'N8N Automação',
    tag: 'Escala ∞',
    quote: 'Automatizar é o novo escalar',
    photo: '/fotohistoriamarcelo/n8nautomacao.jpeg',
    rgb: '192,38,211',
  },
];

const g = (rgb: string, a: number) => `rgba(${rgb},${a})`;

/* Line progress: grows to each dot as steps advance */
const lineW = (step: number) =>
  step === 0 ? '0%' : step >= 5 ? '100%' : `${step * 20 - 2}%`;

/* ─── Slide ─────────────────────────────────────────────── */
export const Slide04 = ({ step = 0 }: { step?: number }) => {
  const activeRgb = step >= 1 ? chapters[step - 1].rgb : '26,111,255';

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ background: '#080C16' }}
    >
      <style>{`
        @keyframes s04-shimmer {
          0%   { transform:translateX(-130%) skewX(-10deg); }
          100% { transform:translateX(130%)  skewX(-10deg); }
        }
        @keyframes s04-ring {
          0%   { transform:translate(-50%,-50%) scale(.9); opacity:.9; }
          100% { transform:translate(-50%,-50%) scale(2.8); opacity:0; }
        }
        @keyframes s04-traffic {
          0%   { background-position: 0%   50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes s04-float {
          0%,100% { transform: translateY(0px) rotate(var(--rot)); }
          50%      { transform: translateY(-7px) rotate(var(--rot)); }
        }
        @keyframes s04-glow-pulse {
          0%,100% { opacity:.55; }
          50%      { opacity:1; }
        }
        @keyframes s04-scan {
          0%   { opacity:0; left:-2%; }
          5%   { opacity:1; }
          95%  { opacity:1; }
          100% { opacity:0; left:102%; }
        }
      `}</style>

      <SpeakerTag speaker="MARCELO" />
      <FlowziWatermark />

      {/* ── Subtle grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:`
          linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
        `,
        backgroundSize:'60px 60px',
        zIndex:0,
      }} />

      {/* ── Ambient glow (colour shifts with step) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex:1 }}>
        <div style={{
          position:'absolute', top:0, left:'20%',
          width:'60%', height:'55%',
          background:`radial-gradient(ellipse, ${g(activeRgb,.1)} 0%, transparent 65%)`,
          filter:'blur(70px)',
          transition:'background 1.1s ease',
        }} />
      </div>

      {/* ── Header ── */}
      <div className="relative flex-shrink-0 px-12 pt-9 pb-2 flex items-end justify-between gap-8" style={{ zIndex:10 }}>
        <div>
          <p className="text-white/40 text-[10px] font-bold tracking-[0.32em] uppercase mb-1.5">
            Marcelo — A Jornada
          </p>
          <h1 className="text-white font-black leading-none" style={{
            fontSize:'clamp(22px,2.9vw,40px)', letterSpacing:'-0.03em'
          }}>
            De <span className="gradient-text">Engenheiro</span> a Automatizador
          </h1>
        </div>

        {/* Animated quote pill */}
        <div className="flex-shrink-0 px-4 py-2 rounded-full" style={{
          background: step >= 1 ? g(activeRgb,.1) : 'rgba(255,255,255,0.04)',
          border:`1px solid ${step >= 1 ? g(activeRgb,.38) : 'rgba(255,255,255,0.07)'}`,
          boxShadow: step >= 1 ? `0 0 20px ${g(activeRgb,.18)}` : 'none',
          backdropFilter:'blur(6px)',
          transition:'all .7s ease',
        }}>
          <p className="font-medium italic whitespace-nowrap" style={{
            fontSize:'clamp(9px,.95vw,12px)',
            color: step >= 1 ? `rgb(${activeRgb})` : 'rgba(255,255,255,0.28)',
            transition:'color .7s ease',
          }}>
            {step >= 1 ? `"${chapters[step-1].quote}"` : 'carrega para começar →'}
          </p>
        </div>
      </div>

      {/* ── Timeline area ── */}
      <div className="relative flex-1 flex items-center px-10" style={{ zIndex:10 }}>
        <div className="relative w-full" style={{ height:'490px' }}>

          {/* Spotlight bloom behind active card */}
          {step >= 1 && (() => {
            const idx   = step - 1;
            const above = idx % 2 === 0;
            const xPct  = `${idx * 20 + 10}%`;
            return (
              <div key={step} className="absolute pointer-events-none" style={{
                left: xPct, top:'50%',
                transform:`translate(-50%, ${above ? '-70%' : '-30%'})`,
                width:'360px', height:'360px',
                background:`radial-gradient(circle, ${g(chapters[idx].rgb,.22)} 0%, transparent 65%)`,
                filter:'blur(50px)',
                transition:'left .8s ease, top .8s ease',
                zIndex:0,
              }} />
            );
          })()}

          {/* ── Background track ── */}
          <div className="absolute left-0 right-0 pointer-events-none" style={{
            top:'50%', transform:'translateY(-50%)',
            height:'3px',
            background:'rgba(255,255,255,0.05)',
            borderRadius:'2px',
            zIndex:1,
          }} />

          {/* ── Progress line with animated traffic ── */}
          <div className="absolute left-0 pointer-events-none" style={{
            top:'50%', transform:'translateY(-50%)',
            height:'3px',
            width: lineW(step),
            borderRadius:'2px',
            background:'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3, #7B2FFF, #1A6FFF)',
            backgroundSize:'300% 100%',
            boxShadow:'0 0 12px rgba(26,111,255,.9), 0 0 28px rgba(123,47,255,.5), 0 0 50px rgba(192,38,211,.3)',
            zIndex:2,
            transition:'width .95s cubic-bezier(.16,1,.3,1)',
            animation: step > 0 ? 's04-traffic 3s linear infinite, s04-glow-pulse 2s ease-in-out infinite' : 'none',
          }} />

          {/* Line reflection */}
          {step > 0 && (
            <div className="absolute left-0 pointer-events-none" style={{
              top:'50%',
              transform:'translateY(6px) scaleY(-1)',
              height:'3px',
              width: lineW(step),
              background:'linear-gradient(90deg, #1A6FFF55, #7B2FFF55, #C026D355)',
              filter:'blur(2px)',
              opacity:.35,
              zIndex:2,
              transition:'width .95s cubic-bezier(.16,1,.3,1)',
              maskImage:'linear-gradient(to bottom, rgba(0,0,0,.6), transparent)',
              WebkitMaskImage:'linear-gradient(to bottom, rgba(0,0,0,.6), transparent)',
            }} />
          )}

          {/* Scanning line sweep */}
          {step > 0 && step < 5 && (
            <div className="absolute pointer-events-none" style={{
              top: 0, bottom: 0,
              width:'2px',
              background:`linear-gradient(to bottom, transparent, ${g(activeRgb,.8)}, transparent)`,
              zIndex:6,
              animation:'s04-scan 4s ease-in-out infinite',
            }} />
          )}

          {/* ── Cards ── */}
          <div className="absolute inset-0 flex items-stretch gap-1">
            {chapters.map((c, i) => {
              const cardStep = i + 1;
              const above    = i % 2 === 0;
              const revealed = step >= cardStep;
              const isActive = step === cardStep;
              const isPast   = step > cardStep;
              const CARD_H   = i === 4 ? 248 : 222;
              const CARD_W   = '92%';
              const CONN_H   = 18;
              const DOT      = 14;
              const rot      = ['-2.5deg','2deg','-1.5deg','2.5deg','-2deg'][i];

              return (
                <div key={i} className="relative flex-1 flex flex-col items-center">

                  {/* Above card */}
                  {above && (
                    <div className="absolute flex flex-col items-center" style={{
                      bottom:'50%',
                      left:0, right:0,
                      paddingBottom:`${DOT/2}px`,
                      opacity: revealed ? (isPast ? .75 : 1) : .18,
                      transform: revealed ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(.94)',
                      transition:'opacity .6s ease, transform .6s cubic-bezier(.34,1.45,.64,1)',
                      zIndex:4,
                    }}>
                      <Card c={c} isActive={isActive} cardH={CARD_H} cardW={CARD_W} connH={CONN_H} rot={rot} position="above" />
                    </div>
                  )}

                  {/* Dot */}
                  <div style={{
                    position:'absolute', top:'50%', left:'50%',
                    transform:'translate(-50%,-50%)',
                    width:`${DOT}px`, height:`${DOT}px`,
                    borderRadius:'50%',
                    background: revealed
                      ? `linear-gradient(135deg, rgb(${c.rgb}), ${g(c.rgb,.65)})`
                      : 'rgba(255,255,255,0.1)',
                    border:`2px solid ${revealed ? g(c.rgb,.5) : 'rgba(255,255,255,0.08)'}`,
                    boxShadow: revealed
                      ? `0 0 ${isActive?28:14}px ${g(c.rgb,isActive?1:.7)}, 0 0 ${isActive?56:24}px ${g(c.rgb,isActive?.4:.2)}`
                      : 'none',
                    zIndex:5,
                    transition:'all .5s ease',
                  }} />

                  {/* Pulse ring */}
                  {isActive && (
                    <div style={{
                      position:'absolute', top:'50%', left:'50%',
                      width:`${DOT}px`, height:`${DOT}px`,
                      borderRadius:'50%',
                      background:g(c.rgb,.5),
                      zIndex:4,
                      animation:'s04-ring 1.5s cubic-bezier(.2,.5,.5,1) infinite',
                    }} />
                  )}

                  {/* Below card */}
                  {!above && (
                    <div className="absolute flex flex-col items-center" style={{
                      top:'50%',
                      left:0, right:0,
                      paddingTop:`${DOT/2}px`,
                      opacity: revealed ? (isPast ? .75 : 1) : .18,
                      transform: revealed ? 'translateY(0) scale(1)' : 'translateY(10px) scale(.94)',
                      transition:'opacity .6s ease, transform .6s cubic-bezier(.34,1.45,.64,1)',
                      zIndex:4,
                    }}>
                      <Card c={c} isActive={isActive} cardH={CARD_H} cardW={CARD_W} connH={CONN_H} rot={rot} position="below" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Step dots ── */}
      <div className="relative flex-shrink-0 flex items-center justify-center gap-3 pb-1" style={{ zIndex:10 }}>
        {chapters.map((c, i) => (
          <div key={i} style={{
            width: step === i+1 ? '20px' : '5px',
            height:'4px', borderRadius:'2px',
            background: step >= i+1 ? `rgb(${c.rgb})` : 'rgba(255,255,255,0.12)',
            boxShadow: step === i+1 ? `0 0 10px rgba(${c.rgb},.9)` : 'none',
            transition:'all .4s cubic-bezier(.16,1,.3,1)',
          }} />
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="relative flex-shrink-0 px-12 py-3" style={{
        borderTop:'1px solid rgba(255,255,255,0.07)', zIndex:10
      }}>
        <p className="text-white font-black" style={{ fontSize:'clamp(14px,1.7vw,24px)', letterSpacing:'-0.02em' }}>
          "Não mudei de área.{' '}
          <span className="gradient-text">Mudei de perspetiva."</span>
        </p>
      </div>
    </div>
  );
};

/* ─── Card sub-component ────────────────────────────────── */
interface CardProps {
  c: Chapter;
  isActive: boolean;
  cardH: number;
  cardW: string;
  connH: number;
  rot: string;
  position: 'above' | 'below';
}

const Card = ({ c, isActive, cardH, cardW, connH, rot, position }: CardProps) => {
  const connector = (
    <div style={{
      width:'2px', height:`${connH}px`, flexShrink:0,
      background:`linear-gradient(to ${position==='above'?'bottom':'top'}, rgb(${c.rgb}), ${g(c.rgb,.25)})`,
      boxShadow:`0 0 8px ${g(c.rgb,.6)}`,
    }} />
  );

  const card = (
    <div
      className="relative overflow-hidden flex-shrink-0"
      style={{
        width: cardW,
        height:`${cardH}px`,
        borderRadius:'16px',
        transform:`rotate(${rot}) ${isActive ? 'scale(1.05) perspective(900px) rotateY(0deg)' : `scale(1) perspective(900px) rotateY(0deg)`}`,
        border:`1px solid ${isActive ? g(c.rgb,.65) : g(c.rgb,.32)}`,
        boxShadow: isActive
          ? `0 0 0 1px ${g(c.rgb,.15)}, 0 16px 60px rgba(0,0,0,.65), 0 0 50px ${g(c.rgb,.4)}`
          : `0 10px 40px rgba(0,0,0,.55), 0 0 16px ${g(c.rgb,.12)}`,
        transition:'transform .55s cubic-bezier(.34,1.3,.64,1), box-shadow .5s ease, border-color .5s ease',
        // @ts-ignore
        '--rot': rot,
        animation: isActive ? `s04-float 3.5s ease-in-out infinite` : 'none',
      } as React.CSSProperties}
    >
      {/* Photo */}
      <img
        src={c.photo} alt={c.sub}
        className="absolute inset-0 w-full h-full"
        draggable={false}
        style={{
          objectFit:'cover', objectPosition:'center top',
          transform: isActive ? 'scale(1.07)' : 'scale(1)',
          transition:'transform .55s ease',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{
        background:'linear-gradient(to top, rgba(8,12,22,.94) 0%, rgba(8,12,22,.38) 48%, rgba(8,12,22,.06) 100%)',
      }} />

      {/* Active colour tint */}
      {isActive && (
        <div className="absolute inset-0" style={{
          background:`linear-gradient(145deg, ${g(c.rgb,.18)} 0%, transparent 55%)`,
        }} />
      )}

      {/* Shimmer on active */}
      {isActive && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ borderRadius:'inherit' }}>
          <div style={{
            position:'absolute', top:0, bottom:0, width:'50%',
            background:'linear-gradient(90deg, transparent, rgba(255,255,255,.065), transparent)',
            animation:'s04-shimmer 2.6s ease-in-out infinite',
          }} />
        </div>
      )}

      {/* HUGE chapter number — overlaid watermark */}
      <div className="absolute select-none pointer-events-none font-black" style={{
        bottom:'-10px', right:'4px',
        fontSize:'110px', lineHeight:1,
        color:'transparent',
        WebkitTextStroke:`1.5px ${g(c.rgb, isActive ? .55 : .25)}`,
        letterSpacing:'-0.06em',
        transition:'all .5s ease',
        textShadow: isActive ? `0 0 40px ${g(c.rgb,.3)}` : 'none',
      }}>
        {c.num}
      </div>

      {/* Era label top-left */}
      <div className="absolute top-2.5 left-2.5" style={{
        fontSize:'7px', fontWeight:700,
        textTransform:'uppercase', letterSpacing:'0.12em',
        color:'rgba(255,255,255,0.38)',
      }}>
        {c.era}
      </div>

      {/* Tag badge top-right */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full" style={{
        background:g(c.rgb,.22),
        border:`1px solid ${g(c.rgb,.42)}`,
        fontSize:'7px', fontWeight:700,
        textTransform:'uppercase', letterSpacing:'0.07em',
        color:`rgb(${c.rgb})`,
        backdropFilter:'blur(4px)',
        boxShadow: isActive ? `0 0 12px ${g(c.rgb,.35)}` : 'none',
        transition:'box-shadow .4s ease',
      }}>
        {c.tag}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0" style={{ padding:'10px 12px' }}>
        <p style={{
          color:'#fff', fontWeight:900,
          fontSize: isActive ? 'clamp(11px,1.4vw,17px)' : 'clamp(9px,1vw,13px)',
          lineHeight:1.2, letterSpacing:'-0.01em',
          whiteSpace:'pre-line',
          textShadow:'0 2px 12px rgba(0,0,0,.8)',
          transition:'font-size .4s ease',
        }}>
          {c.title}
        </p>
        <p style={{
          color:'rgba(255,255,255,.4)', fontSize:'7.5px',
          marginTop:'2px', textTransform:'uppercase', letterSpacing:'0.06em',
        }}>
          {c.sub}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {position === 'above' ? card : connector}
      {position === 'above' ? connector : card}
    </>
  );
};
