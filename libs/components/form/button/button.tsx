import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { buttonClassName } from './class-names';
import type { ButtonColor, ButtonSize } from './types';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
}

export const Button = ({ children, className, color, size }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'inline-block rounded border px-12 py-3 text-sm font-medium  hover:bg-transparent focus:outline-none focus:ring',
        buttonClassName({ color, size }),
        className,
      )}
    >
      {children}
    </button>
  );
};
