import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import pagesData from '@/data/pages.json';
import { PageData, PagesData } from '@/types/page.types';
import { PageContent } from './PageContent';

interface PageProps {
  params: {
    slug: string;
  };
}

/**
 * Busca os dados da página pelo slug
 */
function getPageBySlug(slug: string): PageData | undefined {
  const data = pagesData as PagesData;
  return data.pages.find((page) => page.slug === slug);
}

/**
 * Gera os parâmetros estáticos para pré-renderização
 */
export async function generateStaticParams() {
  const data = pagesData as PagesData;
  return data.pages.map((page) => ({
    slug: page.slug,
  }));
}

/**
 * Gera metadados dinâmicos para SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getPageBySlug(params.slug);
  
  if (!page) {
    return {
      title: 'Página não encontrada',
    };
  }

  return {
    title: page.title,
    description: page.subtitle || 'Portal do Governo de Pernambuco',
  };
}

/**
 * Página dinâmica baseada no slug
 */
export default function DynamicPage({ params }: PageProps) {
  const page = getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <PageContent page={page} />;
}
