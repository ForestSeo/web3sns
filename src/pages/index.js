
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styles from '@/styles/Home.module.css'
import BalanceComponent from "@/components/BalanceComponent.js"

export default function Home() {
  return (
    <>
			<WalletMultiButton></WalletMultiButton>
			<BalanceComponent></BalanceComponent>
    </>
  )
}
