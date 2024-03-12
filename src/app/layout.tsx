import StyledComponentsRegistry from '../app/registry';
import GlobalStyle from '../styles/GlobalStyles';
import RecoilRootProvider from '@/lib/recoilRootProvide';
import ReactQueryProvider from '@/lib/reactQuery';
import type { Metadata } from 'next';
import Script from 'next/script';

import ScriptLoader from '@/lib/Script';

export const metadata: Metadata = {
  title: 'School Eats!',
  description: '대학생들의 점심 고민을 해결해줄 School Eats!',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'School Eats!',
    description: '대학생들의 점심 고민을 해결해줄 School Eats!',
    url: 'https://SchoolEats.vercel.app/',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/school-eats.appspot.com/o/metaimage.jpg?alt=media&token=4a5bbe21-8cc3-4468-adc8-52f937cd477f',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <RecoilRootProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </RecoilRootProvider>
        </StyledComponentsRegistry>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services,clusterer,drawing`}
          strategy="beforeInteractive"
        ></Script>
        <ScriptLoader />
        <link rel="icon" href="/logo.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </body>
    </html>
  );
}
