"use client";

import { useEffect, useState } from "react";
import AddNotary from "../components/AddNotary";
import ListNotary from "../components/ListNotary";
import "../styles/globals.css";
import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { useAccount } from "wagmi";
import ListAllNotary from "~~/components/ListAllNotary";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="h1">
          <AddNotary />
          <h1 className="notary-h1">Decentralized Notary Service</h1>
        </div>
        {/* {isConnected && (
        <div className="h2 text-center">Your address: {userAddress}</div>
      )} */}
      </div>
      <ListNotary />
      <ListAllNotary />
    </>
  );
}