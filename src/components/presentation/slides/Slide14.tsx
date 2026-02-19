import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide14 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden">
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Background glow — dramatic */}
    <div
      className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(26,111,255,0.1) 0%, transparent 60%)', filter: 'blur(100px)' }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
      style={{ background: 'linear-gradient(to top, rgba(123,47,255,0.04), transparent)' }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full px-16 py-14">

      {/* Opening question — big impact */}
      <div className="mb-8">
        <h1
          className="text-white font-black leading-[1.05]"
          style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', letterSpacing: '-0.03em' }}
        >
          Vocês estão aqui.<br />
          <span className="text-white/50">A probabilidade de comprarem de mim</span><br />
          <span className="gradient-text">aumenta só porque me viram num vídeo.</span>
        </h1>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full mb-8"
        style={{
          background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3, transparent)',
          boxShadow: '0 0 15px rgba(26,111,255,0.4)',
        }}
      />

      {/* Core message */}
      <div className="flex flex-col gap-5 max-w-3xl">
        <p
          className="text-white font-black"
          style={{ fontSize: 'clamp(24px, 3vw, 44px)', letterSpacing: '-0.02em' }}
        >
          Estar nas redes sociais{' '}
          <span className="gradient-text">não é opcional.</span>
        </p>

        <p
          className="text-white/60 font-light leading-relaxed"
          style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}
        >
          Ao publicares, já estás à frente de 90% das pessoas que pensam mas nunca fazem.
          Os primeiros vídeos vão ser maus — os meus eram horríveis, nem os consigo ver hoje.
          Mas foram eles que me trouxeram aqui.
        </p>

        {/* Key results */}
        <div className="flex flex-wrap gap-3 mt-2">
          {[
            'Conheci o meu sócio',
            'Acesso a criadores de conteúdo',
            'Leads qualificados',
            'Maiores tickets vieram da marca pessoal',
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-white/70 text-xs font-medium"
              style={{
                background: 'rgba(26,111,255,0.08)',
                border: '1px solid rgba(26,111,255,0.2)',
                boxShadow: '0 0 15px rgba(26,111,255,0.05)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom quote — the killer line */}
      <div
        className="rounded-xl px-8 py-6"
        style={{
          background: 'linear-gradient(135deg, rgba(26,111,255,0.06), rgba(123,47,255,0.04), rgba(192,38,211,0.03))',
          border: '1px solid rgba(26,111,255,0.15)',
          boxShadow: '0 0 40px rgba(26,111,255,0.06)',
        }}
      >
        <p
          className="text-white font-bold italic leading-snug"
          style={{
            fontSize: 'clamp(18px, 2vw, 28px)',
            textShadow: '0 0 30px rgba(26,111,255,0.3)',
          }}
        >
          "Ninguém vai gozar contigo. E se gozarem, é um preço
          ridiculamente pequeno a pagar pelos teus sonhos."
        </p>
      </div>
    </div>
  </div>
);
