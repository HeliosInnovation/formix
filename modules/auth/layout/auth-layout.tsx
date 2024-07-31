import { FC } from 'react';
import type { AuthLayoutProps } from './types';

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
