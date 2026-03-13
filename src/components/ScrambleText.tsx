import { useEffect, useRef, useState } from 'react';

type ScrambleTextProps = {
  text: string;
  className?: string;
  loop?: boolean;
  minDelayMs?: number;
  maxDelayMs?: number;
  frameMs?: number;
};

type TextAnimationVariant = 'scramble' | 'typewriter' | 'glitch' | 'wave';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$%#&*';
const SYMBOL_CHARS = '<>[]{}|/\\-=+*^%$#@!?';
const VARIANTS: TextAnimationVariant[] = ['scramble', 'typewriter', 'glitch', 'wave'];
let SCRAMBLE_INSTANCE_COUNTER = 0;

function randomCharFrom(pool: string) {
  return pool[Math.floor(Math.random() * pool.length)] ?? 'X';
}

function rotateChars(seed: number, source: string) {
  const chars = source.split('');
  const shift = seed % chars.length;
  return chars.slice(shift).concat(chars.slice(0, shift)).join('');
}

function getVariantFrameMultiplier(variant: TextAnimationVariant) {
  if (variant === 'typewriter') return 1.6;
  if (variant === 'glitch') return 1.45;
  if (variant === 'wave') return 1.35;
  return 1.35;
}

function buildScrambleFrame(
  target: string,
  progress: number,
  frame: number,
  seed: number,
  charsPool: string
) {
  const revealCount = Math.floor(target.length * progress);
  return target
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      if (index < revealCount) return char;
      const variedIndex = Math.abs(seed + frame * 17 + index * 23 + Math.floor(Math.random() * 43)) % charsPool.length;
      return charsPool[variedIndex] ?? randomCharFrom(charsPool);
    })
    .join('');
}

function buildTypewriterFrame(target: string, progress: number, frame: number) {
  const visibleCount = Math.floor(target.length * progress);
  return target
    .split('')
    .map((char, index) => {
      if (index < visibleCount) return char;
      if (index === visibleCount && frame % 6 < 3) return '|';
      return char === ' ' ? ' ' : ' ';
    })
    .join('');
}

function buildGlitchFrame(
  target: string,
  progress: number,
  frame: number,
  seed: number,
  charsPool: string,
  symbolPool: string
) {
  const settleChance = Math.min(1, progress * 1.25);
  return target
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      const lockBias = (index % 3) * 0.06;
      if (Math.random() < settleChance - lockBias) {
        return char;
      }
      const source = frame % 2 === 0 ? charsPool : symbolPool;
      const variedIndex = Math.abs(seed + frame * 29 + index * 11 + Math.floor(Math.random() * 53)) % source.length;
      return source[variedIndex] ?? randomCharFrom(source);
    })
    .join('');
}

function buildWaveFrame(
  target: string,
  progress: number,
  frame: number,
  seed: number,
  charsPool: string
) {
  const waveBand = Math.floor(progress * (target.length + 6));
  return target
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      const revealByBand = index <= waveBand;
      const parityBoost = frame % 2 === index % 2;
      if (revealByBand && parityBoost) {
        return char;
      }
      const variedIndex = Math.abs(seed + frame * 13 + index * 31) % charsPool.length;
      return charsPool[variedIndex] ?? randomCharFrom(charsPool);
    })
    .join('');
}

export default function ScrambleText({
  text,
  className,
  loop = false,
  minDelayMs = 2200,
  maxDelayMs = 5600,
  frameMs = 34,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const seedRef = useRef(Math.floor(Math.random() * 100000));
  const variantRef = useRef<TextAnimationVariant | null>(null);

  if (variantRef.current === null) {
    variantRef.current = VARIANTS[SCRAMBLE_INSTANCE_COUNTER % VARIANTS.length] ?? 'left';
    SCRAMBLE_INSTANCE_COUNTER += 1;
  }

  const charsRef = useRef(rotateChars(seedRef.current, SCRAMBLE_CHARS));
  const symbolCharsRef = useRef(rotateChars(seedRef.current + 17, SYMBOL_CHARS));

  useEffect(() => {
    let isMounted = true;

    const clearTimers = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const runScramble = () => {
      hasAnimatedRef.current = true;
      clearTimers();
      const target = text;
      const variant = variantRef.current ?? 'scramble';
      const totalFrames = Math.max(
        10,
        Math.ceil(target.length * getVariantFrameMultiplier(variant))
      );
      let frame = 0;

      intervalRef.current = window.setInterval(() => {
        if (!isMounted) {
          return;
        }

        frame += 1;
        const progress = Math.min(1, frame / totalFrames);
        let next = target;

        if (variant === 'typewriter') {
          next = buildTypewriterFrame(target, progress, frame);
        } else if (variant === 'glitch') {
          next = buildGlitchFrame(
            target,
            progress,
            frame,
            seedRef.current,
            charsRef.current,
            symbolCharsRef.current
          );
        } else if (variant === 'wave') {
          next = buildWaveFrame(target, progress, frame, seedRef.current, charsRef.current);
        } else {
          next = buildScrambleFrame(target, progress, frame, seedRef.current, charsRef.current);
        }

        setDisplayText(next);

        if (frame >= totalFrames) {
          if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setDisplayText(target);

          if (loop && isMounted) {
            const nextDelay = Math.floor(
              Math.random() * (maxDelayMs - minDelayMs + 1) + minDelayMs
            );
            timeoutRef.current = window.setTimeout(runScramble, nextDelay);
          }
        }
      }, frameMs);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry || !entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }
        const baseDelay = 80 + (seedRef.current % 520);
        timeoutRef.current = window.setTimeout(runScramble, baseDelay);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      isMounted = false;
      observer.disconnect();
      clearTimers();
    };
  }, [frameMs, loop, maxDelayMs, minDelayMs, text]);

  useEffect(() => {
    setDisplayText(text);
    hasAnimatedRef.current = false;
    seedRef.current = Math.floor(Math.random() * 100000);
    charsRef.current = rotateChars(seedRef.current, SCRAMBLE_CHARS);
    symbolCharsRef.current = rotateChars(seedRef.current + 17, SYMBOL_CHARS);
  }, [text]);

  return (
    <span ref={spanRef} className={className}>
      {displayText}
    </span>
  );
}
