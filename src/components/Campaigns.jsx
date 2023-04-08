import { useEffect, useState } from 'react';
// import { fetchNFTs } from  "../hooks_copy"
import Campaign from "./Campaign";
import img1 from "../../image1.jpeg"
import img2 from "../../image2.jpeg"
import img3 from "../../download.jpeg"
import { ethers } from 'ethers';

import NFTCONTRACT_ABI from '../abis/nftcontractabi.json'
import { FACTORY_CONTRACT_ADDRESS } from "../constants";

function Campaigns() {
  const [nftIds, setNftIds] = useState([]);
  
  async function getNFTs() {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, NFTCONTRACT_ABI, signer);
    const userAddress = await signer.getAddress(); 

    const balance = await contract.balanceOf(userAddress);
    const nfts = [];

    for (let i = 0; i < balance.toNumber(); i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(userAddress, i);
      nfts.push(tokenId.toNumber());
    }

    // setNftIds(nfts);
    console.log(nfts);
    return nfts
    
  }

  const data = [
    {
      title: "Baljeet singh",
      coordinates: ["41 52.6813, 2 43.1460", "41 81.3659, 2 02.5167", "41 72.3928, 3 70.3410", "41 62.9018, 2 80.4418"],
      image: img1
    },
    {
        title: "Babu Ram",
        coordinates: ["41 52.6813, 2 43.1460", "41 81.3659, 2 02.5167", "41 72.3928, 3 70.3410", "41 62.9018, 2 80.4418"],
        image: img2
      },
    {
        title: "Babu Ram 1",
        coordinates: ["41 52.6813, 2 43.1460", "41 81.3659, 2 02.5167", "41 72.3928, 3 70.3410", "41 62.9018, 2 80.4418"],
        image: img3
    }
]

 
  useEffect(() => {
    // const getNFTs = async () => {
    //   const fetchedNFTs = await fetchNFTs();
    //   setNFTs(fetchedNFTs);
    // };
    // getNFTs();
    // fetchNFTs()
    // getNFTs()
  }, []);


  return (
    <>
      <div className="text-center font-bold text-xl mb-2">
        Your NFTs
      </div>
      {/* <button onClick={getNFTs()}>qwe</button> */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
       {data.map((nft) => {
            return (
              <div >
                <Campaign title={nft.title} image={nft.image} Coordinate1={nft.coordinates[0]} Coordinate2={nft.coordinates[1]} Coordinate3={nft.coordinates[2]} Coordinate4={nft.coordinates[3]} />

              </div>
            );
          }
        )}
      </div>

{/* <div>
      {nfts.map((nft) => (
        <div key={nft.tokenId}>
          <p>Token ID: {nft.tokenId}</p>
          <p>Owner: {nft.owner}</p>
          <p>Coordinates: {nft.coordinates}</p>
          <p>Owner Name: {nft.ownerName}</p>
          <p>Aadhaar: {nft.aadhaar}</p>
        </div>
      ))}
    </div> */}
      
    </>
  );
}

export default Campaigns;