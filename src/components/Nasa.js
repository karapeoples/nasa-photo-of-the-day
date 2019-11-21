import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';

const Nasa = () => {
const [info, setInfo]=useState([]);

    useEffect(()=> {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=2guqPJypO9JUqsX8FC3TaS6334oaeokT1mao8iLV')
        .then(data => {
        console.log(data.data);
        setInfo(data.data);
    })
    .catch(error => {console.log('None for You');
    
    });

}, []);
    console.log(info);
    return(

        <NasaCard 
         imgUrl = {info.hdurl}
         title = {info.title}
         description = {info.explanation}
         date = {info.date}
        />



    );
}


export default Nasa
