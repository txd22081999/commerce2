import type { AppProps } from "next/app";
import MainLayout from "../layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <main className="bg-background min-h-screen">
        <Component {...pageProps} />
      </main>
    </MainLayout>
  );
}

export default MyApp;
