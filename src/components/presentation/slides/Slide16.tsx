import { SpeakerTag } from '../SpeakerTag';

export const Slide16 = () => (
  <div
    className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
    style={{ background: '#050810' }}
  >
    <SpeakerTag speaker="MARCELO + DIOGO" />

    {/* Background glows */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(26,111,255,0.1) 0%, transparent 60%)',
        filter: 'blur(100px)',
        top: '10%',
        left: '20%',
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 60%)',
        filter: 'blur(80px)',
        bottom: '10%',
        right: '20%',
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-8">

      {/* Flowzi logo */}
      <div
        className="rounded-2xl overflow-hidden mb-10 px-6 py-4"
        style={{
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 40px rgba(26,111,255,0.15), 0 0 60px rgba(123,47,255,0.08)',
        }}
      >
        <img
          src="/logo-lettering-preto.png"
          alt="Flowzi"
          className="h-14 object-contain"
        />
      </div>

      {/* Dúvidas? */}
      <h1
        className="text-white font-black mb-4"
        style={{
          fontSize: 'clamp(48px, 8vw, 100px)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}
      >
        Dúvidas<span className="gradient-text">?</span>
      </h1>

      <p className="text-white/40 font-light mb-12" style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}>
        Estamos aqui para responder a tudo.
      </p>

      {/* QR Code */}
      <div className="flex flex-col items-center gap-4">
        <div
          className="rounded-2xl overflow-hidden p-4"
          style={{
            background: 'white',
            boxShadow: '0 8px 40px rgba(0,0,0,0.3), 0 0 30px rgba(26,111,255,0.1)',
          }}
        >
          <img
            src="/qrcode-flowzi.svg"
            alt="QR Code — flowzi.pt"
            className="w-44 h-44 object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p
            className="gradient-text font-bold tracking-wide"
            style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}
          >
            www.flowzi.pt
          </p>
          <p className="text-white/30 text-xs">Scan para visitar o site</p>
        </div>
      </div>

      {/* Social handles */}
      <div className="flex items-center gap-6 mt-10">
        {['@flowzi.pt', '@marcelosantos', '@diogocoutinho.ai'].map((handle) => (
          <span key={handle} className="text-white/30 font-medium" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
            {handle}
          </span>
        ))}
      </div>
    </div>
  </div>
);
