import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import '@uigovpe/styles';
import 'material-symbols';
import './globals.css';
import { ThemeProvider } from "next-themes";
import { HeaderSection } from '@/components/sections/HeaderSection';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portal PE - Governo de Pernambuco',
  description: 'Portal institucional do Governo do Estado de Pernambuco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <HeaderSection />
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
