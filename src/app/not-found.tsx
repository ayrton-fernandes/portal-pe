import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1 style={{ color: '#1351B4', marginBottom: '1rem' }}>
        404 - Página não encontrada
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        A página que você está procurando não existe.
      </p>
      <Link 
        href="/"
        style={{
          backgroundColor: '#1351B4',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Voltar ao início
      </Link>
    </main>
  );
}
