import Link from 'next/link';
import { Typography, Card, FlexContainer } from '@uigovpe/components';
import pagesData from '@/data/pages.json';
import { PagesData } from '@/types/page.types';
import styles from './page.module.css';

export default function HomePage() {
  const data = pagesData as PagesData;

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <FlexContainer className={styles.headerContainer}>
          <Typography variant="h1" fontWeight="bold" className={styles.title}>
            Portal do Governo de Pernambuco
          </Typography>
          <Typography variant="p" className={styles.subtitle}>
            Acesse as secretarias e órgãos do governo
          </Typography>
        </FlexContainer>
      </header>

      <section className={styles.content}>
        <div className={styles.grid}>
          {data.pages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className={styles.cardLink}>
              <Card elevation="low" className={styles.card}>
                <Typography variant="h3" fontWeight="bold" className={styles.cardTitle}>
                  {page.title}
                </Typography>
                {page.subtitle && (
                  <Typography variant="p" className={styles.cardSubtitle}>
                    {page.subtitle}
                  </Typography>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
