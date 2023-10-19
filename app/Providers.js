"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Chain, EthosConnectProvider } from "ethos-connect";
import { NETWORK } from "@/lib/constants";
import Head from "next/head";

export function Providers({ children }) {
  const ethosConfiguration = {
    apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
    preferredWallets: ["Ethos Wallet"],
    network: NETWORK,
    chain: Chain.SUI_TESTNET,
  };
  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
      // dappName="EthosConnect Example App"
      // dappIcon={<ExampleIcon />}
      connectMessage="Your connect message goes here!"
    >
      <CacheProvider resetCSS={false}>
        <ChakraProvider resetCSS={false}>{children}</ChakraProvider>
      </CacheProvider>
    </EthosConnectProvider>
  );
}
