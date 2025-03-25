import cn from 'classnames';

export function Title({
  children,
  level = 'h1',
  className,
  ...rest
}: React.PropsWithChildren<{
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>) {
  const Tag = level;

  return (
    <Tag
      {...rest}
      className={cn(
        {
          'text-3xl font-bold': level === 'h1',
          'text-2xl font-bold': level === 'h2',
          'text-xl font-bold': level === 'h3',
          'text-lg font-bold': level === 'h4',
          'text-base font-bold': level === 'h5'
        },
        className
      )}>
      {children}
    </Tag>
  );
}
