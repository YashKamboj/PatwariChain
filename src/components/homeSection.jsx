import React from 'react'
import styled from 'styled-components'; 

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="text-container">
       </div>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
    position: relative;
    height: 42rem;
    overflow: hidden;
    background: url(home.png) no-repeat center;
    background-size : cover;
    margin-top: 0.25rem;
    
    h1{
      color: #fff; 
      font-size: 3rem;
    }
    .text-container{
      margin: 1rem 0rem 5rem 0rem;
      text-align: center;
      bottom: 0;
    }
  `;

export default HeroSection