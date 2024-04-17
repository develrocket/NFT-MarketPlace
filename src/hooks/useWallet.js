import { useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'

const useWallet = () => {
    const { account, library } = useWeb3React();

    const signMessage = useCallback(async () => {
        const msg = "FASTNFT";
        const signer = library.getSigner();
        const signature = await signer.signMessage(msg);
        const address = await signer.getAddress();
        console.log(msg, signature, address);
        const signData = {
            msg,
            signature,
            address
        };

        console.log('signData:', signData)

        return signData;

    }, []);

    return { signMessage }
}

export default useWallet;
