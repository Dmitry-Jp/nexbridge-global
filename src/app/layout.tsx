import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NexBridge Global | International Business Consulting',
    template: '%s | NexBridge Global'
  },
  description:
    'International consulting, translation and business support connecting Japan with global markets.',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'NexBridge Global',
    description:
      'International consulting, translation and business support connecting Japan with global markets.',
    images: ['/og.svg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexBridge Global',
    description:
      'International consulting, translation and business support connecting Japan with global markets.',
    images: ['/og.svg']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {gaId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { anonymize_ip: true });
                `
              }}
            />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
