import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/catalogue';
import ProductDetail from './product-detail';

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  const seen = new Set<string>();
  products.forEach(p => {
    if (!seen.has(p.slug)) {
      seen.add(p.slug);
      params.push({ slug: p.slug });
    }
    p.aliases?.forEach(a => {
      if (!seen.has(a)) {
        seen.add(a);
        params.push({ slug: a });
      }
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug) || products.find(p => p.aliases?.includes(slug));
  return {
    title: product ? `${product.brand} ${product.name} | AFFORDA Technologies` : 'Product not found | AFFORDA',
    description: product?.summary,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug) || products.find(p => p.aliases?.includes(slug));
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
