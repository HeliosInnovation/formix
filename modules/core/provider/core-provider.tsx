import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import { coreTheme } from './core-theme';
import type { AppProviderProps } from './types';

export const CoreProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <MantineProvider theme={coreTheme}>{children}</MantineProvider>;
};
