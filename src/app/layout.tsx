import type { Metadata } from 'next';
import { DictProvider } from '@/dictionaries/DictContext';
import LangToggle from '@/components/common/LangToggle/LangToggle';
import { inter, spaceGrotesk } from '@/fonts/fonts';
import '@/styles/globals.scss';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Adoptrix', template: '%s | Adoptrix' },
  description: 'Adoptrix is launching soon. Stay updated.'
  // ... your existing metadata fields
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <DictProvider defaultLang="en">
          {/* Simple header bar for the toggle. Replace with your real header later. */}
          <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            padding: '8px 16px',
            display: 'flex',
            justifyContent: 'flex-end',
            borderBottom: '1px solid rgba(0,0,0,.06)',
            background: 'rgba(255,255,255,.9)',
            backdropFilter: 'saturate(180%) blur(6px)'
          }}>
            <LangToggle />
          </div>

          {children}
        </DictProvider>
      </body>
    </html>
  );
}
