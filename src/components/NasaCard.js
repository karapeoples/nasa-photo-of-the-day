import React from 'react';
import styled, {keyframes}  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  const glitch1 = keyframes`
    0% {
      transform: none;
      opacity: 1;
    }
    7% {
      transform: skew(-0.5deg, -0.9deg);
      opacity: 0.75;
    }
    10% {
      transform: none;
      opacity: 1;
    }
    27% {
      transform: none;
      opacity: 1;
    }
    30% {
      transform: skew(0.8deg, -0.1deg);
      opacity: 0.75;
    }
    35% {
      transform: none;
      opacity: 1;
    }
    52% {
      transform: none;
      opacity: 1;
    }
    55% {
      transform: skew(-1deg, 0.2deg);
      opacity: 0.75;
    }
    50% {
      transform: none;
      opacity: 1;
    }
    72% {
      transform: none;
      opacity: 1;
    }
    75% {
      transform: skew(0.4deg, 1deg);
      opacity: 0.75;
    }
    80% {
      transform: none;
      opacity: 1;
    }
    100% {
      transform: none;
      opacity: 1;
    }`
  
   
 
     const glitch2 = keyframes` 
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(-2px, -3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(-5px, -2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(-5px, -1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(-2px, -6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }`
   
  
  
 
    const glitch3= keyframes`
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(2px, 3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(5px, 2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(5px, 1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(2px, 6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }`
   


const Entry = styled.div`
width: 98%;
margin: 0 auto;
background: radial-gradient(#e9a79a, white, #1f8999) ; 
`
const PageTitle = styled.h1`
font-size: 500%;
color: #6168b3;
font-family: 'Tomorrow', sans-serif;
`
const Para = styled.p`
font-size 225%;
color: #511868;
font-family:'Tomorrow', sans-serif;`

const Box = styled.section`
display: flex;
width: 98%;
margin: 2%;
`
const PhotoDiv = styled.div`
width: 50%;

`
const Daily = styled.img`
width: 100%;
height:100%;
animation: ${glitch1} 2.5s infinite`

const Daily2 = styled.img`
width: 100%;
height:100%;
animation: ${glitch2} 2.5s infinite;
`
const Daily3 = styled.img`
width: 100%;
height:100%;
animation: ${glitch3} 2.5s infinite;
`

const TextDiv = styled.div`
width: 50%;
margin: 2%;`

const Explain = styled.p`
font-size 225%;
color: #511868;
width:100%;
font-family: 'Josefin Sans', sans-serif;`

const PhotoTitle = styled.h2`
font-size: 350%;
color: #6168b3;
margin-top: 2%;
text-decoration:underline overline ;
font-style: italic;
font-family: 'Josefin Sans', sans-serif;
`
const Copy = styled.span`
color: #6168b3;
width:100%
font-family: 'Tomorrow', sans-serif;
`
const Footer = styled.footer`
font-size 150%;
color: #6168b3;
width:100%;
background: black;
font-family: 'Josefin Sans', sans-serif;
`



const NasaCard  = ({imgUrl, title, description, date, copyright}) =>{

    return(
        <Entry>
        <PageTitle>Beauty from Space</PageTitle>
        <PhotoTitle> {title}</PhotoTitle>
        <Para> On This Day: {date} </Para>
        <Box>
        <PhotoDiv><Daily src = {imgUrl} alt = 'Nasa Daily'  /></PhotoDiv>
        <TextDiv>
        <Explain>{description}</Explain>
        </TextDiv>
        </Box>
        <Footer> <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'copyright' }}/>
        <Copy> Photo {copyright}</Copy>
        </Footer>
        </Entry>
    );
}

export default NasaCard

