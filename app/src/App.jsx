import { useMemo } from "react"
import { BlogProvider } from "src/context/Blog"
import { Router } from "src/router"
import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "./App.css"


export const App = () => {

  const endpoint = "https://hardworking-sparkling-reel.solana-devnet.discover.quiknode.pro/38559f024f3e8f62287e4a809901e7f75d64ec69/"
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
  ],[])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  )
}
