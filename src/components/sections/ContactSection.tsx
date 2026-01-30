'use client';

import { Typography, Card } from '@uigovpe/components';
import { PageSection } from '@/types/page.types';
import { createMarkup } from '@/utils/sanitize';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  section: PageSection;
}

/**
 * Componente para renderizar seção tipo "contact" (Fale Conosco)
 */
export function ContactSection({ section }: ContactSectionProps) {
  return (
    <section id={section.id} className={styles.contactSection}>
      <div className={styles.container}>
        <Card elevation="low" className={styles.card}>
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
          
          {section.content && (
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={createMarkup(section.content)}
            />
          )}
        </Card>
      </div>
    </section>
  );
}
