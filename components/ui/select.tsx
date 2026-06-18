import { forwardRef, SelectHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({
    options,
    defaultValue,
    className,
    ...props
    }, ref
  ) => {
    
  return (
    <select
      defaultValue={defaultValue}
      ref={ref}
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
    >
      
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}

    </select>
  )}
)

Select.displayName = 'Select';

export default Select