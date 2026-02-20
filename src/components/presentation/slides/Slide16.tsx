import { SpeakerTag } from '../SpeakerTag';

/* Inline SVG Instagram icon */
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad)" />
  </svg>
);

const profiles = [
  { handle: '@diogocoutinho.ai', qr: '/qrcode-flowzi.svg', color: '#1A6FFF' },
  { handle: '@marcelosantos.ai', qr: '/qrcode-flowzi.svg', color: '#7B2FFF' },
];

export const Slide16 = () => (
  <div
    className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
    style={{ background: '#050810' }}
  >
    <SpeakerTag speaker="MARCELO + DIOGO" />

    {/* Animated grid background */}
    <div className="absolute inset-0 s16-grid opacity-[0.04] pointer-events-none" />

    {/* Cinematic scan line */}
    <div className="s16-scan-line pointer-events-none" />

    {/* Large orbiting glows */}
    <div className="absolute s16-orbit pointer-events-none" style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}>
      <div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(26,111,255,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '15%',
          left: '10%',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,255,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '15%',
          right: '10%',
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(192,38,211,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>

    {/* Floating particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full s16-particle pointer-events-none"
        style={{
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          background: i % 3 === 0 ? '#1A6FFF' : i % 3 === 1 ? '#7B2FFF' : '#C026D3',
          left: `${5 + Math.random() * 90}%`,
          top: `${5 + Math.random() * 90}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${4 + Math.random() * 4}s`,
          ['--particle-x' as string]: `${-30 + Math.random() * 60}px`,
          ['--particle-y' as string]: `${-40 + Math.random() * 80}px`,
        }}
      />
    ))}

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-8">

      {/* Dúvidas? — with breathing glow + light sweep */}
      <div className="relative s16-title-glow mb-3">
        <h1
          className="text-white font-black relative"
          style={{
            fontSize: 'clamp(52px, 9vw, 110px)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          Dúvidas<span className="gradient-text">?</span>
        </h1>
        {/* Light sweep */}
        <div className="s16-light-sweep" />
      </div>

      <p className="text-white/40 font-light mb-14" style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}>
        Estamos aqui para responder a tudo.
      </p>

      {/* Instagram cards with connecting line */}
      <div className="flex items-center gap-0">
        {profiles.map((p, i) => (
          <div key={p.handle} className="flex items-center">
            {/* Profile card */}
            <div className="flex flex-col items-center gap-5">
              {/* QR card */}
              <div
                className="rounded-2xl overflow-hidden p-5"
                style={{
                  background: 'white',
                  boxShadow: `0 8px 50px rgba(0,0,0,0.4), 0 0 30px ${p.color}15`,
                }}
              >
                <img
                  src={p.qr}
                  alt={`QR Code — ${p.handle}`}
                  className="w-36 h-36 object-contain"
                />
              </div>

              {/* Handle with Instagram icon */}
              <div className="flex items-center gap-2">
                <InstagramIcon size={18} />
                <span
                  className="gradient-text font-bold tracking-wide"
                  style={{ fontSize: 'clamp(13px, 1.3vw, 17px)' }}
                >
                  {p.handle}
                </span>
              </div>
            </div>

            {/* Connecting bridge (only between the two cards) */}
            {i === 0 && (
              <div className="flex flex-col items-center mx-8 gap-3">
                {/* Animated connection line */}
                <div className="relative w-28 h-[2px]">
                  <div className="absolute inset-0 rounded-full s16-bridge-glow" />
                  <div className="absolute inset-0 rounded-full s16-bridge-pulse" />
                </div>

                {/* CTA text */}
                <p
                  className="text-white/50 font-medium text-center leading-snug s16-cta-breathe"
                  style={{ fontSize: 'clamp(11px, 1.1vw, 14px)', maxWidth: '140px' }}
                >
                  Segue-nos para<br />
                  <span className="gradient-text font-bold">acompanhar a jornada</span>
                </p>

                {/* Another connecting line */}
                <div className="relative w-28 h-[2px]">
                  <div className="absolute inset-0 rounded-full s16-bridge-glow" style={{ animationDelay: '1.5s' }} />
                  <div className="absolute inset-0 rounded-full s16-bridge-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flowzi watermark at bottom */}
      <div className="mt-14 flex items-center gap-3 s16-logo-breathe">
        <div
          className="rounded-xl overflow-hidden px-4 py-2"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 4px 20px rgba(26,111,255,0.08)',
          }}
        >
          <img
            src="/logo-lettering-preto.png"
            alt="Flowzi"
            className="h-7 object-contain"
            style={{ filter: 'invert(1) brightness(0.8)' }}
          />
        </div>
        <span className="text-white/20 font-light" style={{ fontSize: '12px' }}>
          www.flowzi.pt
        </span>
      </div>
    </div>
  </div>
);
