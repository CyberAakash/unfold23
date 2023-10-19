"use client"

import React from 'react'
// import type { NextPage } from "next";
import { SignInButton, ethos } from "ethos-connect";
import Disconnect from "./Disconnect";
import Mint from './Mint';
import Fund from './Fund';
import WalletActions from './WalletActions';

const Dashboard = () => {
    const { status, wallet } = ethos.useWallet();
  return (
    <>
      <div className="flex justify-between items-start">
        <div className="p-12 flex-1">Status: {status}</div>

        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-6">
          {!wallet ? (
            <SignInButton className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Connect
            </SignInButton>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Connected to wallet
                </h2>
                <code>{wallet.address}</code>
                <div className="place-content-center text-base font-medium text-ethos-primary space-x-1">
                  <div>
                    Wallet balance:{" "}
                    <code>{wallet.contents?.suiBalance.toString()}</code> Mist
                  </div>
                  <div className="text-xs text-gray-500">
                    (1 sui is 10^9 Mist)
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                First, fund this wallet from the Sui faucet:
                <Fund />
                then
                <Mint />
                or
                <WalletActions />
                or
                <Disconnect />
              </div>
            </div>
          )}
        </div>

        <div className="p-12 flex-1 flex justify-end">
          <ethos.components.AddressWidget
          // excludeButtons={[
          //   ethos.enums.AddressWidgetButtons.WalletExplorer
          // ]}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard