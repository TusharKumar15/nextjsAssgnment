// Library
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

// Utils
import "@/styles/globals.css";

// Components
import { Navbar } from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Navbar/>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
