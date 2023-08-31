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
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
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