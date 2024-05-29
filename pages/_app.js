import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="CTCAltmttI3FKYw7b0kceqtkP0QXBnnAUrFBCpTPKa4"
        />
      </Head>
      <button type="button" className="button-bottom-right" onClick={scrollToTop}>
        <img src="/top.png" alt="" />
      </button>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
