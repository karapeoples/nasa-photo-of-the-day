import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';


const Nasa = () => {
const [info, setInfo]=useState([]);

    useEffect(()=> {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=2guqPJypO9JUqsX8FC3TaS6334oaeokT1mao8iLV')
        .then(data => {
        /* console.log(data.data); */
        setInfo(data.data);
    })
    .catch(error => {console.log('None for You', error);
    
    });

}, []);
    console.log(info);
    return(

        <NasaCard 
        title = {info.title}
        date = {info.date}
        imgUrl = {info.hdurl}
        description = {info.explanation}
        copyright={info.copyright}
        />



    );
}


export default Nasa


