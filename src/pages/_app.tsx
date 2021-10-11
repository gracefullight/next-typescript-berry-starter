import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RecoilRoot } from 'recoil';

import theme from '../theme';
import createEmotionCache from '../createEmotionCache';

interface AppWithEmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientEmotionCache }: AppWithEmotionCacheProps) {
  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <CssBaseline />
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}
export default MyApp;
