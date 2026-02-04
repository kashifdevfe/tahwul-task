import { useCallback, useState } from 'react';

export type UseDisclosureOptions = {
  defaultOpen?: boolean;
};

export function useDisclosure(options: UseDisclosureOptions = {}) {
  const { defaultOpen = false } = options;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, setIsOpen, open, close, toggle };
}

