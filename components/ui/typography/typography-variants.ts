import { cva } from 'class-variance-authority';

export const headingVariants = cva(
  'font-bold tracking-tight text-balance',
  {
    variants: {
      size: {
        xs: 'text-xs sm:text-base',
        sm: 'text-sm sm:text-lg',
        md: 'text-base sm:text-xl',
        lg: 'text-lg sm:text-2xl',
        xl: 'text-xl sm:text-3xl',
        '2xl': 'text-2xl sm:text-4xl',
        '3xl': 'text-3xl sm:text-5xl',
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

