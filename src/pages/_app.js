import Head from "next/head";
import { WalletConnectProvider } from "../components/WalletConnectProvider";
import "@solana/wallet-adapter-react-ui/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>web3sns</title>
      </Head>
			<WalletConnectProvider>
				<Component {...pageProps} />
			</WalletConnectProvider>
    </>
  );
}

export default MyApp;