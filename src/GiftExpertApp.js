import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiftExpertApp = props => {


    const [categories, setCategories] = useState(['Death note'])


    //const handleAdd = ( ) =>{

        //let categoriesTmp = [...categories];

        //categoriesTmp.push('Digimon');
        //setCategories(categoriesTmp);
      //  setCategories([...categories,  'Digimon']);
        //setCategories(cats => [...cats, 'Digimon']);
    //};

    return (
        <>
            <h2>Gift Expert app</h2>
            <hr/>

            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                 categories.map( cat => {
                     return (<GifGrid 
                                key={cat} category={cat}
                                />)
                 })
                }
            </ol>
            

        </>
    )
}


export default GiftExpertApp
