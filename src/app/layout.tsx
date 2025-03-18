import type { Metadata } from 'next';
import { Castoro, Inter } from 'next/font/google';
import './globals.css';

const castoro = Castoro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--castoro',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--inter',
});

export const metadata: Metadata = {
  title: 'aBoard',
  description: 'aBoard by create next app',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${castoro.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
