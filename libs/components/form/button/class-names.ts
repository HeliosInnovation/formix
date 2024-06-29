import { cva } from 'class-variance-authority';

import type { ButtonColor } from './types';

export const buttonClassName = cva<{ color: Record<ButtonColor, string> }>(
  'text-white',
  {
    variants: {
      color: {
        default:
          'border-indigo-600 bg-indigo-600 hover:text-indigo-600 active:text-indigo-500',
        error:
          'border-red-600 bg-red-600  hover:text-red-600 active:text-red-500',
        success:
          'border-green-600 bg-green-600  hover:text-green-600 active:text-green-500',
        warning:
          'border-yellow-600 bg-yellow-600 hover:text-yellow-600 active:text-yellow-500',
      },
    },
  },
);
