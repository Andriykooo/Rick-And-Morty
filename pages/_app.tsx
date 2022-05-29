import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from '../src/store/store';

import Loading from '../src/components/Loading';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <Provider store={store}>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </Provider>
  );
}

export default MyApp;
