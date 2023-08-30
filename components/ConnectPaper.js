import {
    ThirdwebProvider,
    ConnectWallet,
    localWallet,
    paperWallet,
  } from "@thirdweb-dev/react"; 
  export default function ConnectPaper() {
    return (
      <ThirdwebProvider
        activeChain="polygon"
        clientId="952a3d5f52dc045254f59942a71c2b02"
        supportedWallets={[
          localWallet(),
          paperWallet({
            paperClientId: "adc009f0-3363-451c-8469-68cc1536d050",
          }),
        ]}
      >
        <ConnectWallet theme={"dark"} />
      </ThirdwebProvider>
    );
  }