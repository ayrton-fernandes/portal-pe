import DOMPurify from 'dompurify';

/**
 * Sanitiza conteúdo HTML para prevenir ataques XSS
 * @param htmlContent - String HTML a ser sanitizada
 * @returns String HTML sanitizada
 */
export function sanitizeHtml(htmlContent: string): string {
  // Verifica se está no ambiente do navegador
  if (typeof window !== 'undefined') {
    return DOMPurify.sanitize(htmlContent, {
      ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'div', 'span', 'br', 'a', 'img', 'u', 'style', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'blockquote', 'pre', 'code', 'hr', 'iframe', 'video', 'source', 'figure', 'figcaption', 'caption', 'small', 'sup', 'sub', 'b', 'i', 'address', 'cite', 'q', 's', 'del', 'ins', 'kbd', 'mark', 'ruby', 'rt', 'rp'],
      ALLOWED_ATTR: ['href', 'class', 'target', 'rel', 'src', 'alt', 'title', 'width', 'height', 'srcset', 'style', 'frameborder', 'allow', 'allowfullscreen', 'loading', 'decoding', 'data-*', 'aria-*', 'role', 'colspan', 'rowspan', 'align', 'valign', 'type', 'controls', 'autoplay', 'muted', 'loop', 'poster', 'preload', 'name', 'content', 'http-equiv', 'charset', 'sandbox', 'referrerpolicy' ,'scrolling' ,'allowtransparency' ],
    });
  }
  // No servidor, retorna o conteúdo sem sanitização (será sanitizado no cliente)
  return htmlContent;
}

/**
 * Cria objeto para uso com dangerouslySetInnerHTML
 * @param htmlContent - String HTML a ser renderizada
 * @returns Objeto formatado para dangerouslySetInnerHTML
 */
export function createMarkup(htmlContent: string): { __html: string } {
  return { __html: sanitizeHtml(htmlContent) };
}
