import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { buttonClassName } from './class-names';
import type { ButtonColor } from './types';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  color?: ButtonColor;
}

export const Button = ({ children, className, color }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'inline-block rounded border px-12 py-3 text-sm font-medium  hover:bg-transparent focus:outline-none focus:ring',
        buttonClassName({ color }),
        className,
      )}
    >
      {children}
    </button>
  );
};
