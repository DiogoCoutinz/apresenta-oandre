import flowziLogo from '@/assets/flowzi-logo.png';

export const FlowziWatermark = () => (
  <div className="absolute bottom-6 right-10 z-10 opacity-20">
    <img src={flowziLogo} alt="Flowzi" className="h-5 object-contain" style={{ filter: 'invert(1)' }} />
  </div>
);
