'use client';

import { ReactNode } from 'react';
import { LayoutProvider, UiProvider } from '@uigovpe/components';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Wrapper de providers para componentes @uigovpe
 * Necessário usar 'use client' pois os providers utilizam Context
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <LayoutProvider template="landingpage">
      <UiProvider>
        {children}
      </UiProvider>
    </LayoutProvider>
  );
}
