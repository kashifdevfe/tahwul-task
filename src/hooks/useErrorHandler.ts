import { useCallback, useState } from 'react';

type ErrorState = {
  error: Error | null;
  hasError: boolean;
};

export function useErrorHandler() {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    hasError: false,
  });

  const handleError = useCallback((error: Error | string) => {
    const errorObj = typeof error === 'string' ? new Error(error) : error;
    setErrorState({ error: errorObj, hasError: true });
    console.error('Error handled:', errorObj);
  }, []);

  const resetError = useCallback(() => {
    setErrorState({ error: null, hasError: false });
  }, []);

  const tryCatch = useCallback(
    async <T,>(fn: () => Promise<T> | T): Promise<T | null> => {
      try {
        return await fn();
      } catch (err) {
        handleError(err instanceof Error ? err : new Error(String(err)));
        return null;
      }
    },
    [handleError]
  );

  return {
    error: errorState.error,
    hasError: errorState.hasError,
    handleError,
    resetError,
    tryCatch,
  };
}
