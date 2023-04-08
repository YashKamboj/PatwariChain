import React from 'react'
import styled from 'styled-components'; 
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const HeroSection = () => {
  return (
  <div>
    <Wrapper>
      <div className="text-container">
        <div
        style={{
          position: 'absolute',
           top: '50%', left: '50%', 
           transform: 'translate(-50%, -50%)',
           fontFamily: 'Chilanka',
           fontWeight: '100'
        }}>
          <h1>Welcome to PatwariChain</h1>
          <h4>Secure your Land with an NFT Brand</h4>
         
        </div>
        <Button variant="contained" size="large" href="/Mint"
           sx={{
             bgcolor: 'green',
             color: 'white',
             py: '1.0rem',
             px: '2.5rem',
             fontSize:'20px',
             top:'10rem',
             position:'fixed',
             '&:hover': {
               bgcolor: '#006400',
             },
             right: "0px"
           }}>
          Register Now!
          </Button>
       </div>
    </Wrapper>
    <Wrapper1>
    <div className='flex-container'>
    <div className='text-content'>
     <h1>The Problem with existing Methods:</h1>
     <p>Normal property papers or land titles are often paper-based and can be easily tampered with or lost, leading to disputes over land ownership.</p>
    </div>
    <div className='image-content'>
      <img src="image1.jpeg" height={'200px'} width={'400px'}/>
    </div>
    </div>

    <div className='flex-container1'>
    <div className='text-content1'>
    <img src="image1.jpeg" height={'200px'} width={'400px'}/>
    </div>
    <div className='image-content1'>
    <h1>The Problem with existing Methods:</h1>
     <p>Our solution using NFTs and blockchain technology creates a tamper-proof record of land ownership that is transparent, accessible, and secure. This ensures that the land ownership record cannot be disputed easily and can be easily accessed and verified by farmers and other stakeholders.</p>
    </div>
    </div>

    <div className='flex-container'>
    <div className='text-content'>
     <h1>The Problem with existing Methods:</h1>
     <p> Additionally, our solution allows for easy transfer of ownership, reduces the time and cost associated with land transactions, and potentially opens up new financial opportunities for farmers.</p>
    </div>
    <div className='image-content'>
      <img src="image1.jpeg" height={'200px'} width={'400px'}/>
    </div>
    </div>
    </Wrapper1>
    </div>
  ) 
}

const Wrapper = styled.div`
    position: relative;
    height: 44.1rem;
    overflow: hidden;
    background: url(home.jpg) no-repeat center;
    background-size : cover;
    margin-top: 0.25rem;
    opacity: 0.85;
    
    h1{
      color: #fff; 
      font-size: 4rem;
    }
    h4{
      color:#fff;
      font-size:2rem;
    }
    .text-container{
      margin: 1rem 0rem 5rem 0rem;
      text-align: center;
      bottom: 0;
    }
  `;

  const Wrapper1 = styled.div`
  position: relative;
  background-size: cover;
  margin-top: 0rem;
  
  .flex-container{
  display: flex;
  }

  .text-content{
  flex: 1;

  h1{
    font-weight: 600;
    font-size: 2rem;
    padding: 10rem 2rem 0.5rem 15rem;
    }
  
    p{
    padding: 0rem 4rem 2rem 15rem;
    font-size: 1.5rem;
    text-align: justify;
    color: #909090;
    }

  }

  .image-content{
  margin-right: 20px;
  padding: 5rem 15rem 2rem 0rem;
  }

  .flex-container1{
  display: flex;
  }

  .image-content1{
  flex: 1; 

  h1{
    font-weight: 600;
    font-size: 2rem;
    padding: 10rem 2rem 0.5rem 2rem;
    }
    
    p{
    padding: 0rem 15rem 2rem 2rem;
    font-size: 1.5rem;
    text-align: justify;
    color: #909090;
    }  
  } 

  .text-content1{
   padding: 2rem 4rem 2rem 15rem;
  }
  `

export default HeroSection