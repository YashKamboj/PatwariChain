import FileUploadIcon from "@mui/icons-material/FileUpload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styled from "styled-components";
// import { useCrowdfundingProjectFunctionWriter } from "../../hooks";
// import {
//   usePublishedProjs,
// } from "../../read";
// import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
// import {toWei } from "../../utils"; 
import {storeAsset} from "../../hooks_copy"

const HeroSection = () => {
  const [coordinates, setCoordinates] = useState(["", "", "", ""]);
  const [ownerName, setOwnerName] = useState("");
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (e, index) => {
    const newCoordinates = [...coordinates];
    newCoordinates[index] = e.target.value;
    setCoordinates(newCoordinates);
  };

  const handleOwnerNameChange = (e) => {
    setOwnerName(e.target.value);
  };

  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await mintNFT(coordinates, ownerName, image);
  //     alert('NFT minted successfully!');
  //   } catch (error) {
  //     alert(`Error minting NFT: ${error}`);
  //   }
  // };
 
  // const publishedProjsAddress = usePublishedProjs(1);
  // const addRecentTransaction = useAddRecentTransaction();

  // const { writeAsync, isError } = useCrowdfundingProjectFunctionWriter({
  //   contractAddress: publishedProjsAddress || "",
  //   functionName: "makeDonation",
  // });

 

  const captureFile = async (e) => {
    
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    console.log(file)
    // storeFiles(file)
    
    const src = URL.createObjectURL(e.target.files[0]);
    setImagePreview(src);
  };
  
  const handleDonate = async (e) => {
    await storeAsset(coordinates[0],coordinates[1], coordinates[2], coordinates[3], ownerName )
    // await mintNFT()
    // ownerName ,coordinates[0],coordinates[1], coordinates[2], coordinates[3]
    console.log("done")
  };

  const inputStyle = {
    color: "white", // Set the desired color here
  };
  const labelStyle = {
    color: "white", // Set the desired color here
  };
  


  return (
    <Wrapper>
      <div className="text-container">
        <div className="App">
          <h1>Registration</h1>
          <form
            // onSubmit={handleSubmit}
            style={{ padding: "1.7rem 5rem", color: "#ffffff" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15rem",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "22rem",
                }}
              >
                <ValidationTextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  sx={{ color: "#ffffff" }}
                  label="Owner Name"
                  value={ownerName}
                  onChange={handleOwnerNameChange}
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="Coordinate 1:"
                  value={coordinates[0]}
                  onChange={(e) => handleInputChange(e, 0)}
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="Coordinate 2:"
                  value={coordinates[1]}
                  onChange={(e) => handleInputChange(e, 1)}
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="Coordinate 3:"
                  value={coordinates[2]}
                  onChange={(e) => handleInputChange(e, 2)}
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="Coordinate 4:"
                  value={coordinates[3]}
                  onChange={(e) => handleInputChange(e, 3)}
                  variant="outlined"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="City"
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="District"
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{
                    style: labelStyle,
                  }}
                  InputProps={{
                    style: inputStyle,
                  }}
                  id="filled-basic"
                  label="Postal Code"
                  variant="outlined"
                />

                <div
                  style={{
                    border: "3px",
                    borderStyle: "solid",
                    padding: "1rem 1rem",
                    borderRadius: "15px",
                    backgroundColor: "#4CA89D",
                  }}
                >
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="file"
                      onChange={captureFile}
                      style={{ display: "none", cursor: "pointer" }}
                    />
                    <div style={{ display: "flex" }}>
                      <FileUploadIcon
                        color="white"
                        size={25}
                        className="mr-3"
                      />
                      Upload Your Photograph
                    </div>
                  </label>
                </div>
                <div
                  style={{
                    border: "3px",
                    borderStyle: "solid",
                    padding: "1rem 1rem",
                    borderRadius: "15px",
                    backgroundColor: "#4CA89D",
                  }}
                >
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="file"
                      style={{ display: "none", cursor: "pointer" }}
                    />
                    <div style={{ display: "flex" }}>
                      <FileUploadIcon
                        color="white"
                        size={25}
                        className="mr-3"
                      />
                      Upload Your land photo
                    </div>
                  </label>
                </div>
                <div
                  style={{
                    border: "3px",
                    borderStyle: "solid",
                    padding: "1rem 1rem",
                    borderRadius: "15px",
                    backgroundColor: "#4CA89D",
                  }}
                >
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="file"
                      style={{ display: "none", cursor: "pointer" }}
                    />
                    <div style={{ display: "flex" }}>
                      <FileUploadIcon
                        color="white"
                        size={25}
                        className="mr-3"
                      />
                      Upload Your Govt. authorized land documents
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              style={{ background: "#4CA89D", marginTop: "4rem" }}
              // type="submit"
              onClick={handleDonate}
            >
              Mint NFT
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const ValidationTextField = styled(TextField)({
  borderColor: "blue",
  borderWidth: 2,
});

const Wrapper = styled.div`
  position: relative;
  height: 42.3rem;
  overflow: hidden;
  background: url(bgimg.jpeg) no-repeat center;
  background-size: auto;
  opacity: 0.8;
  background-size: cover;

  h1 {
    color: #fff;
    font-size: 3rem;
  }

  .text-container {
    margin: 1rem 0rem 5rem 0rem;
    text-align: center;
    bottom: 0;
  }
`;

export default HeroSection;
