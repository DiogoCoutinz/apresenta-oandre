import { SpeakerTag } from '../SpeakerTag';
import { FlowziWatermark } from '../FlowziWatermark';

// Steps: 0=title, 1=n8n, 2=primeiro cliente, 3=marca pessoal, 4=viral

const T = 'transition-all duration-700 ease-out';

const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="gradient-text font-black" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em' }}>
      {value}
    </p>
    <p className="text-white/40 text-[11px] font-medium tracking-wider uppercase mt-1">{label}</p>
  </div>
);

export const Slide03B = ({ step = 0 }: { step?: number }) => (
  <div className="relative w-full h-full slide-bg flex flex-col overflow-hidden" style={{ background: '#0B0F1A' }}>
    <SpeakerTag speaker="DIOGO" />
    <FlowziWatermark />

    {/* Background glow */}
    <div
      className={`absolute w-[500px] h-[500px] rounded-full pointer-events-none ${T}`}
      style={{
        background: step <= 1
          ? 'radial-gradient(circle, rgba(26,111,255,0.08) 0%, transparent 60%)'
          : step <= 3
            ? 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 60%)'
            : 'radial-gradient(circle, rgba(192,38,211,0.08) 0%, transparent 60%)',
        filter: 'blur(80px)',
        top: '30%',
        left: '40%',
      }}
    />

    <div className="relative z-10 flex flex-col h-full p-14">

      {/* TITLE — shrinks after step 0 */}
      <div
        className={T}
        style={{
          transform: step === 0 ? 'scale(1)' : 'scale(0.75)',
          transformOrigin: 'top left',
          marginBottom: step === 0 ? '0' : '-20px',
        }}
      >
        <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3 pt-4">A Jornada, Parte 2</p>
        <h1 className="text-white font-black" style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', letterSpacing: '-0.03em' }}>
          A <span className="gradient-text">Viragem</span>
        </h1>
      </div>

      {/* Step 0: Overview */}
      <div
        className={T}
        style={{
          opacity: step === 0 ? 1 : 0,
          maxHeight: step === 0 ? '200px' : '0px',
          overflow: 'hidden',
        }}
      >
        <p className="text-white/50 font-light mt-4" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)', lineHeight: 1.6 }}>
          Passada uma semana de largar o PicTuz, já estava de volta a construir.<br />
          Desta vez, tudo ia ser diferente.
        </p>
        <div className="flex items-center gap-3 mt-8">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #7B2FFF, transparent)' }} />
          <p className="text-white/25 text-xs italic">carrega para avançar →</p>
        </div>
      </div>

      {/* Step 1: N8N — Tudo Clicou */}
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
          <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-4">N8N, Tudo Clicou</p>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Voltei aos workflows para resolver dores reais.
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            B2B. O N8N já existia, mas o que mudou foi que consegui conectar com tudo o que tinha aprendido.
            Os meses do agente de IA, os meses do PicTuz, as centenas de horas. De repente encaixou.
          </p>
          <p className="text-white/40 font-light" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            Tinha a base técnica, a capacidade de resolver problemas, a mentalidade. Só faltava o veículo certo.
          </p>
        </div>
        {/* N8N Workflow screenshot */}
        <div className="w-[38%] flex flex-col gap-2">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(26,111,255,0.25)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
          >
            <img
              src="/fotohistoria/n8ninicio.png"
              alt="N8N Workflow"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-white/25 text-[9px] text-center">Workflow N8N de automação</p>
        </div>
      </div>

      {/* Step 2: Primeiro Cliente + Dashboard */}
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
        <div className="flex-1">
          <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-4">Mudança de Círculo</p>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            As oportunidades vêm das pessoas que te rodeiam.
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            Os amigos antigos estavam presos a sair à noite e falar de futebol. Não há nada de mal nisso, simplesmente não era o que eu queria.
            Queria uma vida de negócios. Queria mais.
          </p>
          <p className="text-white/60 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
            Encontrei o André. Fui a um evento dele. E foi lá, nesse evento, que fechei o primeiro cliente.
            A solução foi um dashboard com as informações da Meta automatizadas.
          </p>
          <div
            className="mt-2 px-6 py-4 rounded-xl"
            style={{ background: 'rgba(123,47,255,0.06)', borderLeft: '3px solid #7B2FFF' }}
          >
            <p className="text-white/70 font-medium italic" style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>
              Se estás rodeado de pessoas que falam de sair à noite, vais falar de sair à noite.
              Se estás rodeado de pessoas que falam de negócios, vais fazer negócios.
            </p>
          </div>
        </div>
        {/* Dashboard do primeiro cliente — maior */}
        <div className="w-[48%] flex-shrink-0 flex flex-col gap-2">
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: '1px solid rgba(123,47,255,0.25)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(123,47,255,0.08)',
            }}
          >
            <img
              src="/fotohistoria/dashboard.png"
              alt="Dashboard do primeiro cliente"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-white/25 text-[9px] text-center">Dashboard do primeiro cliente</p>
        </div>
      </div>

      {/* Step 3: Marca Pessoal */}
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
          <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-4">Marca Pessoal, O Multiplicador</p>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Comecei a fazer vídeos. E custou imenso.
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(13px, 1.3vw, 17px)' }}>
            Sempre tive vergonha do que as outras pessoas podiam achar. Mas a verdade é que ninguém quer saber.
            Lutar pelos teus objetivos é algo que devias fazer todos os dias, e se não fazes nada por isso estás destinado a falhar.
          </p>
          <p className="text-white/50 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            Conheci o Marcelo, o André, o Gonçalo Ferreira, o Guilherme Cardoso. Leads qualificados começaram a aparecer. Os maiores tickets vieram da marca pessoal.
          </p>
          <div
            className="px-5 py-3 rounded-xl"
            style={{ background: 'rgba(123,47,255,0.06)', borderLeft: '3px solid #C026D3' }}
          >
            <p className="text-white/70 font-medium italic" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
              "Ninguém vai gozar contigo. E se gozarem, é um preço ridiculamente pequeno a pagar pelos teus sonhos."
            </p>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-3 h-[80%]">
          <div className="flex-1 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(26,111,255,0.25)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
            <img src="/fotohistoria/1video.png" alt="Primeiro vídeo" className="w-full h-full object-cover object-top" />
            <div className="relative -mt-8 px-3 py-1.5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
              <p className="text-white/60 font-medium" style={{ fontSize: '9px' }}>Primeiro vídeo, LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Vídeo Viral — layout maior */}
      <div
        className={`flex-1 flex gap-8 ${T}`}
        style={{
          opacity: step === 4 ? 1 : 0,
          transform: step === 4 ? 'translateY(0) scale(1)' : step < 4 ? 'translateY(40px) scale(0.95)' : 'translateY(-40px) scale(0.95)',
          position: step === 4 ? 'relative' : 'absolute',
          pointerEvents: step === 4 ? 'auto' : 'none',
          inset: step !== 4 ? '0' : undefined,
          padding: step !== 4 ? '3.5rem' : undefined,
        }}
      >
        <div className="flex-1 flex flex-col justify-center">
          <p className="gradient-text text-xs font-bold tracking-[0.3em] uppercase mb-4">15 de Dezembro</p>
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            O vídeo das faturas explodiu.
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-6" style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}>
            150 mil visualizações. Centenas de leads. Imensas pessoas a querer implementar IA nos seus negócios.
          </p>

          {/* Stats */}
          <div
            className="flex items-center justify-between px-6 py-4 rounded-xl mb-6 max-w-lg"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <StatBadge value="148K" label="Views" />
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <StatBadge value="117K" label="Alcance" />
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <StatBadge value="7.1K" label="Interações" />
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <StatBadge value="3K+" label="Seguidores" />
          </div>

          <p className="text-white/80 font-bold italic" style={{ fontSize: 'clamp(18px, 1.8vw, 26px)' }}>
            "Sabia construir. Não sabia vender."
          </p>
          <p className="text-white/35 font-light mt-2" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>
            Não consegui fechar nenhum daqueles leads sozinho. Precisava de alguém que soubesse vender.
          </p>
        </div>
        {/* Vídeo viral — imagem maior */}
        <div className="w-[45%] flex items-center">
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(192,38,211,0.3)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(192,38,211,0.1)',
            }}
          >
            <img
              src="/fotohistoria/videoviral.png"
              alt="Vídeo viral"
              className="w-full h-auto object-contain"
            />
            <div
              className="px-4 py-2"
              style={{ background: 'linear-gradient(to top, rgba(11,15,26,0.95), rgba(11,15,26,0.7))' }}
            >
              <p className="text-white/60 font-medium" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>
                Vídeo viral, 148K views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
