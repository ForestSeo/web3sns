import { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

const BalanceComponent = () => {
  const { publicKey, wallet } = useWallet();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        try {
          const connection = new Connection("https://api.devnet.solana.com");
          const balance = await connection.getBalance(publicKey);
          setBalance(balance / 1000000000);
        } catch (error) {
          console.error("Failed to fetch balance:", error);
        }
      }
    };

    fetchBalance();
  }, [publicKey]);

  return (
    <h2>Balance: {balance} SOL</h2>
  );
};

export default BalanceComponent;
