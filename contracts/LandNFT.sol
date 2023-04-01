// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LandNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Land {
        string[4] coordinates;
        string ownerName;
        string aadhaar;
    }

    mapping(uint256 => Land) private _lands;

    constructor() ERC721("LandNFT", "LND") {}

    function mintLandNFT(string[4] memory coordinates, string memory ownerName, string memory aadhaar) public returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _lands[tokenId] = Land(coordinates, ownerName, aadhaar);
        _safeMint(msg.sender, tokenId);
        return tokenId;
    }

    // function getTotalNumber() public view returns (uint256){
    //     return _tokenIds;
    // }

    function getLandCoordinates(uint256 tokenId) public view returns (string[4] memory) {
        return _lands[tokenId].coordinates;
    }

    function getLandOwnerName(uint256 tokenId) public view returns (string memory) {
        return _lands[tokenId].ownerName;
    }

    function getAadhaar(uint256 tokenId) public view returns (string memory) {
        return _lands[tokenId].aadhaar;
    }
}