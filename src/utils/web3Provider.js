import Web3 from 'web3';
import { HTTP_PROVIDER_URL } from './constants';

const getHttpWeb3Provider = () => {
    console.log('HTTP_PROVIDER_URL:', HTTP_PROVIDER_URL);
	return new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_URL));
};

export {
    getHttpWeb3Provider,
}