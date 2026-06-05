import { cva } from 'class-variance-authority';

export const headingVariants = cva(
  'font-bold tracking-tight text-balance',
  {
    variants: {
      size: {
        xs: 'text-sm',
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl',
        '3xl': 'text-4xl',
      },
    },
    defaultVariants: {
      size: 'lg',
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

