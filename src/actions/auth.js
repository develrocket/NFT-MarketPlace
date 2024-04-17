import * as TYPES from './types';
import { loginUser } from '../services/userAPI';
import { ethers } from "ethers";

const setUserToken = ({ accountRS, user }) => dispatch => {
  dispatch(setAccountRS(accountRS));
  dispatch(setCurrentUser(user));
};

const setAccountRS = async accountRS => {
    localStorage.setItem('accountRS', accountRS);
    
    const userData = await loginUser(accountRS);
    console.log(userData);
    return {
        type: TYPES.SET_ACCOUNT_RS,
        payload: accountRS
    };
};

const setSignature = async (msg) => {
    console.log(msg);
    if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(msg);
    const address = await signer.getAddress();
    console.log(msg, signature, address);
    const signData = {
        msg,
        signature,
        address
    };

    return {
        type: TYPES.SET_ACCOUNT_RS,
        payload: signData
    }
}

const setCurrentUser = currentUser => {
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  return {
    type: TYPES.SET_CURRENT_USER,
    payload: currentUser
  };
};

const logoutUser = () => dispatch => {
  localStorage.clear();
  dispatch(setAccountRS(''));
  dispatch(setCurrentUser({}));
};

export {
  setUserToken,
  setAccountRS,
  setCurrentUser,
  logoutUser
}