import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
height: 100%;`

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
        <PhotoDiv><Daily src = {imgUrl} alt = 'Nasa Daily'/></PhotoDiv>
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