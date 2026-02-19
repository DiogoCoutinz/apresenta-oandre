import { MessageSquare, MapPin, Zap, MousePointerClick } from 'lucide-react';
import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

const channels = [
  {
    num: '01',
    Icon: MessageSquare,
    name: 'Cold DM',
    tagline: 'Entrar directo sem pedir licença',
    desc: 'DMs frias a potenciais clientes nas redes. Directo, pessoal, sem intermediários.',
    rgb: '26,111,255',
    tag: 'Outreach',
    winner: false,
  },
  {
    num: '02',
    Icon: MapPin,
    name: 'Presencial',
    tagline: 'Ir ao terreno. Olhos nos olhos.',
    desc: 'Entrar em negócios locais, eventos e perguntar directamente se precisam de serviços digitais.',
    rgb: '75,63,255',
    tag: 'Field Sales',
    winner: false,
  },
  {
    num: '03',
    Icon: Zap,
    name: 'Conteúdo Orgânico',
    tagline: 'O conteúdo que vende enquanto dormes',
    desc: 'Posts, vídeos e reels que atraem leads qualificados sem custo por clique.',
    rgb: '123,47,255',
    tag: 'Inbound',
    winner: false,
  },
  {
    num: '04',
    Icon: MousePointerClick,
    name: 'Anúncios',
    tagline: 'O que resultou melhor. De longe.',
    desc: 'Vídeo viral como anúncio + formulário. Sem agência. Sem equipa de marketing.',
    rgb: '192,38,211',
    tag: '★ Melhor Canal',
    winner: true,
  },
];

const g = (rgb: string, a: number) => `rgba(${rgb},${a})`;

