import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider, } from "thirdweb/react";
import Head from "next/head";
//import { domainName } from "../../const/yourDetails";
import "../styles/globals.css";

// This is the chain your dApp will work on.
//const chain = defineChain(167008);

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID,
  
});

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      client={client}
    
    >
      <Head>
        <title>NFT Gated Website Test Alpha-sdk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website with the new Alpha SDK"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
