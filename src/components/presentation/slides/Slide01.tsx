import flowziLogo from '@/assets/flowzi-logo.png';
import { SpeakerTag } from '../SpeakerTag';

export const Slide01 = () => (
  <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0B0F1A' }}>
    <SpeakerTag speaker="MARCELO + DIOGO" />

    {/* Hero photo - full bleed, centered on people */}
    <div className="absolute inset-0">
      <img
        src="/fotodiogomarcelolanding.png"
        alt="Marcelo e Diogo"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 65%' }}
      />
      {/* Multi-layer gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to top,
              rgba(11,15,26,0.98) 0%,
              rgba(11,15,26,0.85) 25%,
              rgba(11,15,26,0.4) 50%,
              rgba(11,15,26,0.15) 70%,
              rgba(11,15,26,0.3) 100%
            )
          `,
        }}
      />
      {/* Side vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(11,15,26,0.6) 100%)',
        }}
      />
      {/* Blue brand tint over photo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 35%, rgba(26,111,255,0.1) 0%, transparent 60%)',
        }}
      />
    </div>

    {/* Subtle tech grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(26,111,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,111,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />

    {/* Content container - centered */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">

      {/* Logo */}
      <div className="mb-10">
        <img
          src={flowziLogo}
          alt="Flowzi"
          className="h-20 object-contain"
        />
      </div>

      {/* Main headline - centered and massive */}
      <h1
        className="font-black text-white text-center leading-none tracking-tight"
        style={{ fontSize: 'clamp(56px, 8vw, 100px)', letterSpacing: '-0.04em' }}
      >
        Do Zero aos{' '}
        <span
          className="relative inline-block"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 20px rgba(26,111,255,0.4)',
          }}
        >
          +4.000&euro;
          {/* Gradient underline accent */}
          <span
            className="absolute left-0 right-0 -bottom-2 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3)',
              boxShadow: '0 0 15px rgba(26,111,255,0.6), 0 0 30px rgba(123,47,255,0.3)',
            }}
          />
        </span>
      </h1>

      {/* Glowing divider */}
      <div className="glow-line w-48 h-px my-8" />

      {/* Subtitle */}
      <p
        className="text-white/60 text-center font-light max-w-lg"
        style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', lineHeight: 1.6 }}
      >
        O que aprendemos a construir, vender e escalar com IA
      </p>

      {/* Speaker names */}
      <p
        className="text-white/40 font-light tracking-widest uppercase mt-10"
        style={{ fontSize: '12px', letterSpacing: '0.35em' }}
      >
        Marcelo &amp; Diogo — Flowzi
      </p>
    </div>
  </div>
);
