import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type Lenis from 'lenis';
import { useLenis } from '../hooks/useLenis';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ScrollTrigger } from '../lib/gsap';

const SESSION_KEY = '1way_intro_seen';

function readIntroSeen(): boolean {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function writeIntroSeen(): void {
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    // Ignore storage restriction errors
  }
}

interface AppContextValue {
  appReady: boolean;
  showPreloader: boolean;
  markAppReady: () => void;
  setScrollLocked: (locked: boolean) => void;
  scrollToTopImmediate: () => void;
  lenisRef: React.MutableRefObject<Lenis | null>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProviders({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [showPreloader, setShowPreloader] = useState<boolean>(() => !readIntroSeen());
  const [appReady, setAppReady] = useState<boolean>(() => readIntroSeen());
  const [scrollLocked, setScrollLockedState] = useState<boolean>(() => !readIntroSeen());

  const lenisRef = useLenis(reducedMotion);

  const setScrollLocked = useCallback(
    (locked: boolean) => {
      setScrollLockedState(locked);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = locked ? 'hidden' : '';
      }
      if (lenisRef.current) {
        if (locked) lenisRef.current.stop();
        else lenisRef.current.start();
      }
    },
    [lenisRef],
  );

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [scrollLocked, lenisRef]);

  const markAppReady = useCallback(() => {
    writeIntroSeen();
    setShowPreloader(false);
    setAppReady(true);
    setScrollLocked(false);
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [setScrollLocked]);

  const scrollToTopImmediate = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [lenisRef]);

  return (
    <AppContext.Provider
      value={{
        appReady,
        showPreloader,
        markAppReady,
        setScrollLocked,
        scrollToTopImmediate,
        lenisRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used inside AppProviders');
  }
  return ctx;
}
