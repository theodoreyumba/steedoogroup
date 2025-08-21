import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  className?: string;
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
}

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export function BrandMark({ 
  className, 
  variant = 'default',
  size = 'md',
  href = '/',
}: BrandMarkProps) {
  const dimensions = sizeMap[size];
  
  const Logo = (
    <div className={cn('relative', className)}>
      <Image
        src="/assets/images/bimi/steedoo-group-logo-625.svg"
        alt="Steedoo Group"
        width={dimensions}
        height={dimensions}
        priority
        className={cn(
          'transition-transform duration-300 hover:scale-105',
          variant === 'white' && 'brightness-0 invert',
          variant === 'dark' && 'brightness-0'
        )}
      />
    </div>
  );
  
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {Logo}
      </Link>
    );
  }
  
  return Logo;
}