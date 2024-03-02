import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "@next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={plus_jakarta_sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
