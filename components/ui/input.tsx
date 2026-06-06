import type { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  type = 'text',
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full rounded-lg border bg-background px-3 text-sm',
        'transition-colors',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-ring',
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}