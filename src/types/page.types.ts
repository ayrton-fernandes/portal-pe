// Interfaces para tipagem das páginas dinâmicas

export interface AccordionItem {
  title: string;
  content: string;
}

export interface PageSection {
  id: string;
  type: 'hero' | 'contact' | 'accordion_group';
  title: string;
  description?: string;
  image?: string;
  content?: string;
  accordions?: AccordionItem[];
}

export interface PageData {
  slug: string;
  title: string;
  subtitle?: string;
  sections: PageSection[];
}

export interface PagesData {
  pages: PageData[];
}
