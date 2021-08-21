import React from 'react';
import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {


    const { loading, data } = useFetchGifs(category);


    return (
        <>
        <h3 className= ' animate__animated animate__fadeInDown'>{category}</h3>
        {loading && <p>Loaging</p>}
        <div className="card-grid">

                {
                    data.map( img => {
                       return (<GifGridItem 
                        key={img.id} 
                        {...img} />)
                    })
                }

        </div>
        </>
        
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
