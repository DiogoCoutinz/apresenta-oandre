import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

export const Slide14 = () => (
  <div className="relative w-full h-full slide-bg flex flex-col justify-center overflow-hidden p-16">
    <SpeakerTag speaker="MARCELO + DIOGO" />
    <FlowziWatermark />

    {/* Top half: participatory question */}
    <div className="mb-10">
      <h1 className="text-white font-black leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.02em' }}>
        Quem já nos viu num vídeo antes de hoje?
      </h1>
      <p className="text-white/20 mt-4 italic" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>
        [ pausa — mãos levantadas ]
      </p>
    </div>

    {/* Divider */}
    <div className="glow-line h-px w-full mb-10 opacity-60" />

    {/* Bottom half: key messages */}
    <div className="flex flex-col gap-5">
      <p className="text-white font-black" style={{ fontSize: 'clamp(20px, 2.5vw, 36px)', letterSpacing: '-0.01em' }}>
        Estar nas redes sociais <span className="gradient-text">não é opcional.</span>
      </p>
      <p className="text-white/60 font-light" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)', lineHeight: 1.6 }}>
        Ao publicares, já estás à frente de 90% das pessoas que pensam mas nunca fazem.
      </p>
      <p className="gradient-text-muted italic mt-4" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}>
        "Os primeiros vídeos vão ser maus. Publica na mesma."
      </p>
    </div>
  </div>
);
