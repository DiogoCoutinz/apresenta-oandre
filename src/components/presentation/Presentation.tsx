import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03 } from './slides/Slide03';
import { Slide04 } from './slides/Slide04';
import { Slide05 } from './slides/Slide05';
import { Slide06 } from './slides/Slide06';
import { Slide07 } from './slides/Slide07';
import { Slide08 } from './slides/Slide08';
import { Slide09 } from './slides/Slide09';
import { Slide10 } from './slides/Slide10';
import { Slide11 } from './slides/Slide11';
import { Slide12 } from './slides/Slide12';
import { Slide13 } from './slides/Slide13';
import { Slide14 } from './slides/Slide14';
import { Slide15 } from './slides/Slide15';

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15,
];

const TOTAL = slides.length;

export const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animDir, setAnimDir] = useState<'next' | 'prev'>('next');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAccumRef = useRef(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (isAnimating || index < 0 || index >= TOTAL) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 350);
  }, [isAnimating]);

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1), 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0), 'prev'), [current, goTo]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        document.exitFullscreen?.();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, isFullscreen]);

  // Scroll / wheel
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      scrollAccumRef.current += e.deltaY;
      if (Math.abs(scrollAccumRef.current) > 60) {
        if (scrollAccumRef.current > 0) next();
        else prev();
        scrollAccumRef.current = 0;
      }
    };
    const el = containerRef.current;
    el?.addEventListener('wheel', handler, { passive: false });
    return () => el?.removeEventListener('wheel', handler);
  }, [next, prev]);

  // Touch / swipe
  useEffect(() => {
    const startHandler = (e: TouchEvent) => {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const endHandler = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      if (Math.abs(dx) > 40 || Math.abs(dy) > 40) {
        if (Math.abs(dx) > Math.abs(dy)) {
          dx < 0 ? next() : prev();
        } else {
          dy < 0 ? next() : prev();
        }
      }
      touchStartRef.current = null;
    };
    const el = containerRef.current;
    el?.addEventListener('touchstart', startHandler, { passive: true });
    el?.addEventListener('touchend', endHandler, { passive: true });
    return () => {
      el?.removeEventListener('touchstart', startHandler);
      el?.removeEventListener('touchend', endHandler);
    };
  }, [next, prev]);

  // Fullscreen listener
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Auto-hide controls
  useEffect(() => {
    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(controlsTimerRef.current);
      controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener('mousemove', resetTimer);
    resetTimer();
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      clearTimeout(controlsTimerRef.current);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const CurrentSlide = slides[current];
  const progress = ((current + 1) / TOTAL) * 100;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ background: '#000', cursor: showControls ? 'default' : 'none' }}
      tabIndex={0}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-[2px]" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #1A6FFF, #7B2FFF, #C026D3)',
            boxShadow: '0 0 8px rgba(26,111,255,0.8)',
          }}
        />
      </div>

      {/* Slide with transition */}
      <div
        className="absolute inset-0 transition-all duration-350"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating
            ? `scale(${animDir === 'next' ? 0.97 : 1.03})`
            : 'scale(1)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        <CurrentSlide />
      </div>

      {/* Controls overlay */}
      <div
        className="absolute inset-x-0 bottom-0 z-50 flex items-end justify-between p-6 transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? 'auto' : 'none' }}
      >
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)',
          }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Center: slide counter + fullscreen */}
        <div className="flex items-center gap-4">
          {/* Dot nav */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '20px' : '5px',
                  height: '5px',
                  background: i === current
                    ? 'linear-gradient(90deg, #1A6FFF, #7B2FFF)'
                    : 'rgba(255,255,255,0.2)',
                  boxShadow: i === current ? '0 0 8px rgba(26,111,255,0.6)' : 'none',
                }}
              />
            ))}
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>

        {/* Slide counter + next */}
        <div className="flex items-center gap-3">
          <span
            className="font-mono"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}
          >
            {String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
          </span>
          <button
            onClick={next}
            disabled={current === TOTAL - 1}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: current === TOTAL - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
