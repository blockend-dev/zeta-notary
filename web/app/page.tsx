"use client";

import { useEffect, useState } from "react";
import AddNotary from "@/app/components/AddNotary";
import ListNotary from "@/app/components/ListNotary";
import Header from '@/app/components/Header'
import "../styles/globals.css";
import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="h1">
          <Header />
          <AddNotary />
          <h1 className="notary-h1">Decentralized Notary Service</h1>
        </div>
        {/* {isConnected && (
        <div className="h2 text-center">Your address: {userAddress}</div>
      )} */}
      </div>
      <ListNotary />
    </>
  );
}