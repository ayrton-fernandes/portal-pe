'use client';

import { Typography, Accordion, Icon, Divider } from '@uigovpe/components';
import { PageSection } from '@/types/page.types';
import { createMarkup } from '@/utils/sanitize';
import styles from './AccordionSection.module.css';

interface AccordionSectionProps {
  section: PageSection;
}

/**
 * Componente para renderizar seção tipo "accordion_group" (Transparência)
 */
export function AccordionSection({ section }: AccordionSectionProps) {
  // Mapeia os accordions do JSON para o formato esperado pelo componente
  const accordionItems = section.accordions?.map((item) => ({
    header: item.title,
    content: (
      <div 
        className={styles.accordionContent}
        dangerouslySetInnerHTML={createMarkup(item.content)}
      />
    ),
  })) || [];

  return (
    <section id={section.id} className={styles.accordionSection}>
      <div className={styles.container}>
        <Typography 
          variant="h2" 
          fontWeight="bold"
          className={styles.title}
        >
          {section.title}
        </Typography>
        
        {section.description && (
          <Typography variant="p" className={styles.description}>
            {section.description}
          </Typography>
        )}
        
        <div className={styles.accordionWrapper}>
          <Accordion
            items={accordionItems}
            expandIcon={<Icon icon="keyboard_arrow_down" />}
            collapseIcon={<Icon icon="keyboard_arrow_up" />}
          />
        </div>
        
        <Divider className={styles.divider} />
      </div>
    </section>
  );
}
