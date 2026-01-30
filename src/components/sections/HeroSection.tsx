'use client';

import Image from 'next/image';
import { Typography, FlexContainer } from '@uigovpe/components';
import { PageSection } from '@/types/page.types';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  section: PageSection;
}

/**
 * Componente para renderizar seção tipo "hero" (Quem Somos)
 */
export function HeroSection({ section }: HeroSectionProps) {
  return (
    <section id={section.id} className={styles.heroSection}>
      <FlexContainer className={styles.container}>
        <div className={styles.content}>
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
        </div>
        {section.image && (
          <div className={styles.imageContainer}>
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={350}
              className={styles.image}
              priority
            />
          </div>
        )}
      </FlexContainer>
    </section>
  );
}
