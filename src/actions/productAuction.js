import * as TYPES from "./types";
// import * as psychicAPI from 'services/api-psychic'
import { getHttpWeb3Provider } from "../utils/web3Provider";
import { makeBatchCall } from "../utils/transaction";
import { NFT_ABI, NFT_AUCTION_ABI } from "../utils/abi";
import { CONTRACTS } from "../utils/constants";
import { requestAPICall } from "../utils/helpers/apiService";

const getAuctions =
  (search = "", page = "", refresh = false) =>
  async (dispatch, getState) => {
    try {
      const {
        product1: { results = [] },
      } = getState();
      if (!refresh && results.length !== 0) {
        return;
      }

      const web3 = getHttpWeb3Provider();

      const contract_auction = new web3.eth.Contract(NFT_AUCTION_ABI, CONTRACTS.AUCTION_HALL);
      
      const nftInstance = new web3.eth.Contract(NFT_ABI, CONTRACTS.NFT);
      const [ids_auc] = await makeBatchCall(contract_auction, [
        {
          methodName:"getIdsAuction", args:[]
        }
      ])
      if(ids_auc < 1){
        return;
      }

      const tokenAuctions = [];
      for (let i = 0; i < ids_auc.length; i++) {
        const [product] = await makeBatchCall(contract_auction, [
          { methodName: "getAuction", args: [ids_auc[i]] },
        ]);
        const [tokenURI] = await makeBatchCall(nftInstance, [
          { methodName: "tokenURI", args: [ids_auc[i]] },
        ]);
        tokenAuctions.push({
          ...product,
          uri: tokenURI,
        });
      }

      const products = [];
      tokenAuctions.forEach(async (item, i) => {
        const genesisIPFSData = await requestAPICall(item.uri).then((res) => {
          return res.data;
        });
        products.push({
          img: genesisIPFSData.image,
          title: genesisIPFSData.name,
          description: genesisIPFSData.description,
          duration: item.duration,
          startingPrice: item.startingPrice,
          endingPrice: item.endingPrice,
          seller: item.seller,
          isAuction: true,
          ids_auc: ids_auc[i],
          paymentType: item.paymentType,
        });
        if (i === tokenAuctions.length - 1) {
          await dispatch({
            type: TYPES.FETCH_AUCTIONS,
            payload: products,
          });
        }
      });

    } catch (error) {
      console.log("[getAuctions] error => ", error);
    }
  };

export default getAuctions;
