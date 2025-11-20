// import type { Metadata } from 'next'
 import './globals.css'

// export const metadata: Metadata = {
//   title: 'GreenQuest - Plant Your Future',
//   description: 'Every plant you choose adds life back to Earth',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white font-mono antialiased">
//         {children}
//       </body>
//     </html>
//   )
// }

import * as React from 'react';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import SessionProviderWrapper from './components/SessionProviderWrapper';

export const metadata: Metadata = {
  title: 'GreenQuest - Plant Your Future',
  description: 'Every plant you choose adds life back to Earth',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono antialiased">
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}