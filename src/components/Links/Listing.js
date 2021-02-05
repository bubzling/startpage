import React, { useState, useEffect } from 'react'

import LinkCard from '../linkCard/LinkCard';

/*
    component to list quick links
*/

const Listing = props => {
    const { list, addLink, deleteCat, updateLink, deleteLink } = props;



    const renderCard = () =>
        list.map((data, i) =>
            <LinkCard key={i} id={i} data={data} 
                addLink={addLink}
                deleteCat={deleteCat}
                updateLink={updateLink}
                deleteLink={deleteLink} />);



    return (
        <div>
            <h3>This is the stuff</h3>
            { renderCard() }
        </div>
    )
}


export default Listing;