import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

// Steps: 0=title, 1=erasmus, 2=janeiro, 3=projeto1, 4=pictuz, 5=quote

const T = 'transition-all duration-700 ease-out';

export const Slide03 = ({ step = 0 }: { step?: number }) => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden" style={{ background: '#0B0F1A' }}>
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Background glow that shifts per step */}
    <div
      className={`absolute w-[600px] h-[600px] rounded-full pointer-events-none ${T}`}
      style={{
        background: step <= 1
          ? 'radial-gradient(circle, rgba(26,111,255,0.08) 0%, transparent 60%)'
          : step <= 3
            ? 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 60%)'
            : 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 60%)',
        filter: 'blur(80px)',
        top: '20%',
        left: step <= 2 ? '30%' : '50%',
      }}
    />

    <div className="relative z-10 flex flex-col h-full p-14">

      {/* TITLE — always visible but shrinks after step 0 */}
      <div
        className={T}
        style={{
          transform: step === 0 ? 'scale(1)' : 'scale(0.75)',
          transformOrigin: 'top left',
          opacity: step === 5 ? 0 : 1,
          marginBottom: step === 0 ? '0' : '-20px',
        }}
      >
        <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3 pt-4">Diogo — A História</p>
        <h1 className="text-white font-black" style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', letterSpacing: '-0.03em' }}>
          Os <span className="gradient-text">10 Meses</span> de Zero
        </h1>
      </div>

      {/* Step 0: Subtitle — intro simples */}
      <div
        className={T}
        style={{
          opacity: step === 0 ? 1 : 0,
          maxHeight: step === 0 ? '300px' : '0px',
          overflow: 'hidden',
        }}
      >
        <p className="text-white/50 font-light mt-6" style={{ fontSize: 'clamp(18px, 2vw, 26px)', lineHeight: 1.6 }}>
          Como entrei no mundo da <span className="text-white font-medium">Inteligência Artificial</span>, e porque é que demorou tanto até funcionar.
        </p>
        <div className="flex items-center gap-3 mt-10">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #1A6FFF, transparent)' }} />
          <p className="text-white/25 text-xs italic">carrega para avançar na história →</p>
        </div>
      </div>

      {/* Step 1: ERASMUS — with Barcelona photo */}
      <div
        className={`flex-1 flex items-center gap-8 ${T}`}
        style={{
          opacity: step === 1 ? 1 : 0,
          transform: step === 1 ? 'translateY(0) scale(1)' : step < 1 ? 'translateY(40px) scale(0.95)' : 'translateY(-40px) scale(0.95)',
          position: step === 1 ? 'relative' : 'absolute',
          pointerEvents: step === 1 ? 'auto' : 'none',
          inset: step !== 1 ? '0' : undefined,
          padding: step !== 1 ? '3.5rem' : undefined,
        }}
      >
        <div
          className="flex-1 rounded-2xl p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(26,111,255,0.08), rgba(26,111,255,0.02))',
            border: '1px solid rgba(26,111,255,0.2)',
            boxShadow: '0 0 60px rgba(26,111,255,0.06)',
          }}
        >
          <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-4">Erasmus — A Semente</p>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Barcelona. Um professor obcecado com IA.
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            Estava no modo clássico, curtir, festas, viver o momento. Mas tinha uma cadeira onde o professor só falava de inteligência artificial.
            Nem seguia o programa. Um dia disse uma frase que ficou gravada:
          </p>
          <div
            className="px-6 py-4 rounded-xl mb-6"
            style={{
              background: 'rgba(26,111,255,0.06)',
              borderLeft: '3px solid #1A6FFF',
              boxShadow: '-4px 0 30px rgba(26,111,255,0.15)',
            }}
          >
            <p className="text-white font-bold italic" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
              "Se vocês querem realmente aproveitar algo, aproveitem esta revolução."
            </p>
          </div>
          <p className="text-white/40 font-light" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            Aquilo plantou uma semente. Quando voltei, comecei a fazer cursos, a investigar, a preparar-me para o que seria 2025.
          </p>
        </div>
        {/* Barcelona photo */}
        <div className="w-[30%] flex flex-col gap-2">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(26,111,255,0.25)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
          >
            <img
              src="/barcelona.png"
              alt="Barcelona — Erasmus"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '280px' }}
            />
          </div>
          <p className="text-white/25 text-[9px] text-center">Barcelona — Erasmus</p>
        </div>
      </div>

      {/* Step 2: JANEIRO — LOCK-IN */}
      <div
        className={`flex-1 flex items-center gap-8 ${T}`}
        style={{
          opacity: step === 2 ? 1 : 0,
          transform: step === 2 ? 'translateY(0) scale(1)' : step < 2 ? 'translateY(40px) scale(0.95)' : 'translateY(-40px) scale(0.95)',
          position: step === 2 ? 'relative' : 'absolute',
          pointerEvents: step === 2 ? 'auto' : 'none',
          inset: step !== 2 ? '0' : undefined,
          padding: step !== 2 ? '3.5rem' : undefined,
        }}
      >
        <div
          className="flex-1 rounded-2xl p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(123,47,255,0.08), rgba(123,47,255,0.02))',
            border: '1px solid rgba(123,47,255,0.2)',
            boxShadow: '0 0 60px rgba(123,47,255,0.06)',
          }}
        >
          <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-4">Janeiro 2025, Lock-In</p>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            "Este é o meu ano."
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            Olhei para 2025 como o ano do lock-in total. Estava disposto a tudo, a sacrificar o conforto, as saídas, o tempo.
            O que não sabia era que isso ia significar 10 meses sem ver um cêntimo.
          </p>
          <p className="text-white/50 font-light leading-relaxed mb-6" style={{ fontSize: 'clamp(13px, 1.3vw, 17px)' }}>
            Todos os dias, mais de 8 horas no computador. Investi tudo o que tinha, dinheiro e horas.
            Sem rendimento. Sem garantias. Sem ninguém a dizer que estava no caminho certo.
          </p>
          <div className="flex items-center gap-6 mt-2">
            {[
              { value: '+8h', label: 'por dia' },
              { value: '0€', label: 'rendimento' },
              { value: '10', label: 'meses' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="gradient-text font-black" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>{s.value}</p>
                <p className="text-white/30 text-[11px] uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Foto do grind */}
        <div className="w-[28%] flex-shrink-0">
          <div
            className="aspect-square rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(123,47,255,0.25)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
          >
            <img
              src="/fotohistoria/image copy 2.png"
              alt="O grind diário"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-white/25 text-[9px] text-center mt-2">O grind diário</p>
        </div>
      </div>

      {/* Step 3: PRIMEIRO PROJETO — Agente IA */}
      <div
        className={`flex-1 flex items-center gap-8 ${T}`}
        style={{
          opacity: step === 3 ? 1 : 0,
          transform: step === 3 ? 'translateY(0) scale(1)' : step < 3 ? 'translateY(40px) scale(0.95)' : 'translateY(-40px) scale(0.95)',
          position: step === 3 ? 'relative' : 'absolute',
          pointerEvents: step === 3 ? 'auto' : 'none',
          inset: step !== 3 ? '0' : undefined,
          padding: step !== 3 ? '3.5rem' : undefined,
        }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase">1ª Tentativa</p>
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: 'rgba(239,68,68,0.12)', color: 'rgba(239,68,68,0.85)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              Falhado
            </span>
          </div>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Agente de IA
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            Um agente que permitia às empresas falar com os clientes e entregar produtos em casa.
            Adaptável a qualquer negócio. 2-3 meses a construir com tudo o que tinha.
          </p>
          <p className="text-white/40 font-light" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            Grande demais para executar sozinho. Não tinha os recursos nem a equipa.
            Custou largar, mas larguei e segui em frente.
          </p>
        </div>
        <div className="w-[45%] flex gap-3 h-[70%]">
          <div className="flex-1 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(26,111,255,0.2)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
            <img src="/fotohistoria/1project.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(26,111,255,0.2)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
            <img src="/fotohistoria/1project2.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Step 4: PICTUZ — mais destaque */}
      <div
        className={`flex-1 flex items-center gap-8 ${T}`}
        style={{
          opacity: step === 4 ? 1 : 0,
          transform: step === 4 ? 'translateY(0) scale(1)' : step < 4 ? 'translateY(40px) scale(0.95)' : 'translateY(-40px) scale(0.95)',
          position: step === 4 ? 'relative' : 'absolute',
          pointerEvents: step === 4 ? 'auto' : 'none',
          inset: step !== 4 ? '0' : undefined,
          padding: step !== 4 ? '3.5rem' : undefined,
        }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase">2ª Tentativa — 5 Meses</p>
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{ background: 'rgba(239,68,68,0.12)', color: 'rgba(239,68,68,0.85)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              Falhado
            </span>
          </div>
          <h2 className="text-white font-black mb-3" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            PicTuz
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-3" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            No início achava que era uma ideia de génio, ninguém tinha feito isto.
            Enviavas a tua foto, escolhias um estilo (Lego, Pixar, pintura, artísticos) e compravas o produto físico: capas, canecas, quadros.
          </p>
          <p className="text-white/60 font-light leading-relaxed mb-3" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            Construí tudo: o site, a loja, encomendei samples, montei a operação inteira.
            Mais de 4 meses dedicado. Enquanto toda a gente curtia o verão, eu estava fechado a construir. Acreditava que era aquilo.
          </p>
          <p className="text-white/50 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            Até que acabou. Percebi que marketing não era para mim e que tinha de aproveitar a onda da IA de outra maneira.
            Custou imenso avançar. Foram 5 meses para o lixo, achava eu.
          </p>
          <div
            className="px-5 py-3 rounded-xl"
            style={{ background: 'rgba(192,38,211,0.06)', borderLeft: '3px solid #C026D3' }}
          >
            <p className="text-white/50 font-medium italic" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>
              Spoiler: não foram para o lixo. Tudo o que aprendi ia ser preciso mais à frente.
            </p>
          </div>
        </div>
        <div className="w-[38%] flex-shrink-0 self-stretch flex flex-col gap-2 py-4">
          {/* Website screenshot — grande */}
          <div
            className="flex-[3] min-h-0 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(192,38,211,0.25)', boxShadow: '0 4px 30px rgba(0,0,0,0.4), 0 0 20px rgba(192,38,211,0.08)' }}
          >
            <img src="/fotohistoria/pictuzlanding.png" alt="PicTuz — website" className="w-full h-full object-cover object-top" />
          </div>
          {/* Produtos — pequena */}
          <div
            className="flex-[1] min-h-0 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(192,38,211,0.2)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
          >
            <img src="/fotohistoria/2project.png" alt="PicTuz — produtos" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>

      {/* Step 5: MINDSET — mentor photos */}
      <div
        className={`flex-1 flex flex-col items-center justify-center text-center ${T}`}
        style={{
          opacity: step === 5 ? 1 : 0,
          transform: step === 5 ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
          position: step === 5 ? 'relative' : 'absolute',
          pointerEvents: step === 5 ? 'auto' : 'none',
          inset: step !== 5 ? '0' : undefined,
          padding: step !== 5 ? '3.5rem' : undefined,
        }}
      >
        <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-6">Mindset, A Maior Vantagem</p>
        <p
          className="text-white font-black italic leading-tight mb-8"
          style={{
            fontSize: 'clamp(24px, 3.5vw, 48px)',
            letterSpacing: '-0.02em',
            textShadow: '0 0 40px rgba(26,111,255,0.3), 0 0 80px rgba(123,47,255,0.15)',
          }}
        >
          "The only way you can lose<br />is if you quit."
        </p>

        {/* Mentor photos */}
        <div className="flex items-center justify-center gap-10 mb-8">
          {[
            { src: '/hormozi.png', name: 'Alex Hormozi' },
            { src: '/publio.png', name: 'Públio Silva' },
            { src: '/mike.png', name: 'Miguel Milhão' },
          ].map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-2">
              <div
                className="w-20 h-20 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(123,47,255,0.4)',
                  boxShadow: '0 0 20px rgba(123,47,255,0.15)',
                }}
              >
                <img src={m.src} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-white/50 text-xs font-medium">{m.name}</p>
            </div>
          ))}
        </div>

        <p className="text-white/50 max-w-lg font-light" style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', lineHeight: 1.6 }}>
          Ouvi-los e mudou tudo. O mindset é das maiores vantagens que tenho hoje.
        </p>
      </div>
    </div>
  </div>
);
