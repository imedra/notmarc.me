import { useEffect } from "react";
import 'tailwindcss/tailwind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'false',
      duration: 350,
      easing: 'ease-out-cubic',
      disable: 'mobile'
    });
  });
  return <Component {...pageProps} />
}

export default MyApp
