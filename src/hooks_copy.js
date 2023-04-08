import NFTCONTRACT_ABI from './abis/nftcontractabi.json'
import { FACTORY_CONTRACT_ADDRESS } from "./constants";
import { ethers } from "ethers";
import image from "../download.jpeg"
import { NFTStorage, File } from "nft.storage"

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRhRWRCMzQzNEJjN2I5RTRBOTQzMjBENjgwMGFGNzdkMEM0RmU4MDEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MDM0Mzc3ODY0NCwibmFtZSI6IlBhdHdhcmlDaGFpbiJ9.ah9oBmBMhM0GAfsaolbH0VeNpe8N02x1c9SGg1UwjjE"

const getNFTContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const nftContract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, NFTCONTRACT_ABI, signer);
  return nftContract;
};

const nftC=getNFTContract()

export async function storeAsset(name, coordinates1, coordinates2, coordinates3, coordinates4, aadhar) {
  const client = new NFTStorage({ token: API_KEY })
  const metadata = await client.store({
      name: name,
      description: 'My ExampleNFT is an awesome artwork!',
      aadhaar: aadhar,
      image: image && new File([image], `image.jpg`, { type: 'image/jpg' }),
      coordinates: [coordinates1, coordinates2, coordinates3, coordinates4]
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


export const fetchNFTs = async () => {
    
    // const totalSupply = await contract.totalSupply().call();
  
    // const nfts = [];
    // for (let i = 1; i <= totalSupply; i++) {
    //   const owner = await contract.ownerOf(i).call();
    //   const coordinates = await contract.getLandCoordinates(i);
    //   const ownerName = await contract.getLandOwnerName(i);
    //   const aadhaar = await contract.getAadhaar(i);
  
    //   nfts.push({
    //     tokenId: i,
    //     owner,
    //     coordinates,
    //     ownerName,
    //     aadhaar
    //   });
    // }
  
    // return nfts;
    // const nftC=getNFTContract();
    //     const data=await nftC.getAllNFTDetails();
    //     const aNFTS=data.map(d=>({
    //       owner:d.ownerName,

    //     }))
    //     console.log(aNFTS.owner + "qwewew")
        // setAllNFT(aNFTS)
        // return aNFTS;

        const userAddress = await signer.getAddress();
        const balance = await nftC.balanceOf(userAddress);
        const nfts = [];

        for (let i = 0; i < balance.toNumber(); i++) {
          const tokenId = await contract.tokenOfOwnerByIndex(userAddress, i);
          const tokenURI = await contract.tokenURI(tokenId);
          nfts.push({ tokenId: tokenId.toString(), tokenURI });
        }
        
        return nfts;
  };


