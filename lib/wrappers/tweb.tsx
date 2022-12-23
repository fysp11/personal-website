import type { FC, PropsWithChildren } from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";


const ThirdWebWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Polygon}
            supportedChains={[
                ChainId.Mainnet,
                ChainId.Polygon,
            ]}
        >
            {children}
        </ThirdwebProvider>
    )
}

export default ThirdWebWrapper;
