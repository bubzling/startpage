import React from 'react'
import PropTypes from 'prop-types'
import LinkCard from '../linkCard/LinkCard';

/*
    component listing all the LinksCard by their categories
*/

const Listing = props => {
    const { list, addLink, deleteCat, updateLink, deleteLink } = props;

    // render each card
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

Listing.propTypes = {
    list: PropTypes.array.isRequired,
    addLink: PropTypes.func.isRequired,
    deleteCat: PropTypes.func.isRequired,
    updateLink: PropTypes.func.isRequired,
    deleteLink: PropTypes.func.isRequired,
}


export default Listing;