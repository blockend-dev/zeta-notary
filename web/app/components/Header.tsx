import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ethers } from 'ethers';

const Header: React.FC = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if (typeof window !=='undefined') {

        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];

        setUserAddress(address);
      }
      
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  useEffect(()=>{
    connectWallet()
  },[userAddress])

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link className="text-2xl font-bold text-gray-800" href="#">
          Notary DApp
        </Link>
        <div className="flex items-center">
          {userAddress ? (
            <span className="text-gray-600 bg-gray-200 py-2 px-4 rounded-full text-sm">
              Connected: {truncateAddress(userAddress)}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full text-sm"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
