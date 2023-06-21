import { atom } from 'jotai';

export const ethereumAtom = atom(null);
export const walletAddressAtom = atom(null);

export const writeWalletAddressAtom = atom(null, (_get, set, newAddress) => {
  set(walletAddressAtom, newAddress);
});

walletAddressAtom.onMount = async setWalletAddress => {
  const eth = (window as any).ethereum;
  if (eth) {
    const accounts = await (eth as any).request({ method: 'eth_accounts' });
    setWalletAddress(accounts[0]);
  }
};

writeWalletAddressAtom.onMount = async setWalletAddress => {
  const eth = await (window as any).ethereum;
  if (eth) {
    const handleAccountsChanged = (accounts: string[]) => {
      setWalletAddress(accounts[0]);
    };
    eth.on('accountsChanged', handleAccountsChanged);

    return () => {
      eth.removeListener('accountsChanged', handleAccountsChanged);
    };
  }
};

export const walletStatusAtom = atom(async get => {
  const address = get(walletAddressAtom);
  return address ? 'connected' : 'disconnected';
});
