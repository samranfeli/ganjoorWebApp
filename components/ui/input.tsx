import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type = 'text',
    ...props
    }, ref
  ) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'h-10 w-full rounded-lg border border-black/20 dark:border-white/20 px-3 text-sm',
        'transition-colors',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none',
        'focus-visible:border-black/70',
        'dark:focus-visible:border-white/70',
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
        className
      )}
      {...props}
    />
  )}
)

Input.displayName = 'Input';

export default Input