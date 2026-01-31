'use client';

import { useEffect, useState } from 'react';
import styles from './HeaderSection.module.css';
import { useTheme } from 'next-themes';

const FONT_SCALES = [0.8, 0.9, 1, 1.1, 1.2];

export function HeaderSection() {

  const [fontSizeIndex, setFontSizeIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeMobile, setActiveMobile] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("fontSizeIndex");
    const index = parseInt(stored ?? "2", 10);
    const safeIndex = isNaN(index) ? 2 : Math.min(Math.max(index, 0), FONT_SCALES.length - 1);

    setFontSizeIndex(safeIndex);
    document.documentElement.style.fontSize = `calc(${FONT_SCALES[safeIndex]} * var(--root-font-size))`;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (fontSizeIndex !== null) {
      localStorage.setItem("fontSizeIndex", fontSizeIndex.toString());
      document.documentElement.style.fontSize = `calc(${FONT_SCALES[fontSizeIndex]} * var(--root-font-size))`;
    }
  }, [fontSizeIndex]);

  const decreaseFontSize = () => {
    if (fontSizeIndex !== null && fontSizeIndex > 0) {
      setFontSizeIndex(fontSizeIndex - 1);
    }
  };

  const increaseFontSize = () => {
    if (fontSizeIndex !== null && fontSizeIndex < FONT_SCALES.length - 1) {
      setFontSizeIndex(fontSizeIndex + 1);
    }
  };

  const resetFontSize = () => setFontSizeIndex(2);

  if (!mounted || fontSizeIndex === null) return null;

  return (
    <section>
      <header>
        <section className={styles.topBar}>
          <div className={styles.container}>
            <nav>
              <ul>
                <li>
                  <a href="https://diariooficial.cepe.com.br/diariooficialweb/#/home?diario=MQ%3D%3D" target="_blank">Diário Oficial</a></li>
                <li>
                  <a href="https://transparencia.pe.gov.br/" target="_blank">Transparência</a></li>
                <li>
                  <a href="https://ouve.pe.gov.br/modalidades" target="_blank">Ouvidoria</a></li>
                <li>
                  <a href="http://www.licitacoes.pe.gov.br/web/ListaLicitacao.aspx" target="_blank">Licitações</a></li>
              </ul>
            </nav>

            <div className={styles.accessibilityButtonGroup}>
              <button onClick={decreaseFontSize}>A+</button>
              <button onClick={increaseFontSize}>A-</button>
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <svg className={styles.contrastIcon} fill="#fff" width={20} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z"></path></svg>
              </button>
            </div>

          </div>
        </section>
        <div className={styles.menuBar}>
          <div className={styles.container}>
            <div>
              <a href="https://www.pe.gov.br/" target="_blank">
                <img src="/logos/logo-pe.png" alt="Governo de Pernambuco" />
              </a>
            </div>

            <div className={styles.navigationContainer}>
              <nav>
                <ul>
                  <li><a href="https://www.pe.gov.br/">Início</a></li>
                  <li><a href="https://www.pe.gov.br/app/catalog/carta-de-servicos">Serviços</a></li>
                  <li><a href="https://www.pe.gov.br/app/catalog/noticias">Notícias</a></li>
                  <li><a href="https://www.pe.gov.br/app/catalog/secretarias-e-orgaos">Governo</a></li>
                </ul>
              </nav>

              <button className={styles.menuToggleButton} onClick={() => setActiveMobile(!activeMobile)}>
                <svg focusable="false" aria-hidden="true" fill="#0049a9" viewBox="0 0 24 24"><path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
              </button>
            </div>

            {activeMobile && (
              <div className={styles.navigationContainerMobile}>
                <nav>
                  <ul>
                    <li><a href="https://www.pe.gov.br/">Início</a></li>
                    <li><a href="https://www.pe.gov.br/app/catalog/carta-de-servicos">Serviços</a></li>
                    <li><a href="https://www.pe.gov.br/app/catalog/noticias">Notícias</a></li>
                    <li><a href="https://www.pe.gov.br/app/catalog/secretarias-e-orgaos">Governo</a></li>
                  </ul>
                </nav>

                <button className={styles.menuToggleButtonMobile} onClick={() => setActiveMobile(!activeMobile)}>
                  <svg focusable="false" aria-hidden="true" fill="#fff" viewBox="0 0 24 24"><path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
                </button>
              </div>
            )}

          </div>
        </div>
      </header>
    </section>
  );
}
