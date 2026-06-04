import { cva } from 'class-variance-authority';

export const headingVariants = cva(
  'font-bold tracking-tight text-balance',
  {
    variants: {
      size: {
        xs: 'text-base',
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl',
        '2xl': 'text-4xl',
        '3xl': 'text-5xl',
      },
    },
    defaultVariants: {
      size: 'xl',
    },
  }
);

export const textVariants = cva(
  'leading-8',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      tone: {
        default: '',
        muted: 'text-zinc-500',
      },
    },
    defaultVariants: {
      size: 'md',
      tone: 'default',
    },
  }
);

