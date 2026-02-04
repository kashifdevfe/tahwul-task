import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const getInitial = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getInitial);

  useEffect(() => {
    const mql = window.matchMedia(query);

    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    if ('addEventListener' in mql) {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    // Safari < 14 fallback
    // @ts-expect-error legacy API
    mql.addListener(onChange);
    // @ts-expect-error legacy API
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}

