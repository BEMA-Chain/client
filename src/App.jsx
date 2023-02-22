import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="#">BEMA CHAIN</a>!
        </h1>

        <p className="description">
          !Wellcome to our website! Here you will find everything you need to explore and enjoy our plataform.
        </p>

        <div className="connect">
          <ConnectWallet />
        </div>

        <div className="grid">
          <a href="#" className="card">
            <h2>Whitelist &rarr;</h2>
            <p>
            Guides, references and resources to help you build our platform
            </p>
          </a>

          <a href="https://mumbai.polygonscan.com/address/0x3b31945f7f18e7b99a6c95c1083891d300bf83a2#tokentxns" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
            Deploy, configure and manage smart contracts from the dashboard.
            </p>
          </a>

          <a href="#" className="card">
            <h2>Team &rarr;</h2>
            <p>
            our team trained to create the conditions and provide optimal development.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
