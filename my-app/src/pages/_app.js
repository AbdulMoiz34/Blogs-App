import Head from '@/components/head/Head';
import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BeatLoader } from "react-spinners";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <BeatLoader color="#8a2be2" loading={true} size={15} />
        </div>
      )}

      <main className={`transition-opacity ${isLoading ? 'hidden' : 'block'}`}>
        <Head text="Blog App" />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </div>
  );
}