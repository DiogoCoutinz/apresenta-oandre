import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide04B = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-between overflow-hidden p-12 pb-10">
    <SpeakerTag speaker="MARCELO" />
    <FlowziWatermark />

    <div className="pt-8">
      <h2 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-2">O Primeiro Cliente</h2>
      <h1 className="text-white font-black" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
        Clínica de <span className="gradient-text">Fisioterapia</span>
      </h1>
    </div>

    <div className="flex-1 grid grid-cols-[5fr_7fr] gap-5 mt-6 min-h-0">

      {/* Left: bullets */}
      <div className="flex flex-col justify-center gap-5">
        {[
          { dot: '#1A6FFF', text: '3 pessoas. Sem tempo para responder.' },
          { dot: '#7B2FFF', text: 'Agente WhatsApp + widget no site.' },
          { dot: '#22D3EE', text: 'Funcionou desde o primeiro dia.' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full"
              style={{ background: item.dot, boxShadow: `0 0 8px ${item.dot}` }}
            />
            <p className="text-white/85 font-semibold leading-snug" style={{ fontSize: 'clamp(13px, 1.3vw, 19px)' }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Right: two photos */}
      <div className="grid grid-rows-[3fr_2fr] gap-3 min-h-0">
        {/* Clinic photo */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(26,111,255,0.3)', boxShadow: '0 0 30px rgba(26,111,255,0.12)' }}
        >
          <img
            src="/clinica.jpg"
            alt="Clínica de fisioterapia"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Handshake photo */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(123,47,255,0.3)', boxShadow: '0 0 30px rgba(123,47,255,0.12)' }}
        >
          <img
            src="/handshake.jpg"
            alt="Parceria"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 pt-5">
      <p className="text-white font-black" style={{ fontSize: 'clamp(18px, 2.2vw, 30px)', letterSpacing: '-0.02em' }}>
        O primeiro cliente não precisa de ser perfeito.{' '}
        <span className="gradient-text">Precisa de ser real.</span>
      </p>
    </div>
  </div>
);
