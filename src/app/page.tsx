'use client';

import { useAtom } from 'jotai';
import {
  ethereumAtom,
  walletAddressAtom,
  walletStatusAtom,
} from '@/jotai/atoms';
import { useEffect } from 'react';

export default function Home() {
  const [eth, setEth] = useAtom(ethereumAtom);
  const [address, setAddress] = useAtom(walletAddressAtom);
  const [walletStatus, setWalletStatus] = useAtom(walletStatusAtom);

  useEffect(() => {
    if (typeof window !== undefined) {
      const isMetaMaskInstalled = Boolean(
        window.ethereum && window.ethereum.isMetaMask,
      );

      // const handleAccountsChanged = (accounts: string[]) => {
      //   setAddress(accounts[0]);
      // };

      if (isMetaMaskInstalled) {
        setEth(window.ethereum);
        // window.ethereum.on('accountsChanged', handleAccountsChanged);
      }
    }
    // return () => {
    //   window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
    // };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{walletStatus + address}</h1>
    </main>
  );
}
