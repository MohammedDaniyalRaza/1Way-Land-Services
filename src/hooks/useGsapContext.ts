import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export function useGsapContext(
  setup: (ctx: gsap.Context) => void,
  deps: React.DependencyList,
  scopeRef?: React.RefObject<Element | null>,
): void {
  const savedSetup = useRef(setup);
  savedSetup.current = setup;

  useEffect(() => {
    const ctx = gsap.context((context) => {
      try {
        savedSetup.current(context);
      } catch {
        // Keep content visible if an animation fails
      }
    }, scopeRef?.current ?? undefined);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
