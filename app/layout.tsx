import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://yuliia-diakova-qa-mentor.jul1kjd.chatgpt.site',
  ),
  title: 'Yuliia Diakova — QA Mentoring & IT English',
  description:
    'Practical QA mentoring, pair testing and English coaching for junior QA engineers and people in tech.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Yuliia Diakova — QA Mentoring & IT English',
    description:
      'Practical QA mentoring, pair testing and English coaching for junior QA engineers and people in tech.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Yuliia Diakova — QA mentoring and IT English',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuliia Diakova — QA Mentoring & IT English',
    description:
      'Practical QA mentoring, pair testing and English coaching for junior QA engineers and people in tech.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
