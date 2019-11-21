import React from 'react';


const NasaCard  = ({imgUrl, title, description, date}) =>{

    return(
        <div>
        <h1>Beauty from Space</h1>
        <p> On This Day: {date} </p>
        <h2>{title}</h2>
        <div><img src = {imgUrl} alt = 'Nasa Daily'/></div>
        <p>{description}</p>
        
        </div>
    );
}

export default NasaCard