export const Slide12B = ({ step = 0 }: { step?: number }) => (
  <div
    className="relative w-full h-full flex flex-col overflow-hidden"
    style={{ background: '#080C16' }}
  >
    <style>{`
      @keyframes s12b-pulse {
        0%,100% { opacity:1; transform:scale(1); }
        50%      { opacity:.4; transform:scale(0.7); }
      }
      @keyframes s12b-scan {
        0%   { transform:translateY(-100%); opacity:0; }
        10%  { opacity:1; }
        90%  { opacity:1; }
        100% { transform:translateY(1000%); opacity:0; }
      }
      @keyframes s12b-float {
        0%,100% { transform:translateY(0px); }
        50%      { transform:translateY(-5px); }
      }
    `}</style>

    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    {/* ── Subtle grid ── */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage:`
        linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px)
      `,
      backgroundSize:'48px 48px',
    }} />

    {/* ── Ambient glows ── */}
    <div className="absolute inset-0 pointer-events-none">
      <div style={{
        position:'absolute', top:'-5%', left:'-5%',
        width:'50%', height:'60%',
        background:'radial-gradient(ellipse, rgba(26,111,255,.09) 0%, transparent 65%)',
        filter:'blur(60px)',
      }} />
      <div style={{
        position:'absolute', bottom:'-10%', right:'-5%',
        width:'45%', height:'55%',
        background:'radial-gradient(ellipse, rgba(192,38,211,.07) 0%, transparent 65%)',
        filter:'blur(70px)',
      }} />
    </div>

    {/* ── Main layout: LEFT headline + RIGHT cards ── */}
    <div className="relative z-10 flex-1 flex min-h-0">

      {/* ───── LEFT SIDE ───── */}
      <div className="relative flex flex-col justify-center px-14 py-10" style={{ width:'48%' }}>

        {/* Huge watermark "04" */}
        <div
          className="absolute font-black select-none pointer-events-none"
          style={{
            bottom:'-2%', left:'5%',
            fontSize:'260px', lineHeight:1,
            color:'transparent',
            WebkitTextStroke:'1px rgba(255,255,255,0.03)',
            letterSpacing:'-0.06em',
          }}
        >
          04
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 self-start mb-5 px-3 py-1 rounded-full"
          style={{
            background:'rgba(26,111,255,.1)',
            border:'1px solid rgba(26,111,255,.3)',
          }}
        >
          <div style={{
            width:'6px', height:'6px', borderRadius:'50%',
            background:'rgb(26,111,255)',
            animation:'s12b-pulse 1.8s ease-in-out infinite',
          }} />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color:'rgb(26,111,255)' }}>
            Aquisição de Clientes
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-black leading-[0.9] mb-5"
          style={{ fontSize:'clamp(32px,4.2vw,58px)', letterSpacing:'-0.04em' }}
        >
          O que<br />
          <span className="gradient-text">Testámos</span><br />
          antes.
        </h1>

        {/* Body text */}
        <p
          className="text-white/50 font-light leading-relaxed mb-8"
          style={{ fontSize:'clamp(13px,1.25vw,17px)', maxWidth:'380px' }}
        >
          Antes de perceber o que escala, executámos tudo à força bruta.
          4 canais. Cada um ensinou-nos algo diferente sobre como chegar ao cliente.
        </p>

        {/* Dividing stats row */}
        <div className="flex items-center gap-6">
          {[
            { val: '4', label: 'Canais' },
            { val: '∞', label: 'Tentativas' },
            { val: '1', label: 'Missão' },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="gradient-text font-black"
                style={{ fontSize:'clamp(24px,2.8vw,38px)', lineHeight:1, letterSpacing:'-0.03em' }}
              >
                {s.val}
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mt-0.5">{s.label}</p>
            </div>
          ))}
          <div className="flex-1 h-px ml-2" style={{ background:'linear-gradient(90deg, rgba(26,111,255,.5), rgba(192,38,211,.3), transparent)' }} />
        </div>
      </div>

      {/* ── Vertical divider ── */}
      <div className="flex-shrink-0 self-stretch my-8 flex flex-col">
        <div className="flex-1 w-px" style={{
          background:'linear-gradient(to bottom, transparent, rgba(26,111,255,.4) 20%, rgba(123,47,255,.5) 50%, rgba(192,38,211,.4) 80%, transparent)',
          boxShadow:'0 0 12px rgba(123,47,255,.2)',
        }} />
      </div>

      {/* ───── RIGHT SIDE — 4 channel cards ───── */}
      <div className="flex-1 flex flex-col justify-center gap-3 px-10 py-8">
        {channels.map((c, i) => {
          const delay = `${i * 0.08}s`;
          const isWinner = c.winner;
          return (
            <div key={i} className={isWinner ? 'flex flex-col gap-1.5' : undefined}>
            <div
              className="relative flex items-center gap-4 rounded-2xl overflow-hidden"
              style={{
                background: isWinner
                  ? `linear-gradient(110deg, ${g(c.rgb,.18)} 0%, ${g(c.rgb,.08)} 50%, rgba(8,12,22,.7) 100%)`
                  : `linear-gradient(110deg, ${g(c.rgb,.07)} 0%, rgba(8,12,22,.6) 60%)`,
                border: isWinner ? `1.5px solid ${g(c.rgb,.7)}` : `1px solid ${g(c.rgb,.22)}`,
                boxShadow: isWinner
                  ? `0 6px 40px rgba(0,0,0,.5), -3px 0 0 0 rgb(${c.rgb}), 0 0 40px ${g(c.rgb,.25)}, inset 0 1px 0 ${g(c.rgb,.2)}`
                  : `0 4px 30px rgba(0,0,0,.4), -2px 0 0 0 rgb(${c.rgb}), 0 0 20px ${g(c.rgb,.08)}`,
                padding: isWinner ? '18px 18px' : '14px 18px',
                backdropFilter:'blur(6px)',
                animationDelay: delay,
              }}
            >
              {/* Winner top glow line */}
              {isWinner && (
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
                  background:`linear-gradient(90deg, transparent 0%, rgb(${c.rgb}) 40%, rgb(${c.rgb}) 60%, transparent 100%)`,
                  opacity: 0.8,
                }} />
              )}

              {/* Scanline shimmer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius:'inherit' }}>
                <div style={{
                  position:'absolute', left:0, right:0,
                  height:'1px',
                  background:`linear-gradient(90deg, transparent, ${g(c.rgb,.6)}, transparent)`,
                  top:'50%',
                  opacity: isWinner ? .4 : .25,
                }} />
              </div>

              {/* Icon circle */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: isWinner ? '52px' : '44px',
                  height: isWinner ? '52px' : '44px',
                  background:`linear-gradient(135deg, ${g(c.rgb, isWinner ? .4 : .25)}, ${g(c.rgb,.08)})`,
                  border:`1px solid ${g(c.rgb, isWinner ? .6 : .35)}`,
                  boxShadow:`0 0 ${isWinner ? '28px' : '18px'} ${g(c.rgb, isWinner ? .4 : .2)}`,
                  animation:'s12b-float 3.5s ease-in-out infinite',
                  animationDelay:`${i * 0.5}s`,
                }}
              >
                <c.Icon size={isWinner ? 22 : 18} style={{ color:`rgb(${c.rgb})` }} strokeWidth={1.8} />
              </div>

              {/* Text block */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="font-black"
                    style={{ fontSize:'10px', color:g(c.rgb,.7), letterSpacing:'0.12em' }}
                  >
                    {c.num}
                  </span>
                  <h3
                    className="text-white font-black truncate"
                    style={{ fontSize: isWinner ? 'clamp(15px,1.5vw,19px)' : 'clamp(13px,1.3vw,16px)', letterSpacing:'-0.01em' }}
                  >
                    {c.name}
                  </h3>
                  {/* Tag badge */}
                  <span
                    className="flex-shrink-0 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                    style={{
                      fontSize: isWinner ? '8px' : '7px',
                      background: isWinner ? `rgb(${c.rgb})` : g(c.rgb,.15),
                      border:`1px solid ${g(c.rgb, isWinner ? 1 : .3)}`,
                      color: isWinner ? '#fff' : `rgb(${c.rgb})`,
                      boxShadow: isWinner ? `0 0 12px ${g(c.rgb,.5)}` : 'none',
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
                <p
                  className="italic font-medium mb-1"
                  style={{ fontSize:'clamp(9px,.9vw,11px)', color:g(c.rgb,.85) }}
                >
                  "{c.tagline}"
                </p>
                <p
                  className="font-light leading-snug"
                  style={{ fontSize:'clamp(9px,.85vw,11px)', color: isWinner ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.4)' }}
                >
                  {c.desc}
                </p>
              </div>

              {/* Winner: metric badge */}
              {isWinner && (
                <div
                  className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl px-3 py-2"
                  style={{
                    background:`linear-gradient(135deg, ${g(c.rgb,.3)}, ${g(c.rgb,.1)})`,
                    border:`1px solid ${g(c.rgb,.5)}`,
                    boxShadow:`0 0 20px ${g(c.rgb,.3)}`,
                    minWidth:'64px',
                  }}
                >
                  <span
                    className="font-black leading-none"
                    style={{ fontSize:'clamp(16px,1.8vw,22px)', color:`rgb(${c.rgb})`, letterSpacing:'-0.03em' }}
                  >
                    1,54€
                  </span>
                  <span className="text-white/50 font-medium mt-0.5" style={{ fontSize:'8px', letterSpacing:'0.08em' }}>
                    POR LEAD
                  </span>
                </div>
              )}

              {/* Huge number watermark */}
              <div
                className="absolute font-black select-none pointer-events-none"
                style={{
                  right:'-4px', top:'-8px',
                  fontSize:'70px', lineHeight:1,
                  color:'transparent',
                  WebkitTextStroke:`1px ${g(c.rgb, isWinner ? .2 : .1)}`,
                  letterSpacing:'-0.05em',
                }}
              >
                {c.num}
              </div>
            </div>

            </div>
          );
        })}
      </div>
    </div>

    {/* ── Meta Ads overlay (step 1) ── */}
    <div
      className="absolute inset-0 z-20 flex items-center justify-center"
      style={{
        background: 'rgba(8,12,22,0.88)',
        backdropFilter: 'blur(4px)',
        opacity: step >= 1 ? 1 : 0,
        pointerEvents: step >= 1 ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
      }}
    >
      <div style={{ width: '88%', maxWidth: '900px' }}>
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'rgb(192,38,211)',
            boxShadow: '0 0 10px rgba(192,38,211,.8)',
          }} />
          <span className="text-white/50 text-xs font-bold tracking-[0.25em] uppercase">
            Meta Ads — Campanha Faturas IA
          </span>
        </div>

        {/* Image */}
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(192,38,211,.5)',
          boxShadow: '0 8px 60px rgba(0,0,0,.7), 0 0 40px rgba(192,38,211,.2)',
        }}>
          <img
            src="/fotohistoria/image.png"
            alt="Meta Ads — Campanha Faturas IA"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        {/* Stats row below image */}
        <div className="flex items-center justify-center gap-10 mt-5">
          {[
            { val: '70', label: 'Leads' },
            { val: '1,54€', label: 'Por Lead' },
            { val: '107€', label: 'Investido' },
            { val: '17.8K', label: 'Impressões' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-black" style={{ fontSize: 'clamp(20px,2.4vw,32px)', color: 'rgb(192,38,211)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.val}
              </p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Footer ── */}
    <div
      className="relative z-10 flex-shrink-0 px-14 py-3"
      style={{ borderTop:'1px solid rgba(255,255,255,.06)' }}
    >
      <p className="text-white font-black" style={{ fontSize:'clamp(13px,1.6vw,22px)', letterSpacing:'-0.02em' }}>
        "Não há fórmula mágica.{' '}
        <span className="gradient-text">Há execução consistente."</span>
      </p>
    </div>
  </div>
);
