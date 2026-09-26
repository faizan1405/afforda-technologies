import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveImagePath(image?: string, fallback = '/images/placeholder.webp'): string {
  const target = (image && typeof image === 'string' && image.trim()) ? image.trim() : (fallback || '');
  if (!target) return '/images/placeholder.webp';
  if (/^(https?:|data:)/i.test(target)) return target;
  let clean = target.replace(/^\/+/, '');
  while (clean.startsWith('images/')) {
    clean = clean.slice('images/'.length).replace(/^\/+/, '');
  }
  if (!/\.(webp|jpg|jpeg|png|svg|gif|avif)$/i.test(clean)) {
    clean = `${clean}.webp`;
  }
  return `/images/${clean}`;
}
