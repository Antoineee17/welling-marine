'use client';
import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 768) {
  // Par défaut à false pour le rendu serveur (SSR)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cette partie ne s'exécute que côté client
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    // Définir la valeur initiale
    setIsMobile(mediaQuery.matches);

    // Écouter les changements de taille d'écran
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Nettoyer l'écouteur quand le composant se démonte
    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}