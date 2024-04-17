import { postAPI, getAPI } from "./api";

export const loginUser = async (accountAddress) => {
    const user = {
        address: accountAddress
    }
    const data = await postAPI('user/login', user);
    return data;
}

export const getAllNFT = async () => {
    const data = await getAPI('nft/');
    return data;
}


export const getProfile = async (accountAddress) => {
    const data = await getAPI('user/',accountAddress);
    return data;
}
