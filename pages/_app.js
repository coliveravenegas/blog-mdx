import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import H1 from "../components/H1";

const components = {
  h1: H1,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
