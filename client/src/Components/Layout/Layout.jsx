import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }} ref={mainRef}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "GemStone Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb,express",
  author: "SRJ",
};

export default Layout;