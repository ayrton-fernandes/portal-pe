'use client';

import { Typography, FlexContainer, Divider } from '@uigovpe/components';
import { PageData, PageSection } from '@/types/page.types';
import { HeroSection } from '@/components/sections/HeroSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { AccordionSection } from '@/components/sections/AccordionSection';
import styles from './PageContent.module.css';

interface PageContentProps {
  page: PageData;
}

/**
 * Renderiza o componente correto baseado no tipo da seção
 */
function renderSection(section: PageSection) {
  switch (section.type) {
    case 'hero':
      return <HeroSection key={section.id} section={section} />;
    case 'contact':
      return <ContactSection key={section.id} section={section} />;
    case 'accordion_group':
      return <AccordionSection key={section.id} section={section} />;
    default:
      return null;
  }
}

/**
 * Componente cliente para renderizar o conteúdo da página
 */
export function PageContent({ page }: PageContentProps) {
  return (
    <main className={styles.main}>
      {/* Cabeçalho da página */}
      <header className={styles.header}>
        <FlexContainer className={styles.headerContainer}>
          <Typography variant="h1" fontWeight="bold" className={styles.pageTitle}>
            {page.title}
          </Typography>
          {page.subtitle && (
            <Typography variant="p" className={styles.pageSubtitle}>
              {page.subtitle}
            </Typography>
          )}
        </FlexContainer>
        <Divider />
      </header>

      {/* Renderiza todas as seções */}
      <article className={styles.content}>
        {page.sections.map((section) => renderSection(section))}
      </article>
    </main>
  );
}
