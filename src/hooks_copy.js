import NFTCONTRACT_ABI from './abis/nftcontractabi.json'
import { FACTORY_CONTRACT_ADDRESS } from "./constants";
import { ethers } from "ethers";
import image from "../download.jpeg"
import { NFTStorage, File } from "nft.storage"
import { useWaitForTransaction } from 'wagmi';

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRhRWRCMzQzNEJjN2I5RTRBOTQzMjBENjgwMGFGNzdkMEM0RmU4MDEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MDM0Mzc3ODY0NCwibmFtZSI6IlBhdHdhcmlDaGFpbiJ9.ah9oBmBMhM0GAfsaolbH0VeNpe8N02x1c9SGg1UwjjE"



const getNFTContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const nftContract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, NFTCONTRACT_ABI, signer);
  return nftContract;
};

const nftC=getNFTContract()

export async function storeAsset(name, coordinates1, coordinates2, coordinates3, coordinates4, image1) {
  const client = new NFTStorage({ token: API_KEY })
  const metadata = await client.store({
      name: 'Baljeet singh',
      description: 'My ExampleNFT is an awesome artwork!',
      aadhaar: "344393482492",
      image: image && new File([image], `image.jpg`, { type: 'image/jpg' }),
      coordinates: ["41 52.6813, 2 43.1460", "41 81.3659, 2 02.5167", "41 72.3928, 3 70.3410", "41 62.9018, 2 80.4418"]
  })
  
  
  
  console.log("running")
  console.log("Metadata stored on Filecoin and IPFS with URL:", metadata)
  await nftC.mintLandNFT( metadata.data.coordinates, metadata.data.name, metadata.data.aadhaar ,{ gasLimit: 500000 })
  console.log("NFT minted")
  
}
// mintNFT(metadata.data.name, metadata.data.coordinates[4])
// const xyz = await metadata;

const networkUrl = 'https://rpc-mainnet.matic.network';

const provider = new ethers.providers.JsonRpcProvider(networkUrl);
const signer = provider.getSigner();

const contract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, NFTCONTRACT_ABI, signer);


// function makeStorageClient () {
//   return new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlBYzVlOTc3NDFhNDU1ZDEyYzJiNzA5NzBDMTNmYzMxY0VBNDE4M0UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODAzMzQ1MTU1MjEsIm5hbWUiOiJQYXR3YXJpQ2hhaW4ifQ.y-RBOiIIQVIiZTvSyCiioff0drC8qTE6XmAaKaQp1Fg" })
// }


export const fetchNFTs = async () => {
    
    const totalSupply = await contract.totalSupply().call();
  
    const nfts = [];
    for (let i = 1; i <= totalSupply; i++) {
      const owner = await contract.ownerOf(i).call();
      const coordinates = await contract.getLandCoordinates(i);
      const ownerName = await contract.getLandOwnerName(i);
      const aadhaar = await contract.getAadhaar(i);
  
      nfts.push({
        tokenId: i,
        owner,
        coordinates,
        ownerName,
        aadhaar
      });
    }
  
    return nfts;
  };


