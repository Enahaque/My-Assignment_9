import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Countries = () => {
    const[countries,setCountries] = useState([]);
    useEffect( () => {
        const url = 'https://restcountries.com/v3.1/all';
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));
    },[]);

    return (
        <div>
            <h1>This is my country : {countries.length}</h1>
            {
                countries.map(country => <ul>
                    <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                </ul>)
            }
           
        </div>
    );
};

export default Countries